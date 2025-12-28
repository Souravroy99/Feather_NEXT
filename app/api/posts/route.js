import { NextResponse } from "next/server"
import connectDB from "@/utils/db"
import PostModel from "@/models/Post" 

export const GET = async(request) => {
    try {
        const url = new URL(request.url)
        const username = url.searchParams.get("username")
        
        await connectDB()

        const posts = await PostModel.find(username && {username})

        return new NextResponse(JSON.stringify(posts), { status: 200 })
    }
    catch (error) {
        return new NextResponse("DB connection fail", { status: 500 })
    }
}

export const POST = async(request)=> {
    try {
        const body = await request.json()
        const newPost = new PostModel(body)

        console.log(newPost);

        await connectDB();
        await newPost.save()

        return new NextResponse("Post has been created", { status: 201 })
    } 
    catch (error) {
        return new NextResponse("Database Error", { status: 500 })
    }
}