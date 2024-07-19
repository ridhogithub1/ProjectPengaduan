import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout_Admin';

export default function Pengaduan({ auth, pengaduan }) {
    const handleDelete = (id) => {
        if (confirm("Apakah Anda yakin ingin menghapus?")) {
            Inertia.delete(route('pengaduan.destroy', id), {
                onSuccess: () => {
                    alert('Pengaduan berhasil dihapus.');
                }
            });
        }
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <main className="h-full pb-16 overflow-y-auto">
                <div className="container grid px-6 mx-auto">
                    <div className="flex justify-between items-center my-6">
                        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
                            Pengaduan
                        </h2>
                        <Link href={route('pengaduan.create')} className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
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
                                    {pengaduan.data.map((item, index) => (
                                        <tr className="text-gray-700 dark:text-gray-400" key={item.id}>
                                            <td className="px-4 py-3 ">{pengaduan.from + index}</td>
                                            <td className="px-4 py-3">
                                                <div className="flex items-center text-sm">
                                                    <p className="font-semibold">{item.name}</p>
                                                </div>
                                            </td>
                                            <td className="px-4 py-3 text-sm">{item.lokasi}</td>

                                            <td className="px-4 py-3 text-xs">
                                                <span className={`px-2 py-1 font-semibold leading-tight ${item.jenis === 'Urgent' ? 'text-red-700 bg-red-100 dark:bg-red-700 dark:text-red-100' : 'text-green-700 bg-green-100 dark:bg-green-700 dark:text-green-100'} rounded-full`}>
                                                    {item.jenis}
                                                </span>
                                            </td>

                                            <td className="px-4 py-3 text-sm">{item.tanggal}</td>
                                            <td className="px-4 py-3">
                                                <div className="flex items-center text-sm">
                                                    <div className="relative w-16 h-16 mr-3 rounded-md">
                                                        <img className="object-cover w-full h-full rounded-md"
                                                            src={item.image ? `/storage/${item.image}` : '/images/default.png'}
                                                            alt="Pengaduan Image" loading="lazy" />
                                                        <div className="absolute inset-0 rounded-md shadow-inner" aria-hidden="true"></div>
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="px-4 py-3 text-xs">
                                                <span className={`px-2 py-1 font-semibold leading-tight ${item.status === 'in pending' ? 'text-orange-700 bg-orange-100 dark:bg-orange-700 dark:text-orange-100' : 'text-green-700 bg-green-100 dark:bg-green-700 dark:text-green-100'} rounded-full`}>
                                                    {item.status}
                                                </span>
                                            </td>

                                            <td className="px-4 py-3 text-xs">
                                                <Link href={route('pengaduan.edit', item.id)}
                                                    className="px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 rounded-full dark:text-gray-100 dark:bg-gray-700">
                                                    Edit
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(item.id)}
                                                    className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700 ml-2"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
                            <span className="flex items-center col-span-3">
                                Showing {pengaduan.from} to {pengaduan.to} of {pengaduan.total}
                            </span>
                            <span className="col-span-2"></span>
                            <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
                                <nav aria-label="Table navigation">
                                    <ul className="inline-flex items-center">
                                        {pengaduan.links.map((link, index) => (
                                            <li key={index}>
                                                <Link
                                                    href={link.url}
                                                    className={`px-3 py-1 rounded-md ${link.active ? 'bg-purple-600 text-white' : 'text-gray-700'}`}
                                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                                />
                                            </li>
                                        ))}
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
