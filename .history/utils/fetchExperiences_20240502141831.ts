import { Experiencee } from "@/typings";
export const fetchKills = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`)

    const data = await res.json()
    const e: Experiencee[]= data.e

    console.log("fetching", e);
    

    return e
}