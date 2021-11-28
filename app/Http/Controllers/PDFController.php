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

//        $q0select = $params["q0select"] ?? ' ';                // 0
        if ( $params["orgType"] !== null && ($params["orgType"]) !== [] ) { $orgType = $params["orgType"]; } // 1
        $region = $params["region"]["value"] ?? ' ';          // 2
//        $rekv = $params["rekv"] ?? ' ';                        // 3
//        $q4Selected = $params["q4Selected"] ?? ' ';            // 4
//        $q5select = $params["q5select"] ?? ' ';                // 5



//        var_dump($q0select[0]);
//        error_log('@@ '. $q0select[0]);
//        if (in_array("val0", $q0select)) {
//            error_log('@@ 1');
//        }
//        else{
//            error_log('@@ 0');
//        }

        $regionsArr = Config::get('constants.regions');
        $RegionOtdel = $regionsArr[$region]["desc"];



        $data = array(
            "q0select" => $q0select ?? ' ',        // 0
            "orgType" => $orgType ?? ' ',          // 1
            "region" => $RegionOtdel ?? ' ',            // 2
            "rekv" => $rekv ?? ' ',                // 3
            "q4Selected" => $q4Selected ?? ' ',    // 4
            "q5select" => $q5select ?? ' ',        // 5

        );

        $pdf = PDF::loadView('preview3', $data);

        return $pdf->download('demo.pdf');


    }
}
