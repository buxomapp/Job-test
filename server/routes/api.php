<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/shopping-lists', [ShoppingListController::class, 'index']);
Route::post('/shopping-lists', [ShoppingListController::class, 'store']);
Route::get('/shopping-lists/{id}', [ShoppingListController::class, 'show']);
Route::post('/shopping-lists/{id}/products', [ProductController::class, 'store']);
Route::patch('/products/{id}', [ProductController::class, 'update']);