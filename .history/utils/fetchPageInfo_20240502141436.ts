import { PageInfo } from "@/typings";
export const fetchKills = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`)

    const data = await res.json()
    const pageIn: PageInfo[]= data.pageIn

    console.log("fetching", pageIn);
    

    return pageIn
}