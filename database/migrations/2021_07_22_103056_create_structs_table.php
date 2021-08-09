<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStructsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('structs', function (Blueprint $table) {
            $table->id();

            $table->string('comment')->nullable();          //комментарий

            $table->string('INN')->unique()->nullable();    //инн
            $table->string('KPP')->unique()->nullable();    //кпп
            $table->string('OGRN')->unique()->nullable();   //огрн
            $table->string('FullOrgName')->nullable();      //полное наименование организации
            $table->string('ShortOrgName')->nullable();     //краткое наименование организации
            $table->string('UrAddress')->nullable();        //юридический адрес
            $table->string('FactAddress')->nullable();      //фактический адрес
            $table->string('dolgnostRuk')->nullable();      //должность руководителя
            $table->string('nameRuk')->nullable();          //имя руководителя
            $table->string('familiaRuk')->nullable();       //фамилия руководителя
            $table->string('otchestvoRuk')->nullable();     //отчество руководителя

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
        Schema::dropIfExists('structs');
    }
}
