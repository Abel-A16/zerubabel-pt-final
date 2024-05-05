import { Experienceexperien } from "@/typings";
export const fetchKills = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`)

    const data = await res.json()
    const experien: Experienceexperien[]= data.experien

    console.log("fetching", experien);
    

    return experien
}