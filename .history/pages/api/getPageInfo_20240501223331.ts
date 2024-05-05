import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { SanityClient } from "../../sanity";
import { P } from "@/typings";

const query = groq`
    *[_type == "pageInfo"][0]
`;

type Data = {
    pageInfo: P[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
  ) {
    const pageInfo: P[] =await SanityClient.fetch(query)
    res.status(200).json({ pageInfo });
  }