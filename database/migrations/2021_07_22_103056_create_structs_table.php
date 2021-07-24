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
            //$table->integer('parrentID')->unique(); //указатель на вышестоящего агента

            $table->string('comment');      //полное наименование организации

            $table->string('INN')->unique();    //инн
            $table->string('KPP')->unique();    //кпп
            $table->string('OGRN')->unique();   //огрн
            $table->string('FullOrgName');      //полное наименование организации
            $table->string('ShortOrgName');     //краткое наименование организации
            $table->string('UrAddress');        //юридический адрес
            $table->string('FactAddress');      //фактический адрес
            $table->string('dolgnostRuk');      //должность руководителя
            $table->string('nameRuk');          //имя руководителя
            $table->string('familiaRuk');       //фамилия руководителя
            $table->string('otchestvoRuk');     //отчество руководителя

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
