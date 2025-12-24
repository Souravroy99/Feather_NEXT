import UserModel from "@/models/User"
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs"
import connectDB from "@/utils/db";

export const POST = async(request) => {
    try {
        const {name, email, password} = await request.json()

        await connectDB();

        const hashedPassword = await bcryptjs.hash(password, 10)
        const newUser = await UserModel.create({name, email, password: hashedPassword})

        return new NextResponse('User created successfully', {status: 201})
    } 
    catch (error) {
        return new NextResponse(error.message, {status: 500})
    }
}