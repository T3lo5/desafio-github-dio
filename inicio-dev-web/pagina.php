<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
            <style type="text/css">
                body {
                    background-color: #f5f5f5;
                }
                .text {
                    font-size: 30px;
                    font-weight: bold;
                    color: #000;
                    align-items: center;
                    text-align: center;
                    justify-content: center;
                }
            </style>
            <title>IMC</title>     
        </head>
            <body class="text">
                <h1>IMC test</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quidem.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quidem.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quidem.
                </p>

                <?php 
                    $nome = "João";
                    $idade = 20;
                    $altura = 1.80;
                    $peso = 80.0;
                    $sexo = "M";
                    $imc = $peso / ($altura * $altura);
                    $classificacao = "";
                    echo "<h1>$nome</h1>";
                    echo "<p>Idade: $idade anos</p>";
                    echo "<p>Altura: $altura m</p>";
                    echo "<p>Peso: $peso kg</p>";
                    echo "<p>IMC: $imc</p>";
                    ?>
            </body>
            <script type="text/javascript">
                $(document).ready(function() {
                    $('p').click(function() {
                        $(this).hide();
                    });
                });
                alert("<?php echo $nome; ?>");
                alert("te acalma");
            </script>
</html>
