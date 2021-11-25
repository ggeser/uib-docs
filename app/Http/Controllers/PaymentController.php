<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use Davidnadejdin\LaravelRobokassa\Robokassa;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Creante new Payment and generate URL.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return [json] user object
     */
    public function generatePayment(Request $request)
    {
        error_log('@@ lara generatePayment $request'. $request);
        $params = $request["params"];

//        $q0select = $params["q0select"];                // 0
//        $orgType = $params["orgType"];                  // 1
//        $region = $params["region"]["value"];           // 2
//        $rekv = $params["rekv"];                        // 3
//        $q4Selected = $params["q4Selected"];            // 4
//        $q5select = $params["q5select"];                // 5


        $payment = Robokassa::createPayment("00000001",100,"test1");

        $url = $payment->getPaymentUrl();
        error_log('@@ $url '. $url);

//        return response()->json($url);

        return response()->json([
            'url' => $url,
        ]);
    }

    public function resultPayment(Request $request)
    {
        error_log('@@ lara resultPayment $request'. $request);
        $params = $request["params"];

//        $q0select = $params["q0select"];                // 0
//        $orgType = $params["orgType"];                  // 1
//        $region = $params["region"]["value"];           // 2
//        $rekv = $params["rekv"];                        // 3
//        $q4Selected = $params["q4Selected"];            // 4
//        $q5select = $params["q5select"];                // 5


//        $payment = Robokassa::createPayment("00000001",100,"test1");
//
//        $url = $payment->getPaymentUrl();
//        error_log('@@ $payment->getPaymentUrl()'. $url);


        return response()->json([
            'status' => 'ok',
        ]);
    }

    public function store(Request $request)
    {
       //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Payment  $payment
     * @return \Illuminate\Http\Response
     */
    public function show(Payment $payment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Payment  $payment
     * @return \Illuminate\Http\Response
     */
    public function edit(Payment $payment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Payment  $payment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Payment $payment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Payment  $payment
     * @return \Illuminate\Http\Response
     */
    public function destroy(Payment $payment)
    {
        //
    }
}
