import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout_Admin';

export default function Berita({ berita }) {
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
        <AuthenticatedLayout>
            <main className="h-full pb-16 overflow-y-auto">
                <div className="container grid px-6 mx-auto">
                    <div className="flex justify-between items-center my-6">
                        <h1 className='font-bold text-3xl'>Tambah Berita</h1>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm">
                                <span className="text-gray-700">Judul</span>
                                <input
                                    type="text"
                                    className="block w-full mt-1 text-sm form-input"
                                    value={data.judul}
                                    onChange={(e) => setData('judul', e.target.value)}
                                />
                                {errors.judul && <span className="text-red-600">{errors.judul}</span>}
                            </label>
                        </div>
                        <div>
                            <label className="block text-sm">
                                <span className="text-gray-700">Isi</span>
                                <textarea
                                    className="block w-full mt-1 text-sm form-textarea"
                                    rows="3"
                                    value={data.isi}
                                    onChange={(e) => setData('isi', e.target.value)}
                                ></textarea>
                                {errors.isi && <span className="text-red-600">{errors.isi}</span>}
                            </label>
                        </div>
                        <div>
                            <label className="block text-sm">
                                <span className="text-gray-700">Image</span>
                                <input
                                    type="file"
                                    className="block w-full mt-1 text-sm form-input"
                                    onChange={(e) => setData('image', e.target.files[0])}
                                />
                                {errors.image && <span className="text-red-600">{errors.image}</span>}
                            </label>
                        </div>
                        <div className="flex justify-end mt-4">
                            <button
                                type="submit"
                                className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </AuthenticatedLayout>
    );
}
