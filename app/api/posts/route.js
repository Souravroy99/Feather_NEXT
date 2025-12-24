import { NextResponse } from "next/server"
import connectDB from "@/utils/db"
import PostModel from "@/models/Post"

export const GET = async(request) => {
    try {
        await connectDB()

        const posts = await PostModel.find()

        return new NextResponse(JSON.stringify(posts), { status: 200 })
    } catch (error) {
        return new NextResponse("DB connection fail", { status: 500 })
    }
}