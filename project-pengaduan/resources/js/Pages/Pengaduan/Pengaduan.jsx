import React from 'react';
import { Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Pengaduan({ auth, pengaduan }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <main className="h-full pb-16 overflow-y-auto">
                <div className="container grid px-6 mx-auto">
                    <div className="flex justify-between items-center my-6">
                        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
                            Pengaduan
                        </h2>
                        <Link href="/Pengaduan/create" className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                            Tambah Pengaduan
                        </Link>
                    </div>
                 
                    <div className="w-full mb-8 overflow-hidden rounded-lg shadow-xs">
                        <div className="w-full overflow-x-auto">
                            <table className="w-full whitespace-no-wrap">
                                <thead>
                                    <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                        <th className="px-4 py-3">No</th>
                                        <th className="px-4 py-3">Nama</th>
                                        <th className="px-4 py-3">Lokasi</th>
                                        <th className="px-4 py-3">Jenis</th>
                                        <th className="px-4 py-3">Tanggal</th>
                                        <th className="px-4 py-3">Image</th>
                                        <th className="px-4 py-3">Status</th>
                                        <th className="px-4 py-3">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                    {pengaduan.map((item, index) => (
                                        <tr className="text-gray-700 dark:text-gray-400" key={item.id}>
                                            <td className="px-4 py-3 ">{index + 1}</td>
                                            <td className="px-4 py-3">
                                                <div className="flex items-center text-sm">
                                                    <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                                        <img className="object-cover w-full h-full rounded-full"
                                                            src={item.image}
                                                            alt="" loading="lazy" />
                                                        <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                                    </div>
                                                    <p className="font-semibold">{item.name}</p>
                                                </div>
                                            </td>
                                            <td className="px-4 py-3 text-sm">{item.lokasi}</td>
                                            <td className="px-4 py-3 text-xs">
                                                <span className={`px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100`}>
                                                    {item.jenis}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3 text-sm">{item.tanggal}</td>
                                            <td className="px-4 py-3">
                                                <div className="flex items-center text-sm">
                                                    {/* Avatar with inset shadow */}
                                                </div>
                                            </td>
                                            <td className="px-4 py-3 text-xs">
                                                <span className={`px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100`}>
                                                    {item.status}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3 text-xs">
                                                <Link href={`Edit/${item.id}`}
                                                    className="px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 rounded-full dark:text-gray-100 dark:bg-gray-700">
                                                    Edit
                                                </Link>
                                                <Link href={`Delete/${item.id}`}
                                                    className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700">
                                                    Delete
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
                            <span className="flex items-center col-span-3">
                                Showing 21-30 of 100
                            </span>
                            <span className="col-span-2"></span>
                            <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
                                <nav aria-label="Table navigation">
                                    <ul className="inline-flex items-center">
                                        <li>
                                            <button className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
                                                aria-label="Previous">
                                                <svg aria-hidden="true" className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                                    <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                                        clipRule="evenodd" fillRule="evenodd"></path>
                                                </svg>
                                            </button>
                                        </li>
                                        <li>
                                            <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                                                1
                                            </button>
                                        </li>
                                        <li>
                                            <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                                                2
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                className="px-3 py-1 text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple">
                                                3
                                            </button>
                                        </li>
                                        <li>
                                            <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                                                4
                                            </button>
                                        </li>
                                        <li>
                                            <span className="px-3 py-1">...</span>
                                        </li>
                                        <li>
                                            <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                                                8
                                            </button>
                                        </li>
                                        <li>
                                            <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                                                9
                                            </button>
                                        </li>
                                        <li>
                                            <button className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
                                                aria-label="Next">
                                                <svg className="w-4 h-4 fill-current" aria-hidden="true" viewBox="0 0 20 20">
                                                    <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                        clipRule="evenodd" fillRule="evenodd"></path>
                                                </svg>
                                            </button>
                                        </li>
                                    </ul>
                                </nav>
                            </span>
                        </div>
                    </div>
                </div>
            </main>
        </AuthenticatedLayout>
    );
}
