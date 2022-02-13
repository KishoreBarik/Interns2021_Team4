<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\ProjectController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Client;
use App\Models\Department;
use App\Models\Project;
use App\Models\User;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------

*/




/*
    For        : Getting all Users
    RouteName  : /
    Method     : GET
    Access     : public
*/

Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:api');




//Getting Authenticated User Details
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});



//ADMIN ACCESS ROUTES 
Route::group(['prefix' => 'users', 'middleware' => ['auth:api', 'isAdmin']], function () {

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
});




//User/Admin Authenticated Routes
Route::group(['prefix' => 'users', 'middleware' => 'auth:api'], function () {
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



    /*
    For        : Reset the Forget Password
    RouteName  : /{id}
    Method     : PUT
    Access     : Private
    */
    Route::put('users/{id}/changepassword', [UserController::class, 'changePassword'])->name('api.users.changePassword')->middleware('auth:api');





    /*
    For        : Reset the Forget Password
    RouteName  : /{id}
    Method     : PUT
    Access     : Private
    */
    Route::put('users/{id}/forgetpassword', [UserController::class, 'forgetPassword'])->name('api.users.forgetPassword')->middleware('auth:api');
});




//CRUD for Departments
Route::group(['prefix' => 'departments', 'middleware' => ['auth:api', 'isAdmin']], function () {

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

/*
|--------------------------------------------------------------------------
| API CRUD Routes and admin access Routes FOr clients and projects
|--------------------------------------------------------------------------

*/
Route::group(['prefix' => 'clients', 'middleware' => ['auth:api', 'isAdmin']], function () {

    /*
    For        : Getting all clients
    RouteName  : /
    Method     : GET
    Access     : private
*/
    Route::get('/', [ClientController::class, 'index'])->name('api.clients.index');

    /*
    For        : Creating a Client
    RouteName  : /
    Method     : POST
    Access     : Private
    */
    Route::post('/', [ClientController::class, 'create'])->name('api.clients.create');
    /*
    For        : Getting A Specific Client based on id
    RouteName  : /{id}
    Method     : GET
    Access     : Private
    */
    Route::get('/{id}', [ClientController::class, 'show'])->name('api.clients.show');

    // For        : Update The Client Details based on id
    // RouteName  : /{id}
    // Method     : PUT/PATCH
    // Access     : Private
    Route::put('/{id}', [ClientController::class, 'update'])->name('api.clients.update');
    // For        : Delete a particular Client based on id
    // RouteName  : /
    // Method     : GET
    // Access     : Private
    Route::delete('/{id}', [ClientController::class, 'destroy'])->name('api.clients.destroy');
});

/*
|--------------------------------------------------------------------------
| API CRUD Routes and admin access Routes FOr clients
|--------------------------------------------------------------------------

*/
Route::group(['prefix' => 'projects', 'middleware' => ['auth:api', 'isAdmin']], function () {
    /*
    For        : Getting all projects
    RouteName  : /
    Method     : GET
    Access     : private
*/
    Route::get('/', [ProjectController::class, 'index'])->name('api.projects.index');
    /*
    For        : Creating a project
    RouteName  : /
    Method     : POST
    Access     : Private
    */
    Route::post('/', [ProjectController::class, 'create'])->name('api.projects.create');
    /*
    For        : Getting A Specific project based on id
    RouteName  : /{id}
    Method     : GET
    Access     : Private
    */
    Route::get('/{id}', [ProjectController::class, 'show'])->name('api.projects.show');
    // For        : Update The project Details based on id
    // RouteName  : /{id}
    // Method     : PUT/PATCH
    // Access     : Private
    Route::put('/{id}', [ProjectController::class, 'update'])->name('api.projects.update');
    // For        : Delete a particular Client based on id
    // RouteName  : /
    // Method     : GET
    // Access     : Private
    Route::delete('/{id}', [ProjectController::class, 'destroy'])->name('api.projects.destroy');
});



/*
|--------------------------------------------------------------------------
| API Relational Routes and admin access Routes FOr clients and projects
|--------------------------------------------------------------------------

*/
Route::group(['middleware' => ['auth:api', 'isAdmin']], function () {

    // For        : The client list bellongs to the project
    // RouteName  : /{id}
    // Method     : get
    // Access     : Private

    Route::get('/projects/{id}/client', function ($id) {
        $projects = Project::find($id);
        return $projects;
    });
    // For        : The project list belongs to the client
    // RouteName  : /{id}
    // Method     : get
    // Access     : Private
    Route::get('/client/{id}/projects', function ($id) {
        $client = Client::find($id);
        return $client;
    });
    // For        : The department list belongs to the project
    // RouteName  : /{id}
    // Method     : get
    // Access     : Private
    Route::get('/project/{id}/department', function ($id) {
        $client = Project::find($id)->client;
        $department = Client::find($client->id)->department;
        return $department;
    });
    // For        : The department list belongs to the clients
    // RouteName  : /{id}
    // Method     : get
    // Access     : Private
    Route::get('/client/{id}/department', function ($id) {
        $client = Client::find($id);
        return $client;
    });
});
