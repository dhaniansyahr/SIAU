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

require __DIR__.'/auth.php';
