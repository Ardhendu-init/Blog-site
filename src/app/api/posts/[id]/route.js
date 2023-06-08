import { NextResponse } from "next/server";
import connectDb from "../../../../utils/Connect";
import Posts from "../../../../models/Posts";

export const GET = async (reqest, { params }) => {
  const id = params.id;
  try {
    await connectDb();
    const post = await Posts.findById(id);
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    console.log(error);
  }
};
