
function Letters(letter){
    this.letter = letter;
    this.show = false;
    this.placeHolder = function(){
        if(this.show){
            return this.letter
        }
        return "_"
    }
    this.letterGuess = function(letter) {
        if(this.letter.toLowerCase() == letter.toLowerCase()){
            this.show = true;
            return true;
        }
        return false;
    }
}

module.exports = Letters;