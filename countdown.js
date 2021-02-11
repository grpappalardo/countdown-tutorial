<html>
<head>
    <style type="text/css">
    body {
  background-color: FloralWhite; 
}
h1 {
  font-family: sans-serif;
  color: LightSeaGreen;
}
    </style>
    
    <script type="text/javascript">
var timeRemaining = 5
var timerElement = document.getElementById("timer")

function countdown() {
  timeRemaining = timeRemaining - 1    
  if (timeRemaining > 0) {
    timerElement.innerText = timeRemaining
  } else {
    timerElement.innerText = "Time's up!"
  }
}
setInterval (countdown, 1000)
    </script>
</head>
<body>
<h1 id="timer">5</h1>
</body>
</html>
