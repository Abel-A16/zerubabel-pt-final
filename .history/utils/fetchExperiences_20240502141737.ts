import { Experienceexperie } from "@/typings";
export const fetchKills = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`)

    const data = await res.json()
    const experie: Experienceexperie[]= data.experie

    console.log("fetching", experie);
    

    return experie
}