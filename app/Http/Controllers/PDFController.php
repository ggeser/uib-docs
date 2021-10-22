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

    public function generatePDF()
    {
        $data = array("url" => "https://detivbezopasnosti.ru/");

        $pdf = PDF::loadView('preview3', $data);
        return $pdf->download('demo.pdf');
//        return $pdf->stream('demo.pdf');
    }
}
