import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { SanityClient } from "../../sanity";
import { Skill } from "@/typings";

const query = groq`
    *[_type == "skill"]
`

type Data = {
    skills: Projec[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
  ) {
    const skills: Skill[] =await SanityClient.fetch(query)
    res.status(200).json({ skills });
  }