
import React from 'react';
import { useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Transition } from '@headlessui/react';

export default function EditPengaduan({ auth, pengaduan }) {
    const { data, setData, put, processing, errors, recentlySuccessful } = useForm({
        name: pengaduan.name || '',
        lokasi: pengaduan.lokasi || '',
        jenis: pengaduan.jenis || '',
        tanggal: pengaduan.tanggal || '',
        image: null,
        status: pengaduan.status || 'in pending',
    });

    const submit = (e) => {
        e.preventDefault();
        put(route('pengaduan.update', pengaduan.id), {
            onSuccess: () => {
                // Reset form if needed
                setData({
                    name: '',
                    lokasi: '',
                    jenis: '',
                    tanggal: '',
                    image: null,
                    status: 'in pending',
                });
            }
        });
    };

    const handleFileChange = (e) => {
        setData('image', e.target.files[0]);
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <section className="max-w-7xl mx-auto p-8 mt-8 bg-white rounded shadow-lg">
                <header>
                    <h2 className="text-xl font-medium text-gray-900 dark:text-gray-100">Edit Pengaduan</h2>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        Edit pengaduan Anda di sini.
                    </p>
                </header>

                <form onSubmit={submit} className="mt-6 space-y-6">
                    <div>
                        <InputLabel htmlFor="name" value="Nama" />
                        <TextInput
                            id="name"
                            className="mt-1 block w-full rounded-md"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                            autoComplete="name"
                        />
                        <InputError className="mt-2" message={errors.name} />
                    </div>

                    <div>
                        <InputLabel htmlFor="lokasi" value="Lokasi" />
                        <TextInput
                            id="lokasi"
                            className="mt-1 block w-full rounded-md"
                            value={data.lokasi}
                            onChange={(e) => setData('lokasi', e.target.value)}
                            required
                        />
                        <InputError className="mt-2" message={errors.lokasi} />
                    </div>

                    <div>
                        <InputLabel htmlFor="jenis" value="Jenis" />
                        <select
                            id="jenis"
                            className="mt-1 block w-full rounded-md"
                            value={data.jenis}
                            onChange={(e) => setData('jenis', e.target.value)}
                            required
                        >
                            <option value="Urgent">Urgent</option>
                            <option value="Non urgent">Non urgent</option>
                        </select>
                        <InputError className="mt-2" message={errors.jenis} />
                    </div>

                    <div>
                        <InputLabel htmlFor="tanggal" value="Tanggal" />
                        <TextInput
                            id="tanggal"
                            type="date"
                            className="mt-1 block w-full rounded-md"
                            value={data.tanggal}
                            onChange={(e) => setData('tanggal', e.target.value)}
                            required
                        />
                        <InputError className="mt-2" message={errors.tanggal} />
                    </div>

                    <div>
                        <InputLabel htmlFor="image"/>
                        <input
                            id="image"
                            type="file"
                            className="mt-1 block w-full rounded-md"
                            onChange={handleFileChange}
                        />
                        <InputError className="mt-2" message={errors.image} />
                    </div>

                    <div>
                        <InputLabel htmlFor="status" value="Status" />
                        <select
                            id="status"
                            className="mt-1 block w-full rounded-md"
                            value={data.status}
                            onChange={(e) => setData('status', e.target.value)}
                            required
                        >
                            <option value="in pending">In Pending</option>
                            <option value="completed">Completed</option>
                        </select>
                        <InputError className="mt-2" message={errors.status} />
                    </div>

                    <div className="flex items-center gap-4">
                        <PrimaryButton className="bg-purple-600 hover:bg-purple-700 px-4 py-2 text-sm" disabled={processing}>Update</PrimaryButton>

                        <Transition
                            show={recentlySuccessful}
                            enter="transition ease-in-out"
                            enterFrom="opacity-0"
                            leave="transition ease-in-out"
                            leaveTo="opacity-0"
                        >
                            <p className="text-sm text-gray-600 dark:text-gray-400">Updated.</p>
                        </Transition>
                    </div>
                </form>
            </section>
        </AuthenticatedLayout>
    );
}
