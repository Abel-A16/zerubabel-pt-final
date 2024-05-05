import { Experienceexperience } from "@/typings";
export const fetchKills = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`)

    const data = await res.json()
    const experience: Experienceexperience[]= data.experience

    console.log("fetching", experience);
    

    return experience
}