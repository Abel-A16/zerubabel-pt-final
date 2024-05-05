import type { NextApiRequest } from "next";
import { groq } from "next-sanity";
import { SanityClient } from "../../sanity";

const query = groq`
    *[_type == "soci]
`