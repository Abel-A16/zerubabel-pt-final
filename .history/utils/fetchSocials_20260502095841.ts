import { SanityClient } from '../sanity';
import { Social } from "@/typings";

const query = `*[_type == "social"]{
  _id,
  title,
  url,
  order
}`;

export const fetchSocials = async (): Promise<Social[]> => {
  const socials: Social[] = await SanityClient.fetch(query);
  return socials;
};
