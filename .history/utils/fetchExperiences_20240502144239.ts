import { Experience } from "@/typings";
export const fetchExp = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`)

    const data = await res.json()
    const experience: Experience[]= data.experience

    console.log("fetching", experience);
    

    return experience
}