import { Experienceex } from "@/typings";
export const fetchKills = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`)

    const data = await res.json()
    const ex: Experienceex[]= data.ex

    console.log("fetching", ex);
    

    return ex
}