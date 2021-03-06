<?php

use App\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UserSeeder::class);
        User::create([
            'name'     => 'User',
            'email'    => 'user@email.com',
            'password' => bcrypt('secret'),
        ]);
    }
}
