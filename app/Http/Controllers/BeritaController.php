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
        

        if (auth()->user()->role == "Admin") {
            return Inertia::render('Berita/Berita', [
                'berita' => $berita,
            ]);
        } else if (auth()->user()->role == "Warga") {
            return Inertia::render('Berita/Berita_Warga', [
                'berita' => $berita,
            ]);
        } else if (auth()->user()->role == "RT") {
            return Inertia::render('Berita/Berita_RT', [
                'berita' => $berita,
            ]);
        } else if (auth()->user()->role == "Anggota") {
            return Inertia::render('Berita/Berita_Anggota', [
                'berita' => $berita,
            ]);
        }
    }

    public function create()
    {
        return Inertia::render('Berita/Create');
    }

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

        return redirect()->route('berita.index')->with('success', 'Berita berhasil ditambahkan!.');
    }

    public function show(BeritaModel $berita)
    {
        return Inertia::render('Berita/Detail', [
            'berita' => $berita,
        ]);
    }
    public function detail($id)
    {
        $berita = BeritaModel::find($id);

        // if (!$berita) {
        //     return redirect()->route('berita.index')->with('error', 'Berita not found');
        // }

        return Inertia::render('Berita/Detail', ['berita' => $berita]);
    }

    public function edit(BeritaModel $berita)
    {
        return Inertia::render('Diskusi/EditBerita', [
            'berita' => $berita,
        ]);
    }

    public function update(BeritaModel $berita, Request $request)
    {
        $request->validate([
            'judul' => 'required|string|max:255',
            'isi' => 'required|string|max:255',
            'image' => 'nullable|string|max:255',
            'tanggal' => 'required|date',
        ]);

        $berita->update($request->all());

        return redirect()->route('berita.index');
    }

    public function destroy(BeritaModel $berita)
    {
        $berita->delete();

        return redirect()->route('berita.index');
    }
}
