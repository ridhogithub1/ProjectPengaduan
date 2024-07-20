<?php

namespace App\Http\Controllers;

use App\Models\Dashboard;
use App\Http\Requests\StoreDashboardRequest;
use App\Http\Requests\UpdateDashboardRequest;
use Inertia\Inertia;
use App\Models\User;
use App\Models\PengaduanModel;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $warga = User::where('role', 'Warga')->get();
        $twarga = $warga->count();
        $anggota = User::where('role', 'Anggota')->get();
        $tanggota = $anggota->count();
        $rt = User::where('role', 'RT')->get();
        $trt = $rt->count();
        $pengaduan = PengaduanModel::get();
        $tpengaduan = $pengaduan->count();
        return Inertia::render('Dashboard/Dashboard', [
            'wargas' => $twarga,
            'anggotas' => $tanggota,
            'rts' => $trt,
            'pengaduans' => $tpengaduan,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreDashboardRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Dashboard $dashboard)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Dashboard $dashboard)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateDashboardRequest $request, Dashboard $dashboard)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Dashboard $dashboard)
    {
        //
    }
    public function dwarga(){
        $warga = User::where('role', 'Warga')->get();
        $twarga = $warga->count();
        $anggota = User::where('role', 'Anggota')->get();
        $tanggota = $anggota->count();
        $rt = User::where('role', 'RT')->get();
        $trt = $rt->count();
        return Inertia::render('Dashboard/Dashboard_Warga', [
            'wargas' => $twarga,
            'anggotas' => $tanggota,
            'rts' => $trt,
        ]);
    }
    public function drt(){
        $warga = User::where('role', 'Warga')->get();
        $twarga = $warga->count();
        $anggota = User::where('role', 'Anggota')->get();
        $tanggota = $anggota->count();
        $rt = User::where('role', 'RT')->get();
        $trt = $rt->count();
        return Inertia::render('Dashboard/Dashboard_RT', [
            'wargas' => $twarga,
            'anggotas' => $tanggota,
            'rts' => $trt,
        ]);
    }
    public function danggota(){
        $warga = User::where('role', 'Warga')->get();
        $twarga = $warga->count();
        $anggota = User::where('role', 'Anggota')->get();
        $tanggota = $anggota->count();
        $rt = User::where('role', 'RT')->get();
        $trt = $rt->count();
        return Inertia::render('Dashboard/Dashboard_Anggota', [
            'wargas' => $twarga,
            'anggotas' => $tanggota,
            'rts' => $trt,
        ]);
    }
}
