import { Social } from "@/typings";
export const fetchKills = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`)

    const data = await res.json()
    const pro: Social[]= data.pro

    console.log("fetching", pro);
    

    return pro
}