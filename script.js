let game = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
let winner;
let currentPlayer;

function checker(game, value) {
  //checking horizontally

  for (let condition of conditions) {
    if (
      game[condition[0]] &&
      game[condition[0]] == game[condition[0]] &&
      game[condition[1]] == game[condition[2]]
    ) {
      console.log(`${value} wins`);
    }
  }

  if (game[0][0] === value && game[0][1] === value && game[0][2] === value) {
    winner = value;
    return console.log(value + " wins");
  } else if (
    game[1][0] === value &&
    game[1][1] === value &&
    game[1][2] === value
  ) {
    winner = value;
    return console.log(value + " wins");
  } else if (
    game[2][0] === value &&
    game[2][1] === value &&
    game[2][2] === value
  ) {
    winner = value;
    return console.log(value + " wins");
  } else if (
    game[0][0] === value &&
    game[0][1] === value &&
    game[0][2] === value
  ) {
    winner = value;
    return console.log(value + " wins");
  }

  //checking vertically
  else if (
    game[0][0] === value &&
    game[1][0] === value &&
    game[2][0] === value
  ) {
    winner = value;
    return console.log(value + " wins");
  } else if (game[0][1] === value && game[1][1] === value && game[2][1]) {
    winner = value;
    return console.log(value + " wins");
  } else if (
    game[0][2] === value &&
    game[1][2] === value &&
    game[2][2] === value
  ) {
    winner = value;
    return console.log(value + " wins");
  } else if (
    game[0][0] === value &&
    game[1][1] === value &&
    game[2][2] === value
  ) {
    winner = value;
    return console.log(value + " wins");
  } else if (game[2][0] === value && game[1][1] && game[0][2] === value) {
    winner = value;
    return console.log(value + " wins");
  }
}

console.log(typeof winner);

//[[a0,a1,a2],[b0,b1,b2],[c0,c1,c2]];

function play(arr, pos, player) {
  if (game[arr][pos] === undefined) {
    return console.log("the position has been taken");
  }
  game[arr][pos] = player;
}

while (winner === undefined) {
  let input = prompt(game + "[arr,pos,player(x || o)]"); //values like 0,1,x
  const convertedVal = input.split(",");
  currentPlayer = convertedVal[2];
  play(Number(convertedVal[0]), Number(convertedVal[1]), convertedVal[2]);
  console.log(game);
  checker(game, currentPlayer);
}
