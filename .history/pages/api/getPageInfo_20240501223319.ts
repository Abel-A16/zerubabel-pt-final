import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { SanityClient } from "../../sanity";
import { Project } from "@/typings";

const query = groq`
    *[_type == "pageInfo"][0]
`;

type Data = {
    pageInfo: Project[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
  ) {
    const pageInfo: Project[] =await SanityClient.fetch(query)
    res.status(200).json({ pageInfo });
  }