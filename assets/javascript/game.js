// Generate a random number and send it to html

var goal = Math.floor(Math.random() * 100);
 
//make gem vars and give them a random val 1-10

var gem1 = Math.floor(Math.random() * 10)

var gem2 = Math.floor(Math.random() * 10)

var gem3 = Math.floor(Math.random() * 10)

var gem4 = Math.floor(Math.random() * 10)


 var goalEl= document.getElementById("goal");
  goalEl.textContent = goal;

var scoreEl = document.getElementById("score");
  var score = 0;


// add val from gem 1 to score

var gem1El = document.getElementById("gem1");
gem1El.addEventListener("click",function(){
    score = gem1 + score
    scoreEl.textContent = score

})

// add val from gem 2 to score

var gem2El = document.getElementById("gem2");
gem2El.addEventListener("click",function(){
    score = gem2 + score
    scoreEl.textContent = score

})

// add val from gem 3 to score

var gem3El = document.getElementById("gem3");
gem3El.addEventListener("click",function(){
    score = gem3 + score
    scoreEl.textContent = score

})

// add val from gem 4 to score

var gem4El = document.getElementById("gem4");
gem4El.addEventListener("click",function(){
    score = gem4 + score
    scoreEl.textContent = score

})

// start game function

var started = false

function startGame() {

    started = true;

    
}