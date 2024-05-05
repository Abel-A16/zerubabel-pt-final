import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { SanityClient } from "../../sanity";
import { Project, p } from "@/typings";

const query = groq`
    *[_type == "p"]
`

type Data = {
    ps: Project[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
  ) {
    const ps: Project[] =await SanityClient.fetch(query)
    res.status(200).json({ ps });
  }