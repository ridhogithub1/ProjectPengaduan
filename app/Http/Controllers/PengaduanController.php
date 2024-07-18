<?php


namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PengaduanModel;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class PengaduanController extends Controller
{
    public function index()
    {
        $pengaduan = PengaduanModel::orderBy('created_at', 'desc')->paginate(10);

        return Inertia::render('Pengaduan/Pengaduan', [
            'pengaduan' => $pengaduan,
        ]);
    }

    public function create()
    {
        return Inertia::render('Pengaduan/TambahPengaduan');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'lokasi' => 'required|string|max:255',
            'jenis' => 'required|string|max:255',
            'tanggal' => 'required|date',
            'image' => 'nullable|image|max:2048',
            'status' => 'required|string|max:255',
        ]);

        $data = $request->all();

        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('images', 'public');
        }

        PengaduanModel::create($data);

        return redirect()->route('pengaduan.index');
    }

    public function edit($id)
    {
        $pengaduan = PengaduanModel::findOrFail($id);

        return Inertia::render('Pengaduan/EditPengaduan', [
            'pengaduan' => $pengaduan,
        ]);
    }
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'lokasi' => 'required|string|max:255',
            'jenis' => 'required|string|max:255',
            'tanggal' => 'required|date',
            'image' => 'nullable|image|max:2048',
            'status' => 'required|string|max:255',
        ]);

        $pengaduan = PengaduanModel::findOrFail($id);

        $data = $request->all();

        if ($request->hasFile('image')) {
            // Delete old image if exists
            if ($pengaduan->image) {
                Storage::disk('public')->delete($pengaduan->image);
            }
            $data['image'] = $request->file('image')->store('images', 'public');
        }

        $pengaduan->update($data);

        return redirect()->route('pengaduan.index');
    }



 


    public function destroy($id)
    {
        $pengaduan = PengaduanModel::findOrFail($id);
        $pengaduan->delete();

        return redirect()->route('pengaduan.index');
    }
}
// 