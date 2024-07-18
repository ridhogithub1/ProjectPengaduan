import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';

export default function UpdateProfileInformation({ mustVerifyEmail, status, className = '' }) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        name: user.name,
        email: user.email,
        alamat: user.alamat,
        jenis_kelamin: user.jenis_kelamin,
        tanggal_lahir: user.tanggal_lahir,
        kontak: user.kontak,
        role: user.role,
        status: user.status,
    });

    const submit = (e) => {
        e.preventDefault();

        patch(route('profile.update'));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Profile Information</h2>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Update your account's profile information and email address.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>

                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-full"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                        autoComplete="username"
                    />

                    <InputError className="mt-2" message={errors.email} />
                </div>

                <div>
                    <InputLabel htmlFor="alamat" value="Alamat" />

                    <TextInput
                        id="alamat"
                        className="mt-1 block w-full"
                        value={data.alamat}
                        onChange={(e) => setData('alamat', e.target.value)}
                        required
                    />

                    <InputError className="mt-2" message={errors.alamat} />
                </div>

                <div>
                    <InputLabel htmlFor="jenis_kelamin" value="Jenis Kelamin" />

                    <TextInput
                        id="jenis_kelamin"
                        className="mt-1 block w-full"
                        value={data.jenis_kelamin}
                        onChange={(e) => setData('jenis_kelamin', e.target.value)}
                        required
                    />

                    <InputError className="mt-2" message={errors.jenis_kelamin} />
                </div>

                <div>
                    <InputLabel htmlFor="tanggal_lahir" value="Tanggal Lahir" />

                    <TextInput
                        id="tanggal_lahir"
                        type="date"
                        className="mt-1 block w-full"
                        value={data.tanggal_lahir}
                        onChange={(e) => setData('tanggal_lahir', e.target.value)}
                        required
                    />

                    <InputError className="mt-2" message={errors.tanggal_lahir} />
                </div>

                <div>
                    <InputLabel htmlFor="kontak" value="Kontak" />

                    <TextInput
                        id="kontak"
                        className="mt-1 block w-full"
                        value={data.kontak}
                        onChange={(e) => setData('kontak', e.target.value)}
                        required
                    />

                    <InputError className="mt-2" message={errors.kontak} />
                </div>

                <div>
                    <InputLabel htmlFor="role" value="Role" />

                    <TextInput
                        id="role"
                        className="mt-1 block w-full"
                        value={data.role}
                        onChange={(e) => setData('role', e.target.value)}
                        required
                    />

                    <InputError className="mt-2" message={errors.role} />
                </div>

                <div>
                    <InputLabel htmlFor="status" value="Status" />

                    <TextInput
                        id="status"
                        className="mt-1 block w-full"
                        value={data.status}
                        onChange={(e) => setData('status', e.target.value)}
                        required
                    />

                    <InputError className="mt-2" message={errors.status} />
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="text-sm mt-2 text-gray-800 dark:text-gray-200">
                            Your email address is unverified.
                            <Link
                                href={route('verification.send')}
                                method="post"
                                as="button"
                                className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === 'verification-link-sent' && (
                            <div className="mt-2 font-medium text-sm text-green-600 dark:text-green-400">
                                A new verification link has been sent to your email address.
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4">
                    <PrimaryButton className="bg-purple-600 hover:bg-purple-700" disabled={processing}>Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600 dark:text-gray-400">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
