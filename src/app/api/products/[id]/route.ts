
import { NextResponse } from "next/server";

export async function GET(req: Request,res: Response) {
    try{

        const id = req.url.split("products/")[1]

        const response = (await fetch(`https://fakestoreapi.com/products/${id}`)).json()
        const data = await Promise.resolve(response)

        return NextResponse.json({ data : data })

    }catch(err){
        return NextResponse.json({ data : undefined})
        
    }
}