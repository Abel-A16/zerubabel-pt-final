import { SanityClient } from '../sanity';
import { Social } from "@/typings";

const query = `*[_type == "social"]{
  _id,
    title,
    url
}`;

export const fetchSocials = async (): Promise<Social[] | null> => {
  try {
    const socials: Social[] | null = await SanityClient.fetch(query);
    console.log("Fetched socials:", socials);
    return socials;
  } catch (error) {
    console.error("Error fetching socials:", error);
    return null;
  }
};
