<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTimeentriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::dropIfExists('timeentries');
        Schema::create('timeentries', function (Blueprint $table) {
            $table->Integer('id', true);
            $table->string('task _description');
            $table->integer('project_id');
            $table->unsignedInteger('user_id');//fk
            $table->foreign('user_id')->references('id')->on('users');
            $table->integer('duration_min');
            $table->date('date');
            $table->unsignedInteger('updated_by');//fk to users
            $table->foreign('updated_by')->references('id')->on('users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('timeentries');
    }
}
