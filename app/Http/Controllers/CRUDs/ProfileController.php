<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public function update(Request $request, string $id)
    {
        $user = User::find($id);
        $user->first_name = $request->input('first_name');
        $user->last_name = $request->input('last_name');
        $user->gender = $request->input('gender');
        $user->address = $request->input('address');
        $user->phone1 = $request->input('phone1');
        $user->phone2 = $request->input('phone2');
        $user->type_document = $request->input('type_document');
        // $user->username = $request->input('username');
        // $user->email = $request->input('email');
        // $user->phone2 = $request->input('phone2');
        if ($user->update()) {
            return response()->json([
               'status' => 200,
               'message' => 'Profile updated successfully'
            ]);
        } else {
            return response()->json([
               'status' => 500,
               'message' => 'Error updating profile'
            ]);
        }
    }

}
