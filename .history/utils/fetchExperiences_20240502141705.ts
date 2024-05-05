import { E } from "@/typings";
export const fetchKills = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`)

    const data = await res.json()
    const pageInfo: E[]= data.pageInfo

    console.log("fetching", pageInfo);
    

    return pageInfo
}