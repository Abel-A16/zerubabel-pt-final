import { Experienceexper } from "@/typings";
export const fetchKills = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`)

    const data = await res.json()
    const exper: Experienceexper[]= data.exper

    console.log("fetching", exper);
    

    return exper
}