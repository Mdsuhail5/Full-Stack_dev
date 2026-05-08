import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json({
        message: "assdd"
    })
}


export function POST() {
    return NextResponse.json({
        message: "this is a post req"
    })
}