import { Skill } from "@/typings";
export const fetchKills = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`)

    const data = await res.json()
    const socia: Skill[]= data.skills

    console.log("fetching", skills);
    

    return skills
}