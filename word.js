var Letters = require("./letters.js");

var Word = function(word){
    this.word = word.slice();
    this.letterCon = [];
    this.answerArray = [];
    this.remainingWrong = 5;
    this.linkLetter = function(){
        for(var i = 0; i < this.word.length; i++){
            this.letterCon.push(new Letters(this.word[i]))
        }  
        // console.log(this.letterCon)
        this.createAnswerArray()
    }
    this.createAnswerArray = function(){
         for (var i = 0; i < this.letterCon.length; i++){
            this.answerArray.push(this.letterCon[i].placeHolder())
        }
        // console.log(this.answerArray)
        this.showToConsole()
    }
    this.showToConsole = function(){
        console.log(this.remainingWrong)
        console.log(this.answerArray.join(" "))
    }
    this.userGuess = function (userGuess) {
        for(var i = 0; i < this.letterCon.length; i++){
            if(this.letterCon[i].letterGuess(userGuess)){
                this.answerArray[i] = this.letterCon[i].placeHolder()
            }
        }
        this.decrementRem(userGuess)
        this.showToConsole()
    }
     
    this.decrementRem = function(userGuess){
        if(this.answerArray.indexOf(userGuess) == -1){
            
            this.remainingWrong = this.remainingWrong - 1
            
        }
    }
}

module.exports = Word;