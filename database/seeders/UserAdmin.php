<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserAdmin extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
		// php artisan db:seed --class=UserAdmin
		\App\Models\User::factory(1)->create();
		\App\Models\AdminUser::factory(1)->create();
    }
}
