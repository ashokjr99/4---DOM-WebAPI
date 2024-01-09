let cardImg = document.getElementById("card-image");
let cardRemaining = document.getElementById("card-remaining");
let cardButton = document.getElementById("card-button");

const createDeckAndGiveId = async () => {
  try {
    let url =
      "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";

    //   let json = await (await fetch(url)).json();

    // OR
    let response = await fetch(url);
    let json = await response.json();

    let cardId = json.deck_id;

    return cardId;
  } catch (err) {
    console.log(err);
  }
};

const drawCard = async (deckId) => {
  try {
    let url = `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`;

    let response = await fetch(url);
    let json = await response.json();

    console.log(json);

    if (json.error) throw new Error(json.error);

    let myCardData = {
      img: json.cards[0].images.svg,
      remaining: json.remaining,
    };
    return myCardData;
  } catch (err) {
    console.log(err);
    cardRemaining.textContent = err;
  }
};

const start = async () => {
  try {
    let cardId = await createDeckAndGiveId();

    cardButton.onclick = async () => {
      cardImg.style.opacity = 0;

      let { img, remaining } = await drawCard(cardId);

      cardRemaining.textContent = `Remaining: ${remaining}`;

      cardButton.textContent = remaining == 0 ? "Reshuffle" : "Draw a Card";

      console.log(img);
      if (remaining == 0) {
        await start();
      } else {
        cardImg.src = img;
      }

      setTimeout(() => {
        cardImg.style.opacity = 1;
      }, 100);
    };
  } catch (err) {
    cardRemaining.textContent = "Error";
    console.log(err);
  }
};

start();
