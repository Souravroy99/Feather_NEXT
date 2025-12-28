import PostModel from "@/models/Post"
import connectDB from "@/utils/db"
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

export const DELETE = async(request, {params}) => {
    try {
        const {id} = await params
        
        await connectDB();
        await PostModel.findByIdAndDelete(id)
            
        return new NextResponse("Post has been deleted", {status: 200})
    } 
    catch (error) {
        return new NextResponse("Database Error", {status: 500})
    }
}