<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SessionController extends Controller
{
    public function setSession(Request $request)
    {
        session(['token' => $request->token]);
    }

    public function removeSession(Request $request)
    {
        session(['token' => '']);
    }
}
