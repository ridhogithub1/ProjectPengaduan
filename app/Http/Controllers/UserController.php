<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\RedirectResponse;
class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    // public function index()
    // {
    //     $user = User::all();
    //     return Inertia::render('User/User', [
    //         'user' => $user,
    //     ]);
    // }
    public function index()
    {
        $users = User::all();
        return Inertia::render('User/User', [
            'users' => $users,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('User/TambahUser');
    }

    /**
     * Store a newly created resource in storage.
     */

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'alamat' => 'required|string|max:255',
            'jenis_kelamin' => 'required|string|max:255',
            'tanggal_lahir' => 'required|date',
            'kontak' => 'required|string|max:255',
            'role' => 'required|string|max:255',
            'status' => 'required|string|max:255',
            'password' => 'required|string|min:8|confirmed',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'alamat' => $request->alamat,
            'role' => $request->role,
            'tanggal_lahir' => $request->tanggal_lahir,
            'kontak' => $request->kontak,
            'status' => $request->status,
            'jenis_kelamin' => $request->jenis_kelamin,
        ]);

        return redirect()->route('user.index')->with('success', 'User created successfully.');
    }
    // public function store(Request $request)
    // {
    //     $request->validate([
    //         'name' => 'required|string|max:255',
    //         'alamat' => 'required|string|max:255',
    //         'jenis_kelamin' => 'required|string|max:255',
    //         'tanggal_lahir' => 'required|date',
    //         'kontak' => 'required|string|max:255',
    //         'role' => 'required|string|max:255',
    //         'status' => 'required|string|max:255',
    //         'email' => 'required|string|email|max:255|unique:users',
    //         'password' => 'required|string|min:8|confirmed',
    //     ]);

    //     User::create([
    //         'name' => $request->name,
    //         'alamat' => $request->alamat,
    //         'jenis_kelamin' => $request->jenis_kelamin,
    //         'tanggal_lahir' => $request->tanggal_lahir,
    //         'kontak' => $request->kontak,
    //         'role' => $request->role,
    //         'status' => $request->status,
    //         'email' => $request->email,
    //         'password' => bcrypt($request->password),
    //     ]);

    //     return redirect()->route('user.index')->with('success', 'User created successfully.');
    // }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        return Inertia::render('User/Show', [
            'user' => $user,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        return Inertia::render('User/UpdateUser', [
            'user' => $user,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'alamat' => 'required|string|max:255',
            'jenis_kelamin' => 'required|string|max:255',
            'tanggal_lahir' => 'required|date',
            'kontak' => 'required|string|max:255',
            'role' => 'required|string|max:255',
            'status' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . $user->id,
            'password' => 'nullable|string|min:8|confirmed',
        ]);

        $user->update([
            'name' => $request->name,
            'alamat' => $request->alamat,
            'jenis_kelamin' => $request->jenis_kelamin,
            'tanggal_lahir' => $request->tanggal_lahir,
            'kontak' => $request->kontak,
            'role' => $request->role,
            'status' => $request->status,
            'email' => $request->email,
            'password' => $request->password ? bcrypt($request->password) : $user->password,
        ]);

        return redirect()->route('user.index')->with('success', 'User updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        $user->delete();

        return redirect()->route('user.index')->with('success', 'User deleted successfully.');
    }
}
