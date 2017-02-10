angular.module('pigLatinApp').controller('HomeController', function ($scope) {
  var self = this;

  this.inputField = "";

  this.outputField = "";

  this.arrayOfStrings = [];

  this.histories = [];

  var updateHistory = function(){
    if(self.histories.length < 10){
      self.histories.push(self.inputField);
    }else{
      self.histories.shift();
      self.histories.push(self.inputField);
    }
  };

  var pigify = function(string){
    var firstLetter = string.slice(0, 1);
    var remainingChar = string.substr(1);
    var vowels = ['a', 'e', 'i', 'u'];
    var isVowel = false;
    _.each(vowels, function(v){
      if(firstLetter === v){
        isVowel = true;
        return false;
      }else{
        isVowel = false;
      }
    });

      if(isVowel){
        self.arrayOfStrings.push(remainingChar + firstLetter + "i");
      }else{
          self.arrayOfStrings.push(remainingChar + firstLetter + "ay");
      }
  };

  this.makePigLatin = function(){
    self.outputField = "";
    self.arrayOfStrings = [];
    if(self.inputField === ""){
      return;
    }
    var string = self.inputField.toLowerCase();
    var array = string.split(' ');

    _.each(array, function(string){
      pigify(string);
    });

    self.outputField = self.arrayOfStrings.join(" ");
    updateHistory();
    self.inputField = "";
  };

});