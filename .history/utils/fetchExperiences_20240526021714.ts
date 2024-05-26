import { SanityClient } from './../.history/sanity_20240501231233';
import { Experience } from "@/typings";
import { Result } from 'postcss';
export const fetchExperiences = async() => {
    const res = await SanityClient.fetch(query)
    const data = await res.json()
    const experiences: Experience[]= Result

    console.log("fetching", experiences);
    

    return experiences
}
