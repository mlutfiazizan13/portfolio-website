import { NextResponse } from "next/server";
import dbConnect from "../../../lib/mongodb";
import Project from "../../../lib/models/Project";

export async function GET() {
  try {
    await dbConnect();

    const projects = await Project.find({});
    return NextResponse.json({ 
        status: 200, 
        success: true, 
        data: projects 
    });

  } catch (error) {
    console.error("Database or API error:", error);
    return NextResponse.json({
        status: 500,
        success: false,
        message: 'Failed to fetch projects from the database.',
        error: error.message,
    }, { status: 500 });
  }
}