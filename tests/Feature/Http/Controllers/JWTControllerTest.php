<?php

namespace Http\Controllers;

use App\Http\Controllers\JWTController;
use App\Models\User;
use PHPUnit\Framework\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
//use Tests\TestCase;
class JWTControllerTest extends TestCase
{

    public function testDecode()
    {
		$jwt = new JWTController();
		$user = User::find(1);
		$token = $jwt->encode($user);
		echo $token."\n";

		$decode = $jwt->decode($token);
		print_r($decode);
		$this->assertTrue(is_array($decode));
    }

    public function testJwt()
    {
		$jwt = new JWTController();
		$user = User::find(1);
		$token = $jwt->jwt($user);
		echo $token;
		$this->assertTrue(is_string($token));
    }

    public function testEncode()
    {
		$jwt = new JWTController();
		$user = User::find(1);
		$token = $jwt->encode($user);
		echo $token;
		$this->assertTrue(is_string($token));
    }


    public function test__construct()
    {
		$jwt = new JWTController();
    }

}
