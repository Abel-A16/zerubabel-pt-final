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

export const fetchProjects = async (): Promise<Project[] > => {
    const projects: Project[] = await SanityClient.fetch(query);
    console.log("Fetched projects:", projects);
    return projects;
}
