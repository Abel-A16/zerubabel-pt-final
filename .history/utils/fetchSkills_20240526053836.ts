import { SanityClient } from '../sanity';
import { Skill } from "@/typings";

const query = `*[_type == "skill"]{
  _id,
    image,
    progress,
}`;

export const fetchSkills = async (): Promise<Skill[] | null> => {
  try {
    const skills: Skill[]= await SanityClient.fetch(query);
    console.log("Fetched skills:", skills);
    return skills;
  } catch (error) {
    console.error("Error fetching skills:", error);
    return null;
  }
};
