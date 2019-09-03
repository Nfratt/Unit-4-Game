var wins =0;
var losses = 0;
var gemcount =0;
var computerGuess = getRandomInt
var gem1 =Math.floor(Math.random()*13)
var gem2 =Math.floor(Math.random()*13)
var gem3 =Math.floor(Math.random()*13)
var gem4 =Math.floor(Math.random()*13)


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (121- 20)) + 20; //The maximum is exclusive and the minimum is inclusive
  }
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
function checkclick(){
    $('#gem1').on('click',function() {
        alert('crystal 1'+""+gem1);
        gemcount += gem1;
        update();
    
    }
    )}
    
if(gemcount== computerGuess){
    wins++;
    alert('you have won'+wins+'times');
    update();
}
else if (gemcount>computerGuess){
    losses ++;
    alert('You went to high, you lose');
    update();}
    

update();

