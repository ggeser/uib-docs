<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDepartsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('departs', function (Blueprint $table) {
            $table->id();

            $table->string('name')->nullable();                 //название отдела
            $table->string('description')->nullable();          //описание
            $table->string('comment')->nullable();              //комментарий
            $table->integer('OtdelDolgn')->default(0);    //0=Otdel, 1=Dolgnost

            $table->nestedSet();
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
        Schema::dropIfExists('departs');
    }
}
