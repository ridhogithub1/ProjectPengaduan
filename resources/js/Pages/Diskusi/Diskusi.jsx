// resources/js/Pages/Diskusi/Diskusi.jsx
import React from 'react';
import { Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Diskusi({ auth, diskusi }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <main className="h-full pb-16 overflow-y-auto">
                <div className="container grid px-6 mx-auto">
                    <div className="flex justify-between items-center my-6">
                        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
                            Diskusi
                        </h2>
                        <Link href="/diskusi/create" className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                            Tambah Diskusi
                        </Link>
                    </div>

                    
                    <div className="w-full mb-8 overflow-hidden rounded-lg shadow-xs">
                        <div className="w-full overflow-x-auto">
                            <table className="w-full whitespace-no-wrap">
                                <thead>
                                    <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                        <th className="px-4 py-3">No</th>
                                        <th className="px-4 py-3">Judul</th>
                                        <th className="px-4 py-3">Isi</th>
                                        <th className="px-4 py-3">Image</th>
                                        <th className="px-4 py-3">Tanggal</th>
                                        <th className="px-4 py-3">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                    {diskusi && diskusi.map((item, index) => (
                                        <tr className="text-gray-700 dark:text-gray-400" key={item.id}>
                                            <td className="px-4 py-3">{index + 1}</td>
                                            <td className="px-4 py-3">{item.judul}</td>
                                            <td className="px-4 py-3">{item.isi}</td>
                                            <td className="px-4 py-3">
                                                <img src={item.image} alt={item.judul} className="w-20 h-20 object-cover rounded" />
                                            </td>
                                            <td className="px-4 py-3">{item.tanggal}</td>
                                            <td className="px-4 py-3">
                                                <Link href={`/diskusi/edit/${item.id}`} className="text-blue-600 hover:underline">Edit</Link>
                                                <Link href={`/diskusi/delete/${item.id}`} className="text-red-600 hover:underline ml-2">Delete</Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </AuthenticatedLayout>
    );
}
