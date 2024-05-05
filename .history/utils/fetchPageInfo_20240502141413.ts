import { P } from "@/typings";
export const fetchKills = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`)

    const data = await res.json()
    const projects: P[]= data.projects

    console.log("fetching", projects);
    

    return projects
}