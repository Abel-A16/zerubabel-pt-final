import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { SanityClient } from "../../sanity";
import { Skill } from "@/typings";

const query = groq`
    *[_type == "ski"]
`

type Data = {
    skis: Skill[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
  ) {
    const skis: Skill[] =await SanityClient.fetch(query)
    res.status(200).json({ skis });
  }