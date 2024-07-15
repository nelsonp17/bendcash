<?php

namespace Tests\Unit;

// use PHPUnit\Framework\TestCase;
use App\Http\Controllers\UtilsController;
use App\Models\User;
use Tests\TestCase;

class UtilsControllerTest extends TestCase
{
    public function test_formComponent(): void
    {
		$user = User::find(1);
		$edit = [
			'first_name' => [
				'name' => 'first_name',
				'label' => 'label_key',
				'value' => $user->first_name,
				'editing' => false,
				'type' => 'input',
				'validation' => [
					'minLength' => 3,
					'maxLength' => 50,
				]
			],
			'last_name' => [
				'name' => 'last_name',
				'label' => 'label_key',
				'value' => $user->last_name,
				'editing' => false,
				'type' => 'input',
				'validation' => [
					'minLength' => 3,
					'maxLength' => 50,
				]
			],
			'email' => [
				'name' => 'email',
				'label' => 'label_key',
				'value' => $user->email,
				'editing' => false,
				'type' => 'input|email',
				'validation' => [
					'required' => true,
					'email' => true,
					'minLength' => 8,
					'maxLength' => 255,
				]
			],
			'password' => [
				'name' => 'password',
				'label' => 'label_key',
				'value' => '',
				'hidden_value' => true,
				'editing' => false,
				'type' => 'input|password',
				'validation' => [
					'required' => true,
					'email' => true,
					'minLength' => 5,
					'maxLength' => 255,
					'number' => true,
				]
			],
			'gender' => [
				'name' => 'gender',
				'label' => 'label_key',
				'value' => $user->gender,
				'editing' => false,
				'type' => 'select',
				'options' => [
					'Hombre',
					'Mujer',
					'No definido'
				]
			],
			'address' => [
				'name' => 'address',
				'label' => 'label_key',
				'value' => $user->address,
				'editing' => false,
				'type' => 'textarea',
				'validation' => [
					'required' => true,
					'email' => true,
					'minLength' => 5,
					'maxLength' => 255,
					'number' => true,
				]
			],
			'phone1' => [
				'name' => 'phone1',
				'label' => 'label_key',
				'value' => $user->phone1,
				'editing' => false,
				'type' => 'input|phone'
			],
			'phone2' => [
				'name' => 'phone2',
				'label' => 'label_key',
				'value' => $user->phone2,
				'editing' => false,
				'type' => 'input|phone'
			],
			'type_document' => [
				'name' => 'type_document',
				'label' => 'label_key',
				'value' => $user->type_document,
				'editing' => false,
				'type' => 'select',
				'options' => [
					'CI','Pasaporte','RIF','OTRO'
				]
			],
		];

		UtilsController::formComponent($edit);
        $this->assertTrue(true);
    }
}
