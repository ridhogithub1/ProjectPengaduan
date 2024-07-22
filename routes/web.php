<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PengaduanController;
use App\Http\Controllers\DiskusiController;
use App\Http\Controllers\BeritaController;

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;

use Inertia\Inertia;
Route::redirect('/', '/login');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard_admin', [DashboardController::class,'index'])->name('dashboard');
    Route::get('/dashboard_warga', [DashboardController::class,'dwarga'])->name('dashboard_warga');
    Route::get('/dashboard_rt', [DashboardController::class,'drt'])->name('dashboard_rt');
    Route::get('/dashboard_anggota', [DashboardController::class,'danggota'])->name('dashboard_anggota');
    
    Route::resource('pengaduan', PengaduanController::class);
    
    Route::resource('diskusi', DiskusiController::class);
    Route::resource('user', UserController::class);
    Route::resource('berita', BeritaController::class);
    Route::put('/pengaduan/{id}', [PengaduanController::class, 'update'])->name('pengaduan.update');

    Route::resource('project', ProjectController::class);
    Route::resource('task', TaskController::class);

    Route::get('/pengaduan_warga', [PengaduanController::class, 'indexWarga'])->name('pengaduan.warga');
    Route::get('/pengaduan_anggota', [PengaduanController::class, 'indexAnggota'])->name('pengaduan.anggota');
    Route::get('/pengaduan_rt', [PengaduanController::class, 'index'])->name('pengaduan.rt');
    Route::get('/pengaduan_admin', [PengaduanController::class, 'indexAdmin'])->name('pengaduan.admin');



    // Route::resource('user', UserController::class);
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
