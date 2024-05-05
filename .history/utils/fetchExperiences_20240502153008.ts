import { Experience } from "@/typings";
export const fetchExperiences = async() => {
    const res = await fetch(`http://localhost:3000/api/getSocials`)

    const data = await res.json()
    const experience: Experience[]= data.experience

    console.log("fetching", experience);
    

    return experience
}