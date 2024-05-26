import { Experience } from "@/typings";
export const fetchExperiences = async() => {
    const res = await fetch(process.env.URL + 'api/getExperience')

    const data = await res.json()
    const experience: Experience[]= data.experience

    console.log("fetching", experience);
    

    return experience
}