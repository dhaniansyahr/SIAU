<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

Route::get('/', function () {
     return Inertia::render('Login');
})->name('login');

Route::get('/dashboard', function () {
     return Inertia::render('DashboardUser');
})->name('dashboard');

Route::get('/simkuliah', function () {
     return Inertia::render('Simkuliah');
})->name('simkuliah');

Route::get('/dashboard-krs', function () {
     return Inertia::render('DashboardKRS');
})->name('dashboard-krs');

Route::get('/isi-krs', function () {
     return Inertia::render('IsiKRS');
})->name('isi-krs');

Route::get('/khs', function () {
     return Inertia::render('KHS');
})->name('khs');

Route::get('/pkrs', function () {
     return Inertia::render('PKRS');
})->name('pkrs');

Route::get('/mata-kuliah', function () {
     return Inertia::render('MataKuliah');
})->name('matakuliah');

Route::get('/transkrip', function () {
     return Inertia::render('Transkrip');
})->name('transkrip');

Route::get('/ijazah', function () {
     return Inertia::render('Ijazah');
})->name('ijazah');

Route::get('/histori-nilai', function () {
     return Inertia::render('HistoriNilai');
})->name('histori-nilai');

Route::get('/biodata', function () {
     return Inertia::render('Biodata');
})->name('biodata');

Route::get('/security', function () {
     return Inertia::render('Security');
})->name('security');

require __DIR__.'/auth.php';
