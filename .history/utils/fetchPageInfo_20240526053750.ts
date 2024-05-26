import { SanityClient } from '../sanity';
import { PageInfo } from "@/typings";

const query = `*[_type == "pageInfo"][0]{
    _id,
  
    backgroundInformation,
    email,
    role,
    heroImage,
    name,
    profilePic
}`;

export const fetchPageInfo = async (): Promise<PageInfo | null> => {
  try {
    const pageInfo: PageInfo = await SanityClient.fetch(query);
    console.log("Fetched page info:", pageInfo);
    return pageInfo;
  } catch (error) {
    console.error("Error fetching page info:", error);
    return null;
  }
};
