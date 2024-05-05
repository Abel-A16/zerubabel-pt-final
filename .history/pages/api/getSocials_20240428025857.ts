import type { NextApiRequest } from "next";
import { groq } from "next-sanity";
import { SanityClient } from "../../sanity";

const query = groq`
    *[_type == "social"]
`

type Data = {
    socials: Social[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
  ) {
    const socials: Social[] =await SanityClient.fetch(query)
    res.status(200).json({  });
  }