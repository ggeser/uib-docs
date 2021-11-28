<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
use PDF;


class PDFController extends Controller
{
    // function to display preview
    public function preview()
    {
        return view('preview3', ['url' => "https://detivbezopasnosti.ru/"]);
    }

    public function generatePDF(Request $request)
    {
        error_log('@@ lara generatePDF $request'. $request);
        $params = $request["params"];

        $orgType = '';
        $trans = '';

        $q0select = $params["q0select"] ?? ' ';                                                                  // 0
        if ( $params["orgType"] !== null && ($params["orgType"]) !== [] ) { $orgType = $params["orgType"]; }     // 1
        $region = $params["region"]["value"] ?? ' ';                                                             // 2
        $rekv = $params["rekv"] ?? ' ';                                                                          // 3
        $q4Selected = $params["q4Selected"] ?? ' ';                                                              // 4
        $q5select = $params["q5select"] ?? ' ';                                                                  // 5
        $q6Selected = $params["q6Selected"] ?? ' ';                                                              // 6
        $q7select = $params["q7select"] ?? ' ';                                                                  // 7
        $q9select = $params["q9select"] ?? ' ';                                                                  // 9 !
        $q10items = $params["q10items"] ?? ' ';                                                                  // 10
        if ( $params["trans"] !== null && ($params["trans"]) !== [] ) { $trans = $params["trans"]; }             // 11


        $regionsArr = Config::get('constants.regions');
        $RegionOtdel = $regionsArr[$region]["desc"] ?? '';
//        error_log('@@ '. $rekv["full_name"]);
//        error_log('@@ '. $q10items[0]["text"]);


        $data = array(
            "q0select" => $q0select ?? ' ',        // 0
            "orgType" => $orgType ?? ' ',          // 1
            "region" => $RegionOtdel ?? ' ',       // 2
            "rekv" => $rekv ?? ' ',                // 3
            "q4Selected" => $q4Selected ?? ' ',    // 4
            "q5select" => $q5select ?? ' ',        // 5
            "q6Selected" => $q6Selected ?? ' ',    // 6
            "q7select" => $q7select ?? ' ',        // 7
            "q9select" => $q9select ?? ' ',        // 9 !
            "q10items" => $q10items ?? ' ',        // 10
            "trans"    => $trans ?? ' ',           // 11

        );

        $pdf = PDF::loadView('preview3', $data);

        return $pdf->download('demo.pdf');


    }
}
