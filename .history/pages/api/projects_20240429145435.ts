import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { SanityClient } from "../../sanity";
import { Project, proje } from "@/typings";

const query = groq`
    *[_type == "proje"]
`

type Data = {
    projes: Project[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
  ) {
    const projes: Project[] =await SanityClient.fetch(query)
    res.status(200).json({ projes });
  }