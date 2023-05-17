<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function proses_login(Request $request)
    {
        request()->validate(
            [
                'npm' => 'required',
                'password' => 'required',
            ]);

        $kredensil = $request->only('npm','password');

            if (Auth::attempt($kredensil)) {
                $user = Auth::user();
                if ($user->level == 'dosen') {
                    return redirect()->intended('/');
                } elseif ($user->level == 'editor') {
                    return redirect()->intended('/');
                }
                return redirect()->intended('/');
            }

        return redirect('login')->withInput()->withErrors(['login_gagal' => 'These credentials do not match our records.']);
    }

    public function logout(Request $request)
    {
       $request->session()->flush();
       Auth::logout();
       return Redirect('/');
    }
}
