'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Title from './Title'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { SubmitHandler, useForm } from 'react-hook-form'


type FormValues = {
    name: string;
    email: string;
    subject: string;
    message: string;
}

type Props = {}

function ContactMe({ }: Props) {
    const {
        register,
        handleSubmit,
    } = useForm<FormValues>()

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        
        const { name, email, subject, message } = data;
        const body = `Hi, I am ${name}\n\n${message}\n\nEmail: ${email}`;
        const mailtoLink = `mailto:zerubabelendale16@gmail.com?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;
    };

    return (
        <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row sm:flex-col max-w-5xl justify-evenly mx-auto items-center'>
            <Title text={'Contact'} />

            <div className='mt-40 flex flex-col space-y-5'>
                <h4 className='text-4xl text:3xl font-semibold text-center'>
                    I have got just what you need.{" "}
                    <span className='decoration-[#778A35]/50 underline'> Lets Talk.</span>
                </h4>
                <div className='space-y-7'>
                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon className='text-[#778A35] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>+251967423187</p>
                    </div>

                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='text-[#778A35] h-8 w-8 animate-pulse' />
                        <p className='text-2xl'>zerubabelendale16@gmail.com</p>
                    </div>

                    <div className='flex items-center space-x-5 justify-center'>
                        <MapPinIcon className='text-[#778A35] h-8 w-8 animate-pulse' />
                        <p className='text-2xl'>Yeka, Addis Ababa Ethiopia</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2'>
                        <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
                        <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
                    </div>
                    <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />
                    <textarea {...register('message')} placeholder='Message' className='contactInput' />
                    <button
                        type='submit'
                        className='bg-[#778A35] py-5 px-10 text-black font-bold rounded-md'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactMe
