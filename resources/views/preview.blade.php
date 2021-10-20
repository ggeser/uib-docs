<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">

    <!-- <link rel="icon" href="<%= BASE_URL %>favicon.ico"> -->

    <!-- Styles -->


    <!-- Favicon -->
    <link rel="shortcut icon" href="{{ asset('images/logo/favicon.png') }}">


    <title>Generate PDF Laravel 8 - phpcodingstuff.com</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
</head>
<style type="text/css">
    h2{
        text-align: center;
        font-size:22px;
        margin-bottom:50px;
    }
    body{
        background:#f2f2f2;
    }
    .section{
        margin-top:30px;
        padding:50px;
        background:#fff;
    }
    .pdf-btn{
        margin-top:30px;
    }
</style>
<body>
<div class="container">
    <div class="col-md-8 section offset-md-2">
        <div class="panel panel-primary">
            <div class="panel-heading">
                <h2>ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ</h2>
            </div>
            <div class="panel-body">
                <div class="main-div">
                    ОБЩИЕ ПОЛОЖЕНИЯ
                    Настоящее Пользовательское соглашение (далее – Соглашение) относится к сайту
                    «bezopasnost», расположенному по адресу {{ $url }}.

                    Сайт «bezopasnost» (далее – Сайт) является собственностью юридического лица ООО ООО БИС (ОГРН: 1181690023460 , ИНН: 1656102110 ,адрес регистрации: г Казань улица Гладикова 7б).

                    Настоящее Соглашение регулирует отношения между Администрацией сайта
                    «bezopasnost» (далее – Администрация сайта) и Пользователем данного Сайта.

                    Администрация сайта оставляет за собой право в любое время изменять, добавлять или удалять пункты настоящего Соглашения без уведомления Пользователя.

                    Использование Сайта Пользователем означает принятие Соглашения и изменений, внесенных в настоящее Соглашение.

                    Пользователь несет персональную ответственность за проверку настоящего Соглашения на наличие изменений в нем.
                </div>
            </div>
            <div class="text-center pdf-btn">
                <a href="{{ route('pdf.generate') }}" class="btn btn-primary">Generate PDF</a>
            </div>
        </div>
    </div>
</div>
</body>
</html>
