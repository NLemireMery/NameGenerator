<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Name Generator</title>
    
    <!-- CSS Stylesheet -->
    <link rel="stylesheet" href="generator-style.css">
    <!-- Data script -->
    <script src="../src/data.js"></script>
    <!-- Application script -->
    <script src="../src/app.js"></script>
</head>
<body>
    <main>
        <h1>Name Generator</h1>
        <form action="" method="POST">
            <fieldset class="genders">
                <legend>Pick a gender for your character</legend>

                <ul>
                    <li>
                        <input type="radio" name="gender" id="male">
                        <label for="male">Male</label>
                    </li>
                    <li>
                        <input type="radio" name="gender" id="female">
                        <label for="female">Female</label>
                    </li>
                </ul>
            </fieldset>
            <fieldset class="universes">
                <legend>Pick a setting</legend>

                <ul>
                    <li>
                        <input type="radio" name="universe" id="fantasy">
                        <label for="fantasy">Fantasy</label>
                    </li>
                    <li>
                        <input type="radio" name="universe" id="scifi">
                        <label for="scifi">Science-Fiction</label>
                    </li>
                    <li>
                        <input type="radio" name="universe" id="contemporary">
                        <label for="contemporary">Contemporary</label>
                    </li>
                </ul>
            </fieldset>
            <div class="button">
                <button type="button" id="generator">Generate</button>
            </div>
        </form>
        <p id="name"></p>
    </main>
</body>
</html>