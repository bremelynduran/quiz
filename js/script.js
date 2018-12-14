/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore;
    });
 function sport(answer){
     if (answer === "basketball" )
     {
         return 1;
     }
     if (answer === "Baseball")
     {
         return 2;
     }
     if (answer === "Soccer")
     {
         return 3;
     }
     if (answer === "Football")
     {
         return 4;
     }
 }
 
    function snack(answer){
        if (answer === "Candy")
        {
            return 1;
        }
        if (answer === "Cookies")
        {
            return 2;
        }
        if (answer === "Ice-Cream")
        {
            return 3;
        }
        if (answer === "Chips")
        {
            return 4;
        }
    }
    
    function sauce(answer){
        if (answer === "No HotSauce")
        {
            return 1;
        }
        if (answer === "HotSauce")
        {
            return 4;
        }
    }
    
    function animal(answer)
    {
        if (answer === "Fish")
        {
            return 1;
        }
        if (answer === "Hamster")
        {
            return 2;
        }
        if (answer === "Cat")
        {
            return 3;
        }
        if (answer === "Dog")
        {
           return 4; 
        }
    }
});

