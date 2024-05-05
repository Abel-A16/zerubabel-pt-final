import { Pro } from "@/typings";
export const fetchKills = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`)

    const data = await res.json()
    const projects: Pro[]= data.projects

    console.log("fetching", projects);
    

    return projects
}