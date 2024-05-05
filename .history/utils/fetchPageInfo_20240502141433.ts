import { PageInfo } from "@/typings";
export const fetchKills = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`)

    const data = await res.json()
    const page: PageInfo[]= data.page

    console.log("fetching", page);
    

    return page
}