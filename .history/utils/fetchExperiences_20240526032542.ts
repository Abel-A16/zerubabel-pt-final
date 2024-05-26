import { SanityClient } from '../sanity';
import { Experience } from '@/typings';

// Your GROQ query
const query = `*[_type == "experience"]{
    company,companyImage,dateEnded,dateStarted,isCurentlyWorkingHere,jobTitle,points,technologies,
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
