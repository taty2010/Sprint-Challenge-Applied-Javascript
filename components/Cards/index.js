// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

    function createCard (item){
        const card = document.createElement('div');
        const headline = document.createElement('div');
        const author = document.createElement('div')
        const imgContainer = document.createElement('div');
        const img = document.createElement('img');
        const name = document.createElement('span');

        card.appendChild(headline);
        card.appendChild(author);
        author.appendChild(imgContainer);
        imgContainer.appendChild(img);
        author.appendChild(name);

        card.classList.add('card');
        headline.classList.add('headline');
        author.classList.add('author');
        imgContainer.classList.add('img-container');
    
        headline.textContent = item.headline;
        name.textContent = item.authorName;
        img.arc = item.authorPhoto;

        return card

    }

   const cardContainer = document.querySelector('.cards-container');
  // cardContainer.appendChild(createCard())

   axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((item) => {
        console.log(item.data);
        item.data.articles.bootstrap.forEach(item => {
            newCard = createCard(item);
            cardContainer.appendChild(newCard);
          });
          item.data.articles.javascript.forEach(item => {
            newCard = createCard(item);
            cardContainer.appendChild(newCard);
          });
          item.data.articles.technology.forEach(item => {
            newCard = createCard(item);
            cardContainer.appendChild(newCard);
          });
          item.data.articles.jquery.forEach(item => {
            newCard = createCard(item);
            cardContainer.appendChild(newCard);
          });
          item.data.articles.node.forEach(item => {
            newCard = createCard(item);
            cardContainer.appendChild(newCard);
          });
            //const create = createCard(item);
            //cardContainer.appendChild(create)
    })
    .catch( error => {
        console.log("Error:");
    })