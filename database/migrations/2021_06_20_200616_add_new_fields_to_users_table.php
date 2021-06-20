<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddNewFieldsToUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {

            $table->string('fullName')->after('name');
            $table->string('avatar')->after('remember_token');
            $table->timestamp('birthday')->nullable()->after('avatar');
            $table->string('dolgnost')->after('birthday');
            $table->string('phonenumber')->unique()->nullable()->after('email');

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

            $table->dropColumn('fullName');
            $table->dropColumn('avatar');
            $table->dropColumn('birthday');
            $table->dropColumn('dolgnost');
            $table->dropColumn('phonenumber');

        });
    }
}
