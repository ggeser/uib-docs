<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddStructs1 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('structs', function (Blueprint $table) {

            $table->integer('depart_id')->nullable()->after('id');  // этой структуре соответствует дерево отделов с вершиной depart_id
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('structs', function (Blueprint $table) {

            $table->dropColumn('depart_id');
        });
    }
}
