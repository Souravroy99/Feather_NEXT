import PostModel from "@/models/Post"
import { NextResponse } from "next/server"

export const GET = async(request, {params}) => {
    const {id} = await params

    try {
        const post = await PostModel.findById(id)    
        return new NextResponse(JSON.stringify(post), {status: 200})
    } 
    catch (error) {
        return new NextResponse("Database Error", {status: 500})
    }
}