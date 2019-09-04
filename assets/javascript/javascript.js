var wins =0;
var losses = 0;
var score =0;
var computerGuess = getRandomInt
var gem1 =Math.floor(Math.random()*13)
var gem2 =Math.floor(Math.random()*13)
var gem3 =Math.floor(Math.random()*13)
var gem4 =Math.floor(Math.random()*13)
$( '#reachme').html(computerGuess);

function wincheck(){
    if (score > computerGuess){
        losses ++;
        alert('You went to high, you lose');
        update();
    }
    
    //  else {
    //     wins++;
    //     alert('you have won'+wins+'times');
    //    update();}442
    };
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (121- 20)) + 20; //The maximum is exclusive and the minimum is inclusive
  }
  function crystalvalues(){
     $( '#gem1').html(gem1);
     $( '#gem2').html(gem2);
     $( '#gem3').html(gem3);
     $( '#gem4').html(gem4);}
function update(){
   
    $( "#wins").html(wins);
    $( '#losses').html(losses);
    // $( '#gem1').html(gem1);
    // $( '#gem2').html(gem2);
    // $( '#gem3').html(gem3);
    // $( '#gem4').html(gem4);
    // $( '#gemcounter').html(score);
}
function checkclick(){
    $('#gem1').on('click',function() {
        alert('crystal 1: '+""+gem1);
        score += gem1;
        $( '#gemcounter').html(score);
        update();
        wincheck();
       
    })

    $('#gem2').on('click',function() {
        alert('crystal 2: '+""+gem2);
        score += gem2;
        $( '#gemcounter').html(score);
        update();
        wincheck()
    })

    $('#gem3').on('click',function() {
        alert('crystal 3: '+""+gem3);
        $( '#gemcounter').html(score);
        score += gem3;
        update(); 
        wincheck()
    
    })
    $('#gem4').on('click',function() {
        alert('crystal 4: '+""+gem4);
        $( '#gemcounter').html(score);
        score += gem4;
        update();
        wincheck()
    
    })

}
// if(score == computerGuess){
//     wins++;
//     alert('you have won'+wins+'times');
//     update();
// // }
// function wincheck(){
// if (score > computerGuess){
//     losses ++;
//     alert('You went to high, you lose');
//     update();
// }

//  else {
//     wins++;
//     alert('you have won'+wins+'times');
//    update();
// };}
//  (score == computerGuess)
 
checkclick();

update();
crystalvalues();
