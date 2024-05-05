import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";


export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: "ox3jxwbz,
    apiVersion: "2022-03-07",
    useCdn: process.env.NODE_ENV === "production"
};

export const SanityClient = createClient(config);

// Pass projectId and dataset separately to createImageUrlBuilder
export const urlFor = (source: any) => 
    createImageUrlBuilder(config).image(source);
