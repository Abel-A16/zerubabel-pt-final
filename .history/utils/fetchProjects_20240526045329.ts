import { SanityClient } from '../sanity';
import { Project } from "@/typings";

const query = `*[_type == "project"]{
  _id,
  title,
    image,
    linkToBuild,
    summary,
    technologies[]->{
        image,
        progress,
        title
      }
}`;

export const fetchProjects = async (): Promise<Project[] | null> => {
  try {
    const projects: Project[] | null = await SanityClient.fetch(query);
    console.log("Fetched projects:", projects);
    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return null;
  }
};
