import { Link } from '@inertiajs/react';
import React from 'react';

const BeritaItem = ({ item }) => {

    console.log(item)
  return (
    <div className="flex flex-row justify-center items-center">
      <img src={item.image_url} alt={item.judul} className="w-1/2 h-[350px] object-cover"/>

      <div className="bg-purple-500 text-white w-1/2 h-[350px] p-5">
        <h2 className="text-3xl font-bold text-black">{item.judul}</h2>
        <p className="mt-4 text-justify text-black">{item.isi.length > 400 ? `${item.isi.substring(0, 400)}...` : item.isi}</p>
        <Link href={`/berita/${item.id}`} className="mt-10 text-black font-bold underline">Selengkapnya</Link>
      </div>
    </div>
  );
};

export default BeritaItem;
