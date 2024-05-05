import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { SanityClient } from "../../sanity";
import { Project, pro } from "@/typings";

const query = groq`
    *[_type == "pro"]
`

type Data = {
    pros: Project[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
  ) {
    const pros: Project[] =await SanityClient.fetch(query)
    res.status(200).json({ pros });
  }