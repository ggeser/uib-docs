<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <!-- <link rel="icon" href="<%= BASE_URL %>favicon.ico"> -->

  <title>Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template</title>
  <!-- Styles -->
  <link rel="stylesheet" href="{{ asset(mix('css/app.css')) }}">

  <!-- Favicon -->
  <link rel="shortcut icon" href="{{ asset('images/logo/favicon.png') }}">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap" rel="stylesheet"/>
</head>
<body>
  <noscript>
    <strong>We're sorry but Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
  </noscript>

{{--  <div class="container">--}}
{{--      <div class="card">--}}
{{--          <div class="row">--}}
{{--              <div class="card-body">--}}
{{--                  @foreach ($structs as $struct)--}}
{{--                      <div class="col-md-12">--}}
{{--                          <h3>{{ $struct->ShortOrgName }}</h3>--}}
{{--                          <hr />--}}
{{--                          <div class="row">--}}
{{--                              @foreach($struct->children as $cats)--}}
{{--                                  <div class="col-md-4">--}}
{{--                                      <h4>{{ $cats->ShortOrgName }}</h4>--}}
{{--                                      <hr />--}}
{{--                                      @foreach($cats->children as $cat)--}}
{{--                                          <h5>{{$cat->ShortOrgName}}</h5>--}}
{{--                                      @endforeach--}}
{{--                                  </div>--}}
{{--                              @endforeach--}}
{{--                          </div>--}}
{{--                      </div>--}}
{{--                  @endforeach--}}
{{--              </div>--}}
{{--          </div>--}}
{{--      </div>--}}
{{--  </div>--}}

  <div id="app">

  </div>


  <script src="{{ asset(mix('js/app.js')) }}"></script>




</body>
</html>
