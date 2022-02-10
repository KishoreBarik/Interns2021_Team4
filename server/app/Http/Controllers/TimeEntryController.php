<?php

namespace App\Http\Controllers;

use App\Models\TimeEntry;
use Illuminate\Http\Request;

class TimeEntryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $time_entry_list = TimeEntry::all();
        return [
            'message'=>'All Time Entries List',
            $time_entry_list
        ];
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $time_entry = TimeEntry::create($request->all());
        return [
            'message'=>'TimeEntry Added',
            'time_entry'=>$time_entry
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
        $time_entry = TimeEntry::whereId($id)->first();

        return[
            'message'=>'Required TimeEntry',
            'time_entry'=>$time_entry
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
        $time_entry = TimeEntry::whereId($id)->update($request->all());

        return[
            'message'=>'Time Entry Updated',
            'TimeEntry'=>TimeEntry::whereId($id)->first()
        ];
    }

}
