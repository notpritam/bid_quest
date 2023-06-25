import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Auction from "@/models/Auction";

export const GET = async (req, res) => {
  try {
    await connect();

    const auctions = await Auction.find();

    return new NextResponse(auctions, { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
