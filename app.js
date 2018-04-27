//document.querySelector() allows us to access the FIRST HTML element on the page that can be identified with the given CSS selector.
//document.querySelectorAll() will give us an array-like LIST of elements that can be identified with the given CSS selector.

let currentCash = 0

let cashLabel = document.querySelector('#cashTotal');
cashLabel.innerText

let smallQuestButton = document.querySelector('#smallQuest');
let longQuestButton = document.querySelector('#longQuest');
let bossFightButton = document.querySelector('#bossFight');

//The addEventListener() function allows to run a javascript function when a specific event occurs on the HTML page (such as a mouse-click, or a hover over).
//addEventListener() takes two arguments, the first being a string that specifies what event we want to "listen" to, and the second being the function we want to run.
//Notice that the function passed in as an argument is not invoked (aka there's no parenthesis next to the name), but rather the function name alone is given.
smallQuestButton.addEventListener('click', takeSmallQuest);
longQuestButton.addEventListener('click', takeLongQuest);
bossFightButton.addEventListener('click', takeBossFight);

//TODO: alter the behavior of the takeSmallQuest, takeLongQuest, and takeBossFight functions so that they randomly add a value within their defined ranges to your total cash!
function takeSmallQuest(){
  if (currentCash <= 15){
    alert ('Alright! Let us Farm More Cash!')
  }
  if (currentCash >= 20){
    alert ('Excellent! Move on to the next level!')
  }
let randomNum = Math.floor(Math.random()*10) + 10
    currentCash += randomNum;
  return cashLabel.innerText = currentCash
  // you could have wrapped in the number() to make it all around a number or add a +to the beginning
}

function takeLongQuest(){
  if (currentCash <= 48){
    alert ('More experienced, are we? How about another go!')
  }
  if (currentCash >= 50){
    alert ('We could move on if you like...')
  }
  if (currentCash > 70){
    alert (` ... you're getting greedy. `)
  }
  if (currentCash > 100){
    alert (`Bro, or bro'ette, you're more than ready for the final boss. Move on.`)
  }
  let randomNum = Math.floor(Math.random()*10) + 30
      currentCash += randomNum;
    return cashLabel.innerText = currentCash
}

function takeBossFight(){
  if (currentCash <= 80){
    alert ('Oof, just barely made it there, champ.')
  }
  if (currentCash >= 100){
    alert ('Congratulations, you are a cash money super-star!')
  }
  if (currentCash > 200){
    alert ('Annnnd, now we are just farming for the trading post. Got it. Welcome to monotonus gaming.')
  }
  let randomNum = Math.floor(Math.random()*10) + 70
      currentCash += randomNum;
    return cashLabel.innerText = currentCash
}

// could create a function to do it

function randInRange(min,max){
  return Math.floor(Math.random()*(min,max)) + min;
}
//HINT: All visible elements on HTML web page will be represented as strings when they are accessed using javascript
//HINT: To get the text value of the cash that's currently on the page, access it's inner text using cashLabel.innerText
//HINT: To set the text value of the cash that's currently on the page, try using cashLabel.innerText = '(some other value)'
