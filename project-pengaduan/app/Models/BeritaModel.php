<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BeritaModel extends Model
{
    protected $table = 'berita'; // Nama tabel di database

    protected $fillable = ['judul', 'isi', 'image', 'tanggal'];
}
