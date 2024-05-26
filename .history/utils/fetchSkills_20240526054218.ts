import { SanityClient } from '../sanity';
import { Skill } from "@/typings";

const query = `*[_type == "skill"]{
  _id,
    image,
    progress,
}`;

export const fetchSkills = async (): Promise<Skill[] | null> => {

    const skills: Skill[]= await SanityClient.fetch(query);
    console.log("Fetched skills:", skills);
    return skills;
  
};
