import { SanityClient } from '../sanity';
import { Social } from "@/typings";

const query = `*[_type == "social"]{
    title,
    url
}`;

export const fetchSocials = async (): Promise<Social[] | null> => {
  try {
    const socials: Social[] = await SanityClient.fetch(query);
    console.log("Fetched socials:", socials);
    return socials;
  } catch (error) {
    console.error("Error fetching socials:", error);
    return null;
  }
};
