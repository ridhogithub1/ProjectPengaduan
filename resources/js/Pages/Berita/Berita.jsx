import React from 'react';
import { Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BeritaItem from './BeritaItem';

export default function Berita({ berita, carousel }) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <AuthenticatedLayout>
            <main className="h-full pb-16 overflow-y-auto">
                <div className="container grid px-6 mx-auto">
                    <div className="flex justify-between items-center my-6">
                        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
                            Berita
                        </h2>
                        <Link href="/berita/create" className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                            Tambah Berita
                        </Link>
                    </div>
                    <div className="w-full mb-8 overflow-hidden  shadow-xs">
                        <Slider {...settings}>
                            {carousel.map((item, index) => (
                                <BeritaItem key={index} item={item} />
                            ))}
                        </Slider>

                        <h3 className='font-bold text-3xl mt-10'>Lainnya</h3>
                        <div className="w-full flex flex-wrap justify-between">
                            {berita.map((item, index) => (
                                <div key={index} className='w-1/2 p-5 relative mb-5'>
                                    <img src={item.image_url} alt={item.judul} className='w-full h-[350px] object-cover' />
                                    <div className='absolute bottom-5 left-5 bg-purple-600 w-[93%] p-5'>
                                        <div className="flex justify-between items-center w-[100%]">
                                            <h1 className='w-2/3 font-bold text-2xl'>{item.judul}</h1>
                                            <Link href={`/berita/${item.id}`} className='underline'>Selengkapnya</Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </AuthenticatedLayout>
    );
}
