// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 *
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 *
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
 */
function processFirstItem(stringList, callback) {
  return callback(stringList[0]);
}

// ⭐️ Example Challenge END ⭐️

///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 *
 * 1. What is the difference between counter1 and counter2?
 *  counter1 has all the vars stored in the function, keep the data contained and only accessable through the function. counter2 has a global var and is changing count globally.
 *
 * 2. Which of the two uses a closure? How can you tell?
 *  counter1 uses closure, it has a nested function that is calling the count from the parent function.
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better?
 *  counter1 is good for when you have multiple counters, say one for each in a set of 4 teams.
 *  counter2 would be used for if the count need to be kept know to many other objects/functions. Could be a score of a game overall, something that can be changed by many different functions,
 *
 */

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    return count++;
  };
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}

/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning() {
  return function () {
    const score = Math.floor(Math.random() * 3);
    return score;
  };
}

const team1 = inning();

// console.log(team1());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings 

and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}
*/

function finalScore(cb, innNum) {
  temp = cb();
  let score1 = 0;
  let score2 = 0;
  for (let i = 0; i < innNum; i++) {
    score1 += temp();
    score2 += temp();
  }
  return { Home: score1, Away: score2 };
}

// console.log(finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each point in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */

function scoreboard(cb, innNum) {
  temp = cb();
  let scoreAway = 0;
  let scoreHome = 0;

  for (let i = 0; i < innNum; i++) {
    scoreAway += temp();
    scoreHome += temp();
    console.log(
      `Inning ${i + 1}: Away Team: ${scoreAway} - Home Team: ${scoreHome}`
    );
  }
}

scoreboard(inning, 9);
