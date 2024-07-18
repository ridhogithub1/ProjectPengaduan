<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;


class BeritaModel extends Model
{
    protected $table = 'berita'; // Nama tabel di database

    protected $fillable = ['judul', 'isi', 'image', 'tanggal'];
    protected $appends = ['image_url'];

    public function getImageUrlAttribute()
    {
        return Storage::url($this->image);
    }
}
