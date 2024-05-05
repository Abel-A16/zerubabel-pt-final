import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { SanityClient } from "../../sanity";
import { Project, Skill } from "@/typings";

const query = groq`
    *[_type == "skill"]
`

type Data = {
    skills: Project[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
  ) {
    const skills: Project[] =await SanityClient.fetch(query)
    res.status(200).json({ skills });
  }