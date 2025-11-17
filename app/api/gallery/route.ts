import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET() {
  try {
    const items = await prisma.galleryItem.findMany({
      where: { published: true },
      orderBy: { order: "asc" },
    })
    return NextResponse.json(items)
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch gallery items" },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const item = await prisma.galleryItem.create({
      data: {
        title: body.title,
        description: body.description,
        category: body.category,
        beforeImage: body.beforeImage,
        afterImage: body.afterImage,
        treatments: body.treatments || null,
        published: body.published ?? true,
        order: body.order || 0,
      },
    })
    return NextResponse.json(item, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create gallery item" },
      { status: 500 }
    )
  }
}
