<?php

namespace App\Http\Controllers;

use App\Http\Resources\CreateTimeEntryResource;
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
        $timeEntryList = TimeEntry::all();
        return [
            'message'=>'All Time Entries List',
            'timeEntries'=>CreateTimeEntryResource::collection($timeEntryList)
        ];
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $timeEntry = TimeEntry::create($request->all());
        return [
            'message'=>'TimeEntry Added',
            'timeEntry'=>new CreateTimeEntryResource($timeEntry)
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
        $timeEntry = TimeEntry::whereId($id)->first();

        return[
            'message'=>'Required TimeEntry',
            'timeEntry'=>new CreateTimeEntryResource($timeEntry)
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
        $timeEntry = TimeEntry::whereId($id)->update($request->all());

        return[
            'message'=>'Time Entry Updated',
            'TimeEntry'=>new CreateTimeEntryResource(TimeEntry::whereId($id)->first())
        ];
    }

}
