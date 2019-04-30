var count = 0;

function cc(card) {
  //debugger;
  // Only change code below this line
  var answer = "";
  var bet = "Bet";
  var hold = "Hold";

  if (card >= 2 && card <= 6) {
    count++;
  } else if (
    card == 10 ||
    card == "A" ||
    card <= "K" ||
    card <= "J" ||
    card <= "Q"
  ) {
    count--;
  }
  if (count > 0) {
    answer = count + " " + bet;
  } else if (count < 0) {
    answer = count + " " + hold;
  } else {
    answer = 0 + " " + hold;
  }

  return answer;
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2);
cc("J");
cc(9);
cc(2);
cc(7);
