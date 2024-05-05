import { Experienceexperiences } from "@/typings";
export const fetchKills = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`)

    const data = await res.json()
    const experiences: Experienceexperiences[]= data.experiences

    console.log("fetching", experiences);
    

    return experiences
}