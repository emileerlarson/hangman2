
var inquirer = require('inquirer');
// var prompt = require('prompt');
var words = ["hello", "hi"]
var randoWord = words[Math.floor(Math.random() * words.length)]
var letterGuess = [];
var remainingWrong = 5;
var wins = 0;
var losses = 0;


var Word = require("./word.js");

var wordCon = new Word(randoWord)


wordCon.linkLetter()
startgame()

function startgame(){
inquirer.prompt([
    {
      name: "userGuess",
      message: "please type in a letter to guess.",
      type: 'input'
    }]).then(function(answers){
        console.log(answers.userGuess)
        var userGuess = answers.userGuess;
        wordCon.userGuess(userGuess)
            if(wordCon.word !== wordCon.answerArray.join("") && wordCon.remainingWrong >= 0){
                startgame()
            }else if(wordCon.remainingWrong <= 0){
                losses ++;
                console.log("You loose! Losses:  " + losses)
            }else{
                console.log(wordCon)
                wins ++;
                console.log("You Win! Wins: " + wins)
            }
    })
}

