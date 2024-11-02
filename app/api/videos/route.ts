import prisma from '@/app/utils/index'
import { NextResponse } from 'next/server';


export async function GET(){
    try {
        
        const videos = await prisma.video.findMany({
            orderBy:{
                createdAt:"desc"
            }
        })
        return NextResponse.json({
            data:videos
        } , {
            status:200,
            statusText:'this is your vidoes'
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({error: "Error fetching videos"}, {status: 500})
    } finally {
        await prisma.$disconnect()
    }
}
