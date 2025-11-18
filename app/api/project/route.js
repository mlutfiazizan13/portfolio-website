import { NextResponse } from "next/server";
import dbConnect from "../../../lib/mongodb";
import Project from "../../../lib/models/Project";

export async function GET(request) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");

    if (slug) {
      const project = await Project.findOne({ slug });

      if (!project) {
        return NextResponse.json(
          {
            status: 404,
            success: false,
            message: "Project not found",
          },
          { status: 404 }
        );
      }

      return NextResponse.json({
        status: 200,
        success: true,
        data: project,
      });
    }

    const projects = await Project.find({});
    const appCount = await Project.countDocuments({ type: 'Apps' });
    const devopsCount = await Project.countDocuments({ type: 'DevOps' });
    const databasesCount = await Project.countDocuments({ type: 'Databases' });

    projects.values();
    return NextResponse.json({ 
        status: 200, 
        success: true, 
        data: projects,
        counts: {
          apps: appCount,
          devops: devopsCount,
          databases: databasesCount,
        }
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
