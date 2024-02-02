<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\QuizController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });
Route::get("/", function () {
    return inertia::render("Home/Index");
});
// Route::get("/tests", function () {
//     return inertia::render("Quizzes/Index");
// });
Route::get("/tests",[QuizController::class, "index"]);
Route::get("/tests/{slug}", function ($slug) {
    return inertia::render("Quizzes/SingleQuiz", ["slug" => $slug]);
});
Route::get("/posts", function () {
    return inertia::render("Posts/Index");
});