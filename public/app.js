const API_URLS = {
  cards: "https://api.magicthegathering.io/v1/cards",
  sets: "https://api.magicthegathering.io/v1/sets",
  types: "https://api.magicthegathering.io/v1/types",
  subtypes: "https://api.magicthegathering.io/v1/subtypes",
  supertypes: "https://api.magicthegathering.io/v1/supertypes",
  formats: "https://api.magicthegathering.io/v1/formats",
};
document.body.classList.add("bg-dark");

const cardsList = document.querySelector(".cards-list");

const getData = async (url) => {
  const data = await fetch(url).then((res) => res.json());
  return data;
};

window.onload = async () => {
  const cardsData = await getData(API_URLS.cards);
  const cards = cardsData.cards;
  cards.forEach((card) => {
    cardsList.innerHTML += `
      <div class="card mb-3 mt-3 bg-dark">
  <img src="${
    card.imageUrl
  }" class="card-img-top" alt="card-img" width="auto" height="600">
  <div class="card-body">
    <h5 class="card-title fw-bold text-center">${card.number} - ${
      card.name
    }</h5>
    <ul class="list-group">
        <li class="list-group-item bg-warning text-center"><span class="fw-bold">Artist</span> - ${
          card.artist
        }</li>
        <li class="list-group-item text-center bg-warning"><span class="fw-bold">Rarity</span> - ${
          card.rarity
        }</li>
        <li class="list-group-item text-center bg-warning"><span class="fw-bold">Set</span> - ${
          card.setName
        }</li>
        <li class="list-group-item text-center bg-warning"><span class="fw-bold">Type</span> - ${
          card.type
        }</li>
        <li class="list-group-item text-center bg-warning"><span class="fw-bold">Subtype</span> - ${
          card.subtypes != undefined ? card.subtypes[0] : "No subtype"
        }</li>
        <li class="list-group-item text-center bg-warning"><span class="fw-bold">Supertype</span> - ${
          card.supertypes != undefined ? card.supertypes[0] : "No supertype"
        }</li>
        <li class="list-group-item text-center bg-warning"><span class="fw-bold">Power</span> - ${
          card.power
        }</li>
        <li class="list-group-item text-center bg-warning"><span class="fw-bold">Toughness</span> - ${
          card.toughness
        }</li>
        <li class="list-group-item text-center bg-warning"><span class="fw-bold">Layout</span> - ${
          card.layout
        }</li>
         <li class="list-group-item text-center bg-warning"><span class="fw-bold">Text</span> - ${
           card.text
         }</li>
    </ul>
  </div> 
</div>
    `;
  });

  console.log(cards[0]);
};
