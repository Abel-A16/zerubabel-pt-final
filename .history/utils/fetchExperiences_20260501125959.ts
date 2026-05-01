import { SanityClient } from '../sanity';
import { Experience } from '@/typings';

const query = `*[_type == "experience"]{
  _id,
  company,
  companyImage,
  dateEnded,
  dateStarted,
  isCurentlyWorkingHere,
  location,
  jobTitle,
  points,
  technologies[]->{
    image,
    progress,
    title
  }
}`;

export const fetchExperiences = async (): Promise<Experience[]> => {
  try {
    const experiences = await SanityClient.fetch(query);
    console.log("Fetched experiences:", experiences);
    return experiences;
  } catch (error) {
    console.error("Error fetching experiences:", error);
    return [];
  }
};
