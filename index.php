<!DOCTYPE html>
<html lang="en">

<head>
    <title></title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="css/style.css" rel="stylesheet">
</head>

<body>
    <a href="home.php">home</a>
    <div>
        <?php

            function john() 
            {
                return 6;
            }

            $x = john();
            echo $x;
        ?>
    </div>
</body>

</html>