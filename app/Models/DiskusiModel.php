<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DiskusiModel extends Model
{
    use HasFactory;

    protected $table = 'diskusi';

    protected $fillable = [
        'judul',
        'isi',
        'image',
        'tanggal',
    ];
}