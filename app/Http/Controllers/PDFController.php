<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
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
        $orgType = $params["orgType"];
        $select = $params["select"];
        $rekv = $params["rekv"];

//        error_log('@@ $rekv'. $rekv);

//        $data = array("select" => $select);
        $data = array("full_name" => $rekv["full_name"]);

        $pdf = PDF::loadView('preview3', $data);
        return $pdf->download('demo.pdf');
//        return $pdf->stream('demo.pdf');
    }
}
