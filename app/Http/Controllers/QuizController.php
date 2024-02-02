<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use GuzzleHttp\Client;


class QuizController extends Controller
{
    public function getDataFromOtherApi(Request $request)
    {
        // Boshqa apiga so'rov yaratish
        $client = new Client();
        $response = $client->get('https://jsonplaceholder.typicode.com/posts');

        // Javobni olish
        $data = json_decode($response->getBody(), true);

        // Ma'lumotlarni ishlab chiqish va o'zgartirish
        // Masalan, ma'lumotlar bazasiga saqlash, qayta formatlash, va boshqa operatsiyalar
        // ...

        // Javobni qaytarish
        return response()->json($data);
    }
    public function index(Request $request)
    {
        return Inertia::render('Quizzes/Index', [$this->getDataFromOtherApi($request)]);
    }
}