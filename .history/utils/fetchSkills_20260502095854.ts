import { SanityClient } from '../sanity';
import { Skill } from "@/typings";

const query = `*[_type == "skill"]{
  _id,
  title,
  image,
  progress
}`;

export const fetchSkills = async (): Promise<Skill[]> => {
  const skills: Skill[] = await SanityClient.fetch(query);
  return skills;
};
