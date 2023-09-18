
import { NextResponse } from "next/server";

export async function GET() {

    try {

        const response = (await fetch(`https://fakestoreapi.com/products`)).json()
        const data = await Promise.resolve(response)
        
        return NextResponse.json({ data: data });

    } catch (err) {
        console.log(err);
    }

}