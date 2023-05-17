<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;


class AkunSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $user = [
            [
                'npm' => '2108107010031',
                'name'=>'Diky Wahyudi',
                'email'=>'mhs@siau.com',
                'role'=>'mahasiswa',
                'password'=> bcrypt('123456'),
            ],
            [
                'username' => '123456789',
                'name'=>'Dosen',
                'email'=>'dosen@siau.com',
                'role'=>'dosen',
                'password'=> bcrypt('123456'),
            ],
        ];

        foreach ($user as $key => $value) {
            User::create($value);
        }
    }
}
