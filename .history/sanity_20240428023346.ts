import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url"

export const config = {
    dataset: process.env.NEXT_SANITY
    projectId:
    apiVersion:
    useCdn:
}
export const urlFor = (source:any) =>
    createImageUrlBuilder(config).image(source)