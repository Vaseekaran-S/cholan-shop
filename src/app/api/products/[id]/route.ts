
import { NextResponse } from "next/server";

export async function GET(req: Request,res: Response) {
    try{

        const id = req.url.split("products/")[1]

        const response = (await fetch(`https://fakestoreapi.com/products/${id}`)).json()
        const data = await Promise.resolve(response)        

        const response2 = (await fetch(`https://fakestoreapi.com/products/category/${data.category}`)).json()
        let data2 = await Promise.resolve(response2)
        data2 = data2.filter((element:any)=> {
            return element.id != id
        });
        console.log(data2);
        
        return NextResponse.json({ data : data, similar : data2 })

    }catch(err){
        return NextResponse.json({ data : undefined})
        
    }
}