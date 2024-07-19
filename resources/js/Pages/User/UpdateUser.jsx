import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout_Admin";
import { Head, Link, useForm } from "@inertiajs/react";

export default function TambahUser({ auth,user }) {
    const { data, setData, post, errors, reset } = useForm({
        name: user.name || "",
        email: user.email || "",
        password: "",
        password_confirmation: "",
        alamat :user.alamat || "",
        kontak : user.kontak || "",
        tanggal_lahir : user.tanggal_lahir || "",
        status : user.status || "",
        jenis_kelamin : user.jenis_kelamin || "",
        role : user.role || "",
        _method: "PUT",
    });

    const onSubmit = (e) => {
        e.preventDefault();

        post(route("user.update", user.id));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Edit user "{user.name}"
                    </h2>
                </div>
            }
        >
            <Head title="Users" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <form
                            onSubmit={onSubmit}
                            className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg"
                        >
                            <div className="mt-4">
                                <InputLabel htmlFor="user_name" value="User Name" />

                                <TextInput
                                    id="user_name"
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    onChange={(e) => setData("name", e.target.value)}
                                />

                                <InputError message={errors.name} className="mt-2" />
                            </div>
                            <div className="mt-4">
                                <InputLabel htmlFor="user_email" value="User Email" />

                                <TextInput
                                    id="user_email"
                                    type="text"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full"
                                    onChange={(e) => setData("email", e.target.value)}
                                />

                                <InputError message={errors.email} className="mt-2" />
                            </div>

                            <div className="mt-4">
                                <InputLabel htmlFor="user_password" value="Password" />

                                <TextInput
                                    id="user_password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="mt-1 block w-full"
                                    onChange={(e) => setData("password", e.target.value)}
                                />

                                <InputError message={errors.password} className="mt-2" />
                            </div>

                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="user_password_confirmation"
                                    value="Confirm Password"
                                />

                                <TextInput
                                    id="user_password_confirmation"
                                    type="password"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    className="mt-1 block w-full"
                                    onChange={(e) =>
                                        setData("password_confirmation", e.target.value)
                                    }
                                />

                                <InputError
                                    message={errors.password_confirmation}
                                    className="mt-2"
                                />
                            </div>


                            <div className="mt-4">
                                <InputLabel htmlFor="user_kontak" value="kontak" />

                                <TextInput
                                    id="user_kontak"
                                    type="number"
                                    name="kontak"
                                    value={data.kontak}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    onChange={(e) => setData("kontak", e.target.value)}
                                />

                                <InputError message={errors.kontak} className="mt-2" />
                            </div>

                            <div className="mt-4">
                                <InputLabel htmlFor="user_alamat" value="Alamat" />

                                <TextInput
                                    id="user_alamat"
                                    type="text"
                                    name="alamat"
                                    value={data.alamat}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    onChange={(e) => setData("alamat", e.target.value)}
                                />

                                <InputError message={errors.kontak} className="mt-2" />
                            </div>

                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="user_tanggal_lahir"
                                    value="Tanggal Lahir"
                                />
                                <TextInput
                                    id="user_tanggal_lahir"
                                    type="date"
                                    name="tanggal_lahir"
                                    value={data.tanggal_lahir}
                                    className="mt-1 block w-full"
                                    onChange={(e) => setData("tanggal_lahir", e.target.value)}
                                />
                                <InputError message={errors.tanggal_lahir} className="mt-2" />
                            </div>

                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="status"
                                    value="Status User"
                                />
                                <SelectInput
                                    name="user_status"
                                    id="user_status"
                                    className="mt-1 block w-full"
                                    onChange={(e) => setData("status", e.target.value)}
                                >
                                    <option value="">Pilih Status</option>
                                    <option value="Aktif">Aktif</option>
                                    <option value="Tidak Aktif">Tidak Aktif</option>
                                    
                                    <InputError message={errors.status} className="mt-2" />
                                </SelectInput>
                            </div>

                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="user_jenis_kelamin"
                                    value="Jenis Kelamin"
                                />
                                <SelectInput
                                    name="user_jenis_kelamin"
                                    id="jenis_kelamin"
                                    className="mt-1 block w-full"
                                    onChange={(e) => setData("jenis_kelamin", e.target.value)}
                                >
                                    <option value="">Pilih Jenis Kelamin</option>
                                    <option value="Laki-Laki">Laki-Laki</option>
                                    <option value="Perempuan">Perempuan</option>
                                    
                                    <InputError message={errors.project_jenis_kelamin} className="mt-2" />
                                </SelectInput>
                            </div>

                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="user_role"
                                    value="Role"
                                />
                                <SelectInput
                                    name="user_role"
                                    id="role"
                                    className="mt-1 block w-full"
                                    onChange={(e) => setData("role", e.target.value)}
                                >
                                    <option value="">Pilih Role</option>
                                    <option value="Admin">Admin</option>
                                    <option value="RT">RT</option>
                                    <option value="Anggota">Anggota Siskamling</option>
                                    <option value="Warga">Warga</option>
                                    
                                    <InputError message={errors.project_role} className="mt-2" />
                                </SelectInput>
                            </div>

                            <div className="mt-4 text-right">
                                <Link
                                    href={route("user.index")}
                                    className="bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2"
                                >
                                    Cancel
                                </Link>
                                <button className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
