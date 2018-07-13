<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Meta Weather API with VueJS and PHP</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="/dist/app.css"/>
</head>
<body>
<div id="app" class="d-flex flex-column justify-content-center align-content-between">
    <nav class="navbar navbar-expand-lg navbar-light bg-dark text-white">
        <a class="navbar-brand text-white" href="/">Weather</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <router-link to="/" class="nav-link text-white">Home</router-link>
                </li>
            </ul>
        </div>
    </nav>
    <router-view :key="$route.fullPath"></router-view>

    <footer class="footer bg-dark text-warning">
        <div class="container">
            <span class="text-muted">Made with <span style="color: red;">&#9829;</span> (love) by Rahmani Saif El Moulouk</span>
        </div>
    </footer>
</div>
<script src="/dist/app.js"></script>
</body>
</html>