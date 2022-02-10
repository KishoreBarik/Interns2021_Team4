<?php

namespace App\Http\Controllers;

use App\Models\Department;
use App\Models\DepartmentAccess;
use Illuminate\Http\Request;

class DepartmentAccessController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $all_dep = DepartmentAccess::all();
        return[
            'all department-acceses'=>$all_dep
        ];
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $department_access = DepartmentAccess::create($request->all());

        return[
            'message'=>'Department access was given ',
            'department_access'=>$department_access

        ];
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $department_access = DepartmentAccess::whereId($id)->first();

        return [
            'message' => 'Required Department access',
            'department_access'=>$department_access
        ];
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        DepartmentAccess::whereId($id)->update($request->all());

        return [
            'message'=>'Department Access Updated ',
            'DepartmentAccess'=>DepartmentAccess::whereId($id)->first()
        ];
    }

    public function destroy($id){
        DepartmentAccess::whereId($id)->delete();
        return[
            'message' => 'Department Access Denied for this user',
            
        ];
    }

}
