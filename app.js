document.addEventListener('DOMContentLoaded', ()=>{
  // cards
  const cardArray = [
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png',
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png',
    },
    {
      name: 'fries',
      img: 'images/fries.png',
    },
    {
      name: 'fries',
      img: 'images/fries.png',
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png',
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png',
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png',
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png',
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png',
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png',
    },
    {
      name: 'pizza',
      img: 'images/pizza.png',
    },
    {
      name: 'pizza',
      img: 'images/pizza.png',
    },
  ]

  cardArray.sort(() => 0.5- Math.random());

  const grid= document.querySelector(".grid");
  const resultDisplay= document.querySelector('#result');
  const alertMsg= document.querySelector('#alert');
  var cardsChosen= [];
  var cardsChosenID= [];
  var cardsWon= [];

  //create board
  function createBoard(){
      for(let i=0; i<cardArray.length; i++){
        var card= document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id',i);
        card.addEventListener('click',flipCard);
        grid.append(card);
      }
  }
  createBoard();
  //check for match
  function checkForMatch(){
    var cards= document.querySelectorAll('img')
      const optionOneId= cardsChosenID[0];
      const optionTwoId= cardsChosenID[1];
      if(cardsChosen[0]===cardsChosen[1]){
        alertMsg.textContent= "Yay! You found a match!";
        cards[optionOneId].setAttribute('src','images/white.png');
        cards[optionTwoId].setAttribute('src','images/white.png');
        cardsWon.push(cardsChosen);
      }else{
        cards[optionOneId].setAttribute('src','images/blank.png');
        cards[optionTwoId].setAttribute('src','images/blank.png');
        alertMsg.textContent= "Sorry, try again";
      }
      cardsChosen= [];
      cardsChosenID= [];
      resultDisplay.textContent= cardsWon.length;
      if(cardsWon.length===cardArray.length/2){
        resultDisplay.textContent= "Congratulations you found them all";
      }
  }

  //flipCard
  function flipCard(){
    var cardID = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardID].name);
    cardsChosenID.push(cardID);
    this.setAttribute('src',cardArray[cardID].img);
    if(cardsChosen.length===2){
      setTimeout(checkForMatch, 500);
    }
    alertMsg.textContent= "";
  }


})
