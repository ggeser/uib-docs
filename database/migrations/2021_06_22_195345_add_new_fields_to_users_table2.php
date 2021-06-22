<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddNewFieldsToUsersTable2 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {

            $table->string('login')->unique()->nullable()->after('id');
            $table->string('familia')->nullable()->after('name');
            $table->string('otchestvo')->nullable()->after('familia');
            $table->string('otdel')->nullable()->after('dolgnost');

            $table->dropColumn('fullName');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {

            $table->string('fullName')->after('name');

            $table->dropColumn('login');
            $table->dropColumn('familia');
            $table->dropColumn('otchestvo');
            $table->dropColumn('otdel');

        });
    }
}
