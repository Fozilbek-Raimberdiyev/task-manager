<?php

use App\Http\Controllers\API\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware(['auth.api'])->group(function () {
    // posts
    Route::get("/posts", [PostController::class, "index"]);
    Route::get("/posts/{id}", [PostController::class, "show"]);
    Route::post("/posts/create", [PostController::class, "store"]);
    Route::put("/posts/{id}", [PostController::class, "update"]);
    Route::delete("/posts/{id}", [PostController::class, "destroy"]);
});




// auth routes
Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
});