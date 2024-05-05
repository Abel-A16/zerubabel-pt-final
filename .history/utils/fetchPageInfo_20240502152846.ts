import { PageInfo } from "@/typings";
export const fetchPageInfo = async() => {
    const res = await fetch(`${pro/api/getPageInfo`)

    const data = await res.json()
    const pageInfo: PageInfo= data.pageInfo

    console.log("fetching", pageInfo);
    

    return pageInfo
}