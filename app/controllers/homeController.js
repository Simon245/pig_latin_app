angular.module('pigLatinApp').controller('HomeController', function ($scope) {
  var self = this;

  this.inputField = "";

  this.outputField = "";

  this.makePigLatin = function(){
    var string = self.inputField.toLowerCase();
    var firstLetter = string.slice(0, 1);
    var remainingChar = string.substr(1);
    var vowels = ['a', 'e', 'i', 'u'];
    var isVowel = false;

    if(string === ""){
      self.outputField = "";
      return;
    }

    _.each(vowels, function(v){
      if(firstLetter === v){
        self.outputField = remainingChar + firstLetter + "i";
        return false;
      }else{
        self.outputField = remainingChar + firstLetter + "ay";
      }
    });
  };

});