<?php

use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\UserController;
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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// CRUD routes for Users
Route::group(['prefix' => 'users'], function () {

    /*
    For        : Getting all Users
    RouteName  : /
    Method     : GET
    Access     : Private
    */
    Route::get('/', [UserController::class, 'index'])->name('api.users.index');



    /*
    For        : Creating A User 
    RouteName  : /
    Method     : POST
    Access     : Public
    */
    Route::post('/', [UserController::class, 'create'])->name('api.users.create');


    /*
    For        : Getting Specific User Details
    RouteName  : /{id}
    Method     : GET
    Access     : Private
    */
    Route::get('/{id}', [UserController::class, 'show'])->name('api.users.show');


    /*
    For        : Update the User Details
    RouteName  : /{id}
    Method     : PUT
    Access     : Private
    */
    Route::put('/{id}', [UserController::class, 'update'])->name('api.users.update');
});






//CRUD for Departments
Route::group(['prefix' => 'departments'], function () {

    /*
    For        : Getting all Departments Details
    RouteName  : /
    Method     : GET
    Access     : Private
    */
    Route::get('/',    [DepartmentController::class, 'index'])->name('api.departments.index');



    /*
    For        : Creating a Department
    RouteName  : /
    Method     : POST
    Access     : Private
    */
    Route::post('/',   [DepartmentController::class, 'create'])->name('api.departments.create');



    /*
    For        : Getting A Specific Department based on id
    RouteName  : /{id}
    Method     : GET
    Access     : Private
    */
    Route::get('/{id} ', [DepartmentController::class, 'show'])->name('api.departments.show');



    // For        : Update The Department Details based on id
    // RouteName  : /{id}
    // Method     : PUT/PATCH
    // Access     : Private
    Route::put('/{id}', [DepartmentController::class, 'update'])->name('api.departments.update');



    // For        : Delete a particular Department based on id
    // RouteName  : /
    // Method     : GET
    // Access     : Private
    Route::delete('/{id}', [DepartmentController::class, 'destroy'])->name('api.departments.delete');
});

Route::group(['prefix' => 'clients'], function () {
    Route::get('/', [ClientController::class, 'index'])->name('api.clients.index');
    Route::post('/', [ClientController::class, 'create'])->name('api.clients.create');
    Route::get('/{id}', [ClientController::class, 'show'])->name('api.clients.show');
    Route::put('/{id}', [ClientController::class, 'update'])->name('api.clients.update');
    Route::delete('/{id}', [ClientController::class, 'destroy'])->name('api.clients.destroy');
});
//CRUD routes for projects
Route::group(['prefix' => 'projects'], function () {
    Route::get('/', [ProjectController::class, 'index'])->name('api.projects.index');
    Route::post('/', [ProjectController::class, 'create'])->name('api.projects.create');
    Route::get('/{id}', [ProjectController::class, 'show'])->name('api.projects.show');
    Route::put('/{id}', [ProjectController::class, 'update'])->name('api.projects.update');
    Route::delete('/{id}', [ProjectController::class, 'destroy'])->name('api.projects.destroy');
});
