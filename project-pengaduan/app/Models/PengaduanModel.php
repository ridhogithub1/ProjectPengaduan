<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PengaduanModel extends Model
{
    use HasFactory;
    protected $table = 'pengaduan';

    // Tentukan kolom yang dapat diisi
    protected $fillable = ['name', 'lokasi', 'jenis', 'tanggal', 'image', 'status'];
}