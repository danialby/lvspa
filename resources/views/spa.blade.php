@php
$config = [
    'appName' => config('app.name'),
    'locale' => $locale = config('app.locale'),
    'locales' => config('app.locales'),
    'githubAuth' => config('services.github.client_id'),
];

@endphp
<!DOCTYPE html>
<html lang="fa">
<head>
  <meta charset="utf-8">
  <meta http-equiv="Content-Security-Policy" content="default-src 'self' *; frame-src data: 'self' *; img-src data: *; font-src 'self' data:; style-src 'self' http://* https://* 'unsafe-inline'; script-src 'self' http://* https://* 'unsafe-inline' 'unsafe-eval';">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>{{ config('app.name') }}</title>
  {{-- <link rel="stylesheet" href="dist/css/custom.css" > --}}
  <link rel="stylesheet" href="{{ mix('dist/css/app.css') }}">
  {{-- <link rel="stylesheet" href="dist/css/r.css" > --}}





</head>
<body dir="rtl">
  <div id="app"></div>

  {{-- Global configuration object --}}
  <script>
    window.config = @json($config);
  </script>

  {{-- Load the application scripts --}}
  <script src="{{ mix('dist/js/app.js') }}"></script>
  {{-- <script src="dist/js/jquery.min.js"></script> --}}
</body>
</html>
