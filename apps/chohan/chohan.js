let pr = "images/Dice"
let bankroll = 500;

function showValue(newValue) {
  document.getElementById("showBet").innerHTML = newValue;
}

function rollDice() {
  var die1 = Math.floor(Math.random() * 6) + 1;
  var die2 = Math.floor(Math.random() * 6) + 1;
  document.getElementById("dice1").innerHTML = "<img src='images/Dice" + die1 +  ".png'>";
  document.getElementById("dice2").innerHTML = "<img src='images/Dice" + die2 +  ".png'>";
  
  return (die1 + die2);
}



function winOrLose() {
var foo = rollDice() % 2;
ss = (foo == 1) ? "ODD" : "EVEN";
  if (bankroll > 0) {
    var theBet = parseInt(document.getElementById("makeBet").value);
    if (oe == foo){
    document.getElementById("msg").innerHTML = "You guessed correctly!"
     bankroll += theBet * 0.95;
     }
    else{
    	 document.getElementById("msg").innerHTML = "Sorry! You lose!"
      bankroll -= theBet;
      }
    document.getElementById("money").innerHTML = bankroll.toFixed(2);
    }
    else
      alert("You are out of money!")
  }

//Control fo slider
var slider = new Slider('#ex1', {
	formatter: function(value) {
		return 'Current value: ' + value;
	}
});
  