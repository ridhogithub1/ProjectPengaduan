<?php

namespace App\Http\Controllers;

use App\Models\Dashboard;
use App\Http\Requests\StoreDashboardRequest;
use App\Http\Requests\UpdateDashboardRequest;
use Inertia\Inertia;
use App\Models\User;
use App\Models\PengaduanModel;
use App\Models\BeritaModel;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $totaluser = User::get();
        $ttotaluser = $totaluser->count();
        $warga = User::where('role', 'Warga')->get();
        $twarga = $warga->count();
        $anggota = User::where('role', 'Anggota')->get();
        $tanggota = $anggota->count();
        $rt = User::where('role', 'RT')->get();
        $trt = $rt->count();
        $pengaduan = PengaduanModel::get();
        $tpengaduan = $pengaduan->count();
        
        $p1 = PengaduanModel::whereMonth('tanggal', 1)->get();
        $tp1 = $p1->count();
        $p2 = PengaduanModel::whereMonth('tanggal', 2)->get();
        $tp2 = $p2->count();
        $p3 = PengaduanModel::whereMonth('tanggal', 3)->get();
        $tp3 = $p3->count();
        $p4 = PengaduanModel::whereMonth('tanggal', 4)->get();
        $tp4 = $p4->count();
        $p5 = PengaduanModel::whereMonth('tanggal', 5)->get();
        $tp5 = $p5->count();
        $p6 = PengaduanModel::whereMonth('tanggal', 6)->get();
        $tp6 = $p6->count();
        $p7 = PengaduanModel::whereMonth('tanggal', 7)->get();
        $tp7 = $p7->count();
        $p8 = PengaduanModel::whereMonth('tanggal', 8)->get();
        $tp8 = $p8->count();
        $p9 = PengaduanModel::whereMonth('tanggal', 9)->get();
        $tp9= $p9->count();
        $p10 = PengaduanModel::whereMonth('tanggal', 10)->get();
        $tp10 = $p10->count();
        $p11 = PengaduanModel::whereMonth('tanggal', 11)->get();
        $tp11 = $p11->count();
        $p12 = PengaduanModel::whereMonth('tanggal', 12)->get();
        $tp12 = $p12->count();

        $b1 = BeritaModel::whereMonth('tanggal', 1)->get();
        $tb1 = $b1->count();
        $b2 = BeritaModel::whereMonth('tanggal', 2)->get();
        $tb2 = $b2->count();
        $b3 = BeritaModel::whereMonth('tanggal', 3)->get();
        $tb3 = $b3->count();
        $b4 = BeritaModel::whereMonth('tanggal', 4)->get();
        $tb4 = $b4->count();
        $b5 = BeritaModel::whereMonth('tanggal', 5)->get();
        $tb5 = $b5->count();
        $b6 = BeritaModel::whereMonth('tanggal', 6)->get();
        $tb6 = $b6->count();
        $b7 = BeritaModel::whereMonth('tanggal', 7)->get();
        $tb7 = $b7->count();
        $b8 = BeritaModel::whereMonth('tanggal', 8)->get();
        $tb8 = $b8->count();
        $b9 = BeritaModel::whereMonth('tanggal', 9)->get();
        $tb9= $b9->count();
        $b10 = BeritaModel::whereMonth('tanggal', 10)->get();
        $tb10 = $b10->count();
        $b11 = BeritaModel::whereMonth('tanggal', 11)->get();
        $tb11 = $b11->count();
        $b12 = BeritaModel::whereMonth('tanggal', 12)->get();
        $tb12 = $b12->count();

        return Inertia::render('Dashboard/Dashboard', [
            'totalusers' => $ttotaluser,
            'wargas' => $twarga,
            'anggotas' => $tanggota,
            'rts' => $trt,
            'pengaduans' => $tpengaduan,

            'p1s' => $tp1,
            'p2s' => $tp2,
            'p3s' => $tp3,
            'p4s' => $tp4,
            'p5s' => $tp5,
            'p6s' => $tp6,
            'p7s' => $tp7,
            'p8s' => $tp8,
            'p9s' => $tp9,
            'p10s' => $tp10,
            'p11s' => $tp11,
            'p12s' => $tp12,
            
            'b1s' => $tb1,
            'b2s' => $tb2,
            'b3s' => $tb3,
            'b4s' => $tb4,
            'b5s' => $tb5,
            'b6s' => $tb6,
            'b7s' => $tb7,
            'b8s' => $tb8,
            'b9s' => $tb9,
            'b10s' => $tb10,
            'b11s' => $tb11,
            'b12s' => $tb12,
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
        $totaluser = User::get();
        $ttotaluser = $totaluser->count();
        $warga = User::where('role', 'Warga')->get();
        $twarga = $warga->count();
        $anggota = User::where('role', 'Anggota')->get();
        $tanggota = $anggota->count();
        $rt = User::where('role', 'RT')->get();
        $trt = $rt->count();
        $pengaduan = PengaduanModel::get();
        $tpengaduan = $pengaduan->count();
        
        $p1 = PengaduanModel::whereMonth('tanggal', 1)->get();
        $tp1 = $p1->count();
        $p2 = PengaduanModel::whereMonth('tanggal', 2)->get();
        $tp2 = $p2->count();
        $p3 = PengaduanModel::whereMonth('tanggal', 3)->get();
        $tp3 = $p3->count();
        $p4 = PengaduanModel::whereMonth('tanggal', 4)->get();
        $tp4 = $p4->count();
        $p5 = PengaduanModel::whereMonth('tanggal', 5)->get();
        $tp5 = $p5->count();
        $p6 = PengaduanModel::whereMonth('tanggal', 6)->get();
        $tp6 = $p6->count();
        $p7 = PengaduanModel::whereMonth('tanggal', 7)->get();
        $tp7 = $p7->count();
        $p8 = PengaduanModel::whereMonth('tanggal', 8)->get();
        $tp8 = $p8->count();
        $p9 = PengaduanModel::whereMonth('tanggal', 9)->get();
        $tp9= $p9->count();
        $p10 = PengaduanModel::whereMonth('tanggal', 10)->get();
        $tp10 = $p10->count();
        $p11 = PengaduanModel::whereMonth('tanggal', 11)->get();
        $tp11 = $p11->count();
        $p12 = PengaduanModel::whereMonth('tanggal', 12)->get();
        $tp12 = $p12->count();

        $b1 = BeritaModel::whereMonth('tanggal', 1)->get();
        $tb1 = $b1->count();
        $b2 = BeritaModel::whereMonth('tanggal', 2)->get();
        $tb2 = $b2->count();
        $b3 = BeritaModel::whereMonth('tanggal', 3)->get();
        $tb3 = $b3->count();
        $b4 = BeritaModel::whereMonth('tanggal', 4)->get();
        $tb4 = $b4->count();
        $b5 = BeritaModel::whereMonth('tanggal', 5)->get();
        $tb5 = $b5->count();
        $b6 = BeritaModel::whereMonth('tanggal', 6)->get();
        $tb6 = $b6->count();
        $b7 = BeritaModel::whereMonth('tanggal', 7)->get();
        $tb7 = $b7->count();
        $b8 = BeritaModel::whereMonth('tanggal', 8)->get();
        $tb8 = $b8->count();
        $b9 = BeritaModel::whereMonth('tanggal', 9)->get();
        $tb9= $b9->count();
        $b10 = BeritaModel::whereMonth('tanggal', 10)->get();
        $tb10 = $b10->count();
        $b11 = BeritaModel::whereMonth('tanggal', 11)->get();
        $tb11 = $b11->count();
        $b12 = BeritaModel::whereMonth('tanggal', 12)->get();
        $tb12 = $b12->count();

        return Inertia::render('Dashboard/Dashboard_Warga', [
            'totalusers' => $ttotaluser,
            'wargas' => $twarga,
            'anggotas' => $tanggota,
            'rts' => $trt,
            'pengaduans' => $tpengaduan,
            
            'p1s' => $tp1,
            'p2s' => $tp2,
            'p3s' => $tp3,
            'p4s' => $tp4,
            'p5s' => $tp5,
            'p6s' => $tp6,
            'p7s' => $tp7,
            'p8s' => $tp8,
            'p9s' => $tp9,
            'p10s' => $tp10,
            'p11s' => $tp11,
            'p12s' => $tp12,
            
            'b1s' => $tb1,
            'b2s' => $tb2,
            'b3s' => $tb3,
            'b4s' => $tb4,
            'b5s' => $tb5,
            'b6s' => $tb6,
            'b7s' => $tb7,
            'b8s' => $tb8,
            'b9s' => $tb9,
            'b10s' => $tb10,
            'b11s' => $tb11,
            'b12s' => $tb12,
        ]);
    }
    public function drt(){
        $totaluser = User::get();
        $ttotaluser = $totaluser->count();
        $warga = User::where('role', 'Warga')->get();
        $twarga = $warga->count();
        $anggota = User::where('role', 'Anggota')->get();
        $tanggota = $anggota->count();
        $rt = User::where('role', 'RT')->get();
        $trt = $rt->count();
        $pengaduan = PengaduanModel::get();
        $tpengaduan = $pengaduan->count();
        
        $p1 = PengaduanModel::whereMonth('tanggal', 1)->get();
        $tp1 = $p1->count();
        $p2 = PengaduanModel::whereMonth('tanggal', 2)->get();
        $tp2 = $p2->count();
        $p3 = PengaduanModel::whereMonth('tanggal', 3)->get();
        $tp3 = $p3->count();
        $p4 = PengaduanModel::whereMonth('tanggal', 4)->get();
        $tp4 = $p4->count();
        $p5 = PengaduanModel::whereMonth('tanggal', 5)->get();
        $tp5 = $p5->count();
        $p6 = PengaduanModel::whereMonth('tanggal', 6)->get();
        $tp6 = $p6->count();
        $p7 = PengaduanModel::whereMonth('tanggal', 7)->get();
        $tp7 = $p7->count();
        $p8 = PengaduanModel::whereMonth('tanggal', 8)->get();
        $tp8 = $p8->count();
        $p9 = PengaduanModel::whereMonth('tanggal', 9)->get();
        $tp9= $p9->count();
        $p10 = PengaduanModel::whereMonth('tanggal', 10)->get();
        $tp10 = $p10->count();
        $p11 = PengaduanModel::whereMonth('tanggal', 11)->get();
        $tp11 = $p11->count();
        $p12 = PengaduanModel::whereMonth('tanggal', 12)->get();
        $tp12 = $p12->count();

        $b1 = BeritaModel::whereMonth('tanggal', 1)->get();
        $tb1 = $b1->count();
        $b2 = BeritaModel::whereMonth('tanggal', 2)->get();
        $tb2 = $b2->count();
        $b3 = BeritaModel::whereMonth('tanggal', 3)->get();
        $tb3 = $b3->count();
        $b4 = BeritaModel::whereMonth('tanggal', 4)->get();
        $tb4 = $b4->count();
        $b5 = BeritaModel::whereMonth('tanggal', 5)->get();
        $tb5 = $b5->count();
        $b6 = BeritaModel::whereMonth('tanggal', 6)->get();
        $tb6 = $b6->count();
        $b7 = BeritaModel::whereMonth('tanggal', 7)->get();
        $tb7 = $b7->count();
        $b8 = BeritaModel::whereMonth('tanggal', 8)->get();
        $tb8 = $b8->count();
        $b9 = BeritaModel::whereMonth('tanggal', 9)->get();
        $tb9= $b9->count();
        $b10 = BeritaModel::whereMonth('tanggal', 10)->get();
        $tb10 = $b10->count();
        $b11 = BeritaModel::whereMonth('tanggal', 11)->get();
        $tb11 = $b11->count();
        $b12 = BeritaModel::whereMonth('tanggal', 12)->get();
        $tb12 = $b12->count();

        return Inertia::render('Dashboard/Dashboard_RT', [
            'totalusers' => $ttotaluser,
            'wargas' => $twarga,
            'anggotas' => $tanggota,
            'rts' => $trt,
            'pengaduans' => $tpengaduan,
            
            'p1s' => $tp1,
            'p2s' => $tp2,
            'p3s' => $tp3,
            'p4s' => $tp4,
            'p5s' => $tp5,
            'p6s' => $tp6,
            'p7s' => $tp7,
            'p8s' => $tp8,
            'p9s' => $tp9,
            'p10s' => $tp10,
            'p11s' => $tp11,
            'p12s' => $tp12,
            
            'b1s' => $tb1,
            'b2s' => $tb2,
            'b3s' => $tb3,
            'b4s' => $tb4,
            'b5s' => $tb5,
            'b6s' => $tb6,
            'b7s' => $tb7,
            'b8s' => $tb8,
            'b9s' => $tb9,
            'b10s' => $tb10,
            'b11s' => $tb11,
            'b12s' => $tb12,
        ]);
    }
    public function danggota(){
        $totaluser = User::get();
        $ttotaluser = $totaluser->count();
        $warga = User::where('role', 'Warga')->get();
        $twarga = $warga->count();
        $anggota = User::where('role', 'Anggota')->get();
        $tanggota = $anggota->count();
        $rt = User::where('role', 'RT')->get();
        $trt = $rt->count();
        $pengaduan = PengaduanModel::get();
        $tpengaduan = $pengaduan->count();
        
        $p1 = PengaduanModel::whereMonth('tanggal', 1)->get();
        $tp1 = $p1->count();
        $p2 = PengaduanModel::whereMonth('tanggal', 2)->get();
        $tp2 = $p2->count();
        $p3 = PengaduanModel::whereMonth('tanggal', 3)->get();
        $tp3 = $p3->count();
        $p4 = PengaduanModel::whereMonth('tanggal', 4)->get();
        $tp4 = $p4->count();
        $p5 = PengaduanModel::whereMonth('tanggal', 5)->get();
        $tp5 = $p5->count();
        $p6 = PengaduanModel::whereMonth('tanggal', 6)->get();
        $tp6 = $p6->count();
        $p7 = PengaduanModel::whereMonth('tanggal', 7)->get();
        $tp7 = $p7->count();
        $p8 = PengaduanModel::whereMonth('tanggal', 8)->get();
        $tp8 = $p8->count();
        $p9 = PengaduanModel::whereMonth('tanggal', 9)->get();
        $tp9= $p9->count();
        $p10 = PengaduanModel::whereMonth('tanggal', 10)->get();
        $tp10 = $p10->count();
        $p11 = PengaduanModel::whereMonth('tanggal', 11)->get();
        $tp11 = $p11->count();
        $p12 = PengaduanModel::whereMonth('tanggal', 12)->get();
        $tp12 = $p12->count();

        $b1 = BeritaModel::whereMonth('tanggal', 1)->get();
        $tb1 = $b1->count();
        $b2 = BeritaModel::whereMonth('tanggal', 2)->get();
        $tb2 = $b2->count();
        $b3 = BeritaModel::whereMonth('tanggal', 3)->get();
        $tb3 = $b3->count();
        $b4 = BeritaModel::whereMonth('tanggal', 4)->get();
        $tb4 = $b4->count();
        $b5 = BeritaModel::whereMonth('tanggal', 5)->get();
        $tb5 = $b5->count();
        $b6 = BeritaModel::whereMonth('tanggal', 6)->get();
        $tb6 = $b6->count();
        $b7 = BeritaModel::whereMonth('tanggal', 7)->get();
        $tb7 = $b7->count();
        $b8 = BeritaModel::whereMonth('tanggal', 8)->get();
        $tb8 = $b8->count();
        $b9 = BeritaModel::whereMonth('tanggal', 9)->get();
        $tb9= $b9->count();
        $b10 = BeritaModel::whereMonth('tanggal', 10)->get();
        $tb10 = $b10->count();
        $b11 = BeritaModel::whereMonth('tanggal', 11)->get();
        $tb11 = $b11->count();
        $b12 = BeritaModel::whereMonth('tanggal', 12)->get();
        $tb12 = $b12->count();

        return Inertia::render('Dashboard/Dashboard_Anggota', [
            'totalusers' => $ttotaluser,
            'wargas' => $twarga,
            'anggotas' => $tanggota,
            'rts' => $trt,
            'pengaduans' => $tpengaduan,
            
            'p1s' => $tp1,
            'p2s' => $tp2,
            'p3s' => $tp3,
            'p4s' => $tp4,
            'p5s' => $tp5,
            'p6s' => $tp6,
            'p7s' => $tp7,
            'p8s' => $tp8,
            'p9s' => $tp9,
            'p10s' => $tp10,
            'p11s' => $tp11,
            'p12s' => $tp12,
            
            'b1s' => $tb1,
            'b2s' => $tb2,
            'b3s' => $tb3,
            'b4s' => $tb4,
            'b5s' => $tb5,
            'b6s' => $tb6,
            'b7s' => $tb7,
            'b8s' => $tb8,
            'b9s' => $tb9,
            'b10s' => $tb10,
            'b11s' => $tb11,
            'b12s' => $tb12,
        ]);
    }
}
