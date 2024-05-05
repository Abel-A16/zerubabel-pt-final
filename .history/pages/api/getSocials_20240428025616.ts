import type { NextApiRequest } from "next";
import { groq } from "next-sanity";
import { SanityClient } from "../../sanity";

const query = groq`
    *[_type == "social"]
`

type data

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
  ) {
    res.status(200).json({ name: "John Doe" });
  }