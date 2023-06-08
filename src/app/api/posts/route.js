import { NextResponse } from "next/server";
import connectDb from "../../../utils/Connect";
import Posts from "../../../models/Posts";

export const GET = async (reqest) => {
  try {
    await connectDb();
    const posts = await Posts.find();
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    console.log(error);
  }
};
