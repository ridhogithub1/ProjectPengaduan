<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BeritaModel;
use Inertia\Inertia;



class BeritaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Mengambil data berita dari database
        $berita = BeritaModel::all();
        $carousel = BeritaModel::orderBy('id', 'desc')->limit(3)->get();

        // Merender komponen React Berita.jsx dengan menggunakan Inertia
        return Inertia::render('Berita/Berita', [
            'berita' => $berita,
            'carousel' => $carousel
        ]);
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Berita/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'judul' => 'required|string|max:255',
            'isi' => 'required|string',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $imagePath = $request->file('image')->store('images', 'public');

        $berita = new BeritaModel();
        $berita->judul = $request->judul;
        $berita->isi = $request->isi;
        $berita->image = $imagePath;
        $berita->tanggal = date('Y-m-d');
        $berita->save();

        return redirect()->route('berita.index')->with('success', 'Berita created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(BeritaModel $beritum)
    {

        return Inertia::render('Berita/Detail', [
            'berita' => $beritum
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
