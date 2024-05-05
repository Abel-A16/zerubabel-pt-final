'use client'
import { motion } from 'framer-motion'
import React from 'react';
import Title from './Title';

import { useEffect, useState } from 'react';
// import {db} from '../firebaseConfig';
// import {
//     collection,
//     getDocs,
//     addDoc,
//     updateDoc,
//     deleteDoc,
//     doc,
//   } from "firebase/firestore";
//   import Title from './Title'


  type UserData = {
    id: string;
    name: string;
    age: number;
    detail:string;
  };
  

const About: React.FC = () => {

//     const [newName, setNewName] = useState<string>("");
//     const [newAge, setNewAge] = useState<number>(0);
  
    const [about, setabout] = useState<UserData[]>([]);
//     const aboutCollectionRef = collection(db, "about");
  
//     const createUser = async () => {
//       await addDoc(aboutCollectionRef, { name: newName, age: Number(newAge) });
//     };
  
//     const updateUser = async (id: string, age: number) => {
//       const userDoc = doc(db, "about", id);
//       const newFields = { age: age + 1 };
//       await updateDoc(userDoc, newFields);
//     };
  
//     const deleteUser = async (id: string) => {
//       const userDoc = doc(db, "about", id);
//       await deleteDoc(userDoc);
//     };
  
//     useEffect(() => {
//       const getabout = async () => {
//         const data = await getDocs(aboutCollectionRef);
//         const fetchedabout: UserData[] = [];
//         data.forEach((doc) => {
//           fetchedabout.push({ ...doc.data(), id: doc.id } as UserData);
//         });
//         setabout(fetchedabout);
//       };
  
//       getabout();
//     }, []);


  return (
    <motion.div 
    initial = {{
        opacity: 0,
    }}
    transition={{
        duration: 1.5,
    }}
    whileInView={{
        opacity: 1,
    }}
    className='flex flex-col relative h-screen  text-center md:text-left md:flex-row 
    max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <Title text={'About'}/>
        <motion.img
            initial = {{
                x: -200,
                opacity: 0,
            }}
            transition={{
                duration: 1.2,
            }}
            whileInView={{
                opacity: 1,
                x: 0,
            }}
            viewport={{once: true}}
            src='/1787753.jpg'
            className='mt-28 md:mt-0  md:mb-0 w-56 h-55 rounded-full object-cover
             md:rounded-sm md:w-72 sm:w-44 sm:h-64 md:h-95 xl:w-[400px] xl:h-[500px]'
        />
      {about.map((about) =>{
        return(
        // eslint-disable-next-line react/jsx-key
        <div className=' space-y-2 px-0 md:px-10'>
            <h4 className='text-3xl font-semibold'>
            
                <span className='hover:underline hover:tracking-[0.1px] text-[#778A35] transition-opacity
                 duration-1000 decoration-[#778A35]'>
                    little
                </span> background
            </h4>
            <p className=' text-base'>{about.detail}
            </p>
        </div>

        )
      })}
    </motion.div>
  )
}

export default About