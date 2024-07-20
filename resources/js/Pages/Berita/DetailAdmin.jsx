import React, { useState } from 'react';
import { Link, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { IoMdArrowRoundBack } from "react-icons/io";
import { FiEdit } from "react-icons/fi"; // Import icon for Edit button

export default function Berita({ auth, berita }) {
    const { data, setData, post, errors } = useForm({
        judul: '',
        isi: '',
        image: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/berita'); // Adjust the route according to your backend route
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <main className="h-full pb-16 overflow-y-auto">
                <div className="container grid px-6 mx-auto">
                    <div className="flex justify-between items-center my-6">
                        <Link href="/berita" className='flex justify-start items-center font-bold text-2xl'>
                            <IoMdArrowRoundBack />  <span className='ml-3'>{berita.judul}</span>
                        </Link>
                        <Link
                            href={route('berita.edit', berita.id)}
                            className='flex items-center font-bold text-2xl text-blue-600 hover:text-blue-800'
                        >
                            <FiEdit/> <span className='ml-2'>Edit</span>
                        </Link>
                        <Link
                                href={route('berita.destroy', berita.id)}
                                className='flex items-center font-bold text-2xl text-red-600 hover:text-red-800'
                        >
                            <FiTrash/> <span className='ml-2'>Delete</span>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white shadow-sm">
                        <div className="p-5">
                            <img src={berita.image_url} alt="image" className="w-full rounded-lg" />
                            <p className="mt-4 text-gray-700">
                                {berita.isi.length > 1000 ? `${berita.isi.substring(0, 1000)}` : berita.isi}
                            </p>
                        </div>
                        <div className="p-5">
                            <p className="mt-4 text-gray-700">
                                {berita.isi.substring(1000)}
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </AuthenticatedLayout>
    );
}
