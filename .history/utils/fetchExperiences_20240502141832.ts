import { Experience } from "@/typings";
export const fetchKills = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`)

    const data = await res.json()
    const pageInfo: Experience[]= data.pageInfo

    console.log("fetching", pageInfo);
    

    return pageInfo
}