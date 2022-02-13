<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\DepartmentAccessController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\TimeEntryController;
use App\Http\Controllers\UserController;
use App\Http\Resources\CreateTimeEntryResource;
use App\Models\Client;
use App\Models\Department;
use App\Models\Project;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes                                                               
|--------------------------------------------------------------------------
*/




/*
    For        : Login
    RouteName  : /login
    Method     : POST
    Access     : Public
*/

Route::post('/login', [AuthController::class, 'login']);



/*
    For        : Logout
    RouteName  : /logout
    Method     : POST
    Access     : Private
*/
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



//TimeEntry  Routes
Route::group(['prefix' => 'timeentries', 'middleware' => ['auth:api']], function () {



    // For        : TimeEntries List
    // RouteName  : /
    // Method     : GET
    // Access     : Private
    Route::get('/', [TimeEntryController::class, 'index'])->name('api.timeentries.index')->middleware('isAdmin');



    // For        : Create A Particular TimeEntry
    // RouteName  : /
    // Method     : POST
    // Access     : Private
    Route::post('/', [TimeEntryController::class, 'create'])->name('api.timeentries.create');



    // For        : Get a Particular TimeEntry
    // RouteName  : /{id}
    // Method     : GET
    // Access     : Private
    Route::get('/{id}', [TimeEntryController::class, 'show'])->name('api.timeentries.show');


    // For        : Edit a Particular TimeEntry
    // RouteName  : /{id}
    // Method     : PUT
    // Access     : Private
    Route::put('/{id}', [TimeEntryController::class, 'update'])->name('api.timeentries.update');
});



//Routes for Department-accesses
Route::group(['prefix' => 'department-access', 'middleware' => ['auth:api', 'isAdmin']], function () {


    // For        : Total Department Acceses
    // RouteName  : /
    // Method     : GET
    // Access     : Private
    Route::get('/', [DepartmentAccessController::class, 'index'])->name('api.department-access.index');


    // For        : Create a Department Access
    // RouteName  : /
    // Method     : POST
    // Access     : Private
    Route::post('/', [DepartmentAccessController::class, 'create'])->name('api.department-access.create');


    // For        : Get A Particular Department Access
    // RouteName  : /{id}
    // Method     : GET
    // Access     : Private
    Route::get('/{id}', [DepartmentAccessController::class, 'show'])->name('api.department-access.show');



    // For        : Edit A Department Access
    // RouteName  : /{id}
    // Method     : PUT
    // Access     : Private
    Route::put('/{id}', [DepartmentAccessController::class, 'update'])->name('api.department-access.update');


    // For        : Delete a Particular DepartmentAccess
    // RouteName  : /{id}
    // Method     : DELETE
    // Access     : Private
    Route::delete('/{id}', [DepartmentAccessController::class, 'destroy'])->name('api.department-access.destroy');
});



//
/*
|--------------------------------------------------------------------------
|RELATIONAL ROUTES                    -----------------------------------------------------------------
*/

//User Accessible Realtional Routes

Route::group(['middleware' => 'auth:api'], function () {
    //Projects under a one particular user
    Route::get('/user/{id}/projects', function ($id) {

        $userProjects = User::findOrFail($id)->projects;
        return $userProjects;
    });


    //The client list belongs to the user
    Route::get('/user/{id}/clients', function ($id) {

        $projects = User::findOrFail($id)->projects;

        foreach ($projects as $proj) {
            echo Client::findorFail($proj->client_id);
        }
    });


    //The Department list that one user BelongsTo
    Route::get('/user/{id}/departments', function ($id) {

        $userDepartment = User::findOrFail($id)->departments;
        return $userDepartment;

    });

    Route::get('/user/{id}/timeentries', function ($id) {
        $timeEntryList = User::findOrFail($id)->timeentries;

        return [
            'TimeEntries' => CreateTimeEntryResource::collection($timeEntryList)
        ];
    });
});



// Admin Access Relational Routes

Route::group(['middleware' => ['auth:api', 'isAdmin']], function () {

    //The users List under a specific project
    Route::get('/project/{id}/users', function ($id) {
        $projectUsers = Project::findOrFail($id)->users;

        return $projectUsers;
    });



    //The users Under a Department
    Route::get('/department/{id}/users', function ($id) {

        $depUsers = Department::findOrFail($id)->users;

        return $depUsers;

    });



    //The List of projects under A departments

    Route::get('/department/{id}/projects', function ($id) {

        $depProjects = Department::findOrFail($id)->projects;

        return $depProjects;
    });


    //Client List under a Department
    Route::get('/department/{id}/clients', function ($id) {
        $depClients = Department::findOrFail($id)->clients;

        return $depClients;
    });


    //users Under Client
    Route::get('/client/{id}/users', function ($id) {
        $department = Client::findOrFail($id)->departments;

        $users = Department::findOrFail($department->id)->users;

        return $users;
    });
});
