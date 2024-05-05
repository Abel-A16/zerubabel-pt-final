import { Skill } from "@/typings";
export const fetchKills = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`)

    const data = await res.json()
    const socials: Skill[]= data.socials

    console.log("fetching", soc);
    

    return skills
}