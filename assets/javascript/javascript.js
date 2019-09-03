var wins =0;
var losses = 0;
var gemcount =0;
var computerGuess = Math.floor(Math.random()* 101);
var gem1 =Math.floor(Math.random()*16)
var gem2 =Math.floor(Math.random()*16)
var gem3 =Math.floor(Math.random()*16)
var gem4 =Math.floor(Math.random()*16)
// $('#reachme').HTML=computerGuess;
// $('#gem1').HTML=gem1;
// $('#gem2').HTML=gem2;
// $('#gem3').HTML=gem3;
// $('#gem4').HTML=gem4;


function update(){
   
    $( "#wins").html(wins);
    $( '#losses').html(losses);
    $( '#reachme').html(computerGuess);
    $( '#gem1').html(gem1);
    $( '#gem2').html(gem2);
    $( '#gem3').html(gem3)
    $( '#gem4').html(gem4)
    $( '#gemcounter').html(gemcount)
}
// add the value of gem to the gemcount var 
// function mycheck(){
//     $('#gem1').click(++gemcount);

// };


if(gemcount== computerGuess){
    wins++;
    alert('you have won'+wins+'times');
    // update();
}
// else (gemcount==computerGuess)
//     losses ++;
//     alert('You went to high, you lose');
//     update();

    

update();

