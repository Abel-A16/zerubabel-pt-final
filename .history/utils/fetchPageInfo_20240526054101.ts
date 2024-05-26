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

export const fetchPageInfo = async (): Promise<PageInfo> => {
  
    const pageInfo: PageInfo= await SanityClient.fetch(query);
    console.log("Fetched page info:", pageInfo);
    return pageInfo;
}
