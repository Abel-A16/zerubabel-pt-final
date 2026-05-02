import { SanityClient } from '../sanity';
import { Project } from "@/typings";

const query = `*[_type == "project"]{
  _id,
  title,
  image,
  linkToBuild,
  githubLink,
  summary,
  technologies[]->{
    _id,
    image,
    progress,
    title
  }
}`;

export const fetchProjects = async (): Promise<Project[]> => {
  const projects: Project[] = await SanityClient.fetch(query);
  return projects;
};
