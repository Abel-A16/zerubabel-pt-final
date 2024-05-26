import { SanityClient } from '../sanity';
import { PageInfo } from "@/typings";

const query = `*[_type == "pageInfo"][0]{
    _id,
    address,
    backgroundInformation,
    email,
    role,
    heroImage,
    name,
    phoneNumber,
    profilePic, 
}`;

export const fetchPageInfo = async (): Promise<PageInfo | null> => {
  try {
    const pageInfo: PageInfo | null = await SanityClient.fetch(query);
    console.log("Fetched page info:", pageInfo);
    return pageInfo;
  } catch (error) {
    console.error("Error fetching page info:", error);
    return null;
  }
};
