import { Experience } from "@/typings";
export const fetchKills = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`)

    const data = await res.json()
    const Experience: Experience[]= data.Experience

    console.log("fetching", Experience);
    

    return Experience
}