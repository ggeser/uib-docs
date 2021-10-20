<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use PDF;

class PDFController extends Controller
{
    // function to display preview
    public function preview()
    {
        return view('preview', ['url' => "https://detivbezopasnosti.ru/"]);
    }

    public function generatePDF()
    {
//        $data = array("url" => "https://detivbezopasnosti.ru/");

        $pdf = PDF::loadView('preview', ['url' => "https://detivbezopasnosti.ru/"]);
        return $pdf->download('demo.pdf');
    }
}
