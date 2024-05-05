import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { SanityClient } from "../../sanity";
import { Project } from "@/typings";

const query = groq`
    *[_type == "experience"]{
      ...,
      technologies[]->
    }
`;

type Data = {
    exper: Project[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
  ) {
    const exper: Project[] =await SanityClient.fetch(query)
    res.status(200).json({ exper });
  }