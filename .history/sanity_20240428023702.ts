import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url"

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion:
    useCdn:pro
}
export const urlFor = (source:any) =>
    createImageUrlBuilder(config).image(source)