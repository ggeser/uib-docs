<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generate PDF Laravel 8 - phpcodingstuff.com</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <style>
        @font-face {
            font-family: "DejaVu Sans";
            font-style: normal;
            font-weight: 400;
            src: url("/fonts/dejavu-sans/DejaVuSans.ttf");
            /* IE9 Compat Modes */
            src:
                local("DejaVu Sans"),
                local("DejaVu Sans"),
                url("/fonts/dejavu-sans/DejaVuSans.ttf") format("truetype");
        }
        body {
            font-family: "DejaVu Sans";
            font-size: 12px;
        }
    </style>
</head>
<style type="text/css">
    /*h2{*/
    /*    text-align: center;*/
    /*    font-size:22px;*/
    /*    margin-bottom:50px;*/
    /*}*/
    body{
        /*background:#f2f2f2;*/
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
{{--<div class="container">--}}
{{--    <div class="col-md-8 section offset-md-2">--}}
        <div class="panel">
            <div style="text-align: center; font-size:22px; margin-bottom:50px;">
                ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ
            </div>
            <div class="panel-body">
                <div class="main-div">
                    ОБЩИЕ ПОЛОЖЕНИЯ
                    Настоящее Пользовательское соглашение (далее – Соглашение) относится к сайту
                    <br>
                    <br>$orgType == {{ $orgType }}.
                    <br>$rekv["full_name"] == {{ $rekv["full_name"] }}.
                    <br>$rekv["short_name"] == {{ $rekv["short_name"] }}.
                    <br>$region == {{ $region }}.


                    <br>
                    Сайт «bezopasnost» (далее – Сайт) является собственностью юридического лица ООО ООО БИС (ОГРН: 1181690023460 , ИНН: 1656102110 ,адрес регистрации: г Казань улица Гладикова 7б).

                    Настоящее Соглашение регулирует отношения между Администрацией сайта
                    «bezopasnost» (далее – Администрация сайта) и Пользователем данного Сайта.

                    Администрация сайта оставляет за собой право в любое время изменять, добавлять или удалять пункты настоящего Соглашения без уведомления Пользователя.

                    Использование Сайта Пользователем означает принятие Соглашения и изменений, внесенных в настоящее Соглашение.

                    Пользователь несет персональную ответственность за проверку настоящего Соглашения на наличие изменений в нем.
                </div>
            </div>
{{--            <div class="text-center pdf-btn">--}}
{{--                <a href="{{ route('pdf.generate') }}" class="btn btn-primary">Generate PDF</a>--}}
{{--            </div>--}}
        </div>
{{--    </div>--}}
{{--</div>--}}
</body>
</html>
