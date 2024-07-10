
import { NextRequest, NextResponse as response } from "next/server";
import bcrypt from "bcrypt";
import connectMongo from "@/config/mongodb";
import User from "@/models/userModel";

connectMongo()

// Create a new user
export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const { name, email, mobile, password } = reqBody

        if(!name || !email || !mobile || !password){
            return response.json({ error: "Name, Mobile, Email and Password are required!" }, { status: 400 })
        }

        const isUserExist = await User.findOne({ "$or": [{ mobile: mobile }, { email: email }] })
        if (isUserExist) {
            const msg = (isUserExist.mobile === mobile) ? "Mobile Number" : "Email Id";
            return response.json({ error: `User Already Exist with this ${msg}!` }, { status: 400 })
        }

        // Hashed Password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const user = await User.create({
            name, email, mobile, password: hashedPassword
        })

        return response.json({ message: 'User created successfully', user }, { status: 201 });
    } catch (err: any) {
        console.log("Error: User Api Request - ", err?.message);
        return response.json({ error: `Server Error: ${err?.message}` }, { status: 500 })
    }
}
