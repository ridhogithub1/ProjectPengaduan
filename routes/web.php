<?php

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
Route::redirect('/', '/dashboard');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard_admin', fn() => Inertia::render('Dashboard/Dashboard'))->name('dashboard');
    Route::get('/dashboard_warga', fn() => Inertia::render('Dashboard/Dashboard_Warga'))->name('dashboard_warga');
    Route::get('/dashboard_rt', fn() => Inertia::render('Dashboard/Dashboard_RT'))->name('dashboard_rt');
    Route::get('/dashboard_anggota', fn() => Inertia::render('Dashboard/Dashboard_Anggota'))->name('dashboard_anggota');
    // Route::get('/Admin/dashboard', fn() => Inertia::render('Dashboard'))->name('dashboard_admin');
    Route::resource('pengaduan', PengaduanController::class);
    
    Route::resource('diskusi', DiskusiController::class);
    Route::resource('user', UserController::class);
    Route::resource('berita', BeritaController::class);

    Route::resource('project', ProjectController::class);
    Route::resource('task', TaskController::class);
    // Route::resource('user', UserController::class);
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
