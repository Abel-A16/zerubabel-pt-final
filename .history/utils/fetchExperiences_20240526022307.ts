import { SanityClient } from '../sanity';
import { Experience } from '@/typings';

// Your GROQ query
const query = `*[_type == "experience"]{
  _id,
  title,
  company,
  // Add other fields you need
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
