<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDepartmentAccessesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::dropIfExists('department_accesses');
        Schema::create('department_accesses', function (Blueprint $table) {
            $table->Integer('id', true);
            $table->unsignedinteger('department_id');
            $table->foreign('department_id')->references('id')->on('departments');
            $table->unsignedinteger('user_id');
            $table->foreign('user_id')->references('id')->on('users');
            $table->enum('status',['active','inactive'])->default('active');
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
        Schema::dropIfExists('department_accesses');
    }
}
