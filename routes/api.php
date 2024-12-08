<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CartController;

// ViewCart Routes
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/cart', [CartController::class, 'index']);
    Route::post('/cart/update/{product}', [CartController::class, 'updateQuantity']);
    Route::delete('/cart/remove/{product}', [CartController::class, 'removeFromCart']);
});