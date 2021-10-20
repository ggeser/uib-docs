<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Laravel PDF</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
</head>
<body>
<h2 class="mb-3">Тест раз два 123</h2>
<table class="table table-bordered">
    <thead>
    <tr>
        <th>Name</th>
        <th>E-mail</th>
        <th>Phone</th>
        <th>DOB</th>
    </tr>
    </thead>
    <tbody>

        <tr>
            <td>{{ $url }}</td>
            <td>{{ $url }}</td>
            <td>{{ $url }}</td>
            <td>{{ $url }}</td>
        </tr>

    </tbody>
</table>

<div class="text-center pdf-btn">
    <a href="{{ route('pdf.generate') }}" class="btn btn-primary">Generate PDF</a>
</div>

</body>
</html>
