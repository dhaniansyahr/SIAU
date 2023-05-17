<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AuthController;
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

Route::post('proses_login', [AuthController::class, 'proses_login'])->name('proses_login');
Route::get('logout', [AuthController::class, 'logout'])->name('logout');

Route::group(['middleware' => ['auth']], function () {
     Route::group(['middleware' => ['cek_login:admin']], function () {
         Route::resource('admin', AdminController::class);
     });
     Route::group(['middleware' => ['cek_login:editor']], function () {
         Route::resource('editor', AdminController::class);
     });

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
 });

// require __DIR__.'/auth.php';
