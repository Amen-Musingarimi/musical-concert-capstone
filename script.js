const btnOpenModal = document.querySelector('.openModal');
const btnCloseModalBtn = document.querySelector('.closeModalBtn');
const home = document.querySelector('.home-page');
const navMenu = document.querySelector('.nav-bar');
const modalMenu = document.querySelector('.menuContainer');
const navLinks = document.querySelectorAll('.menuLink');
const body = document.querySelector('.body');

btnOpenModal.addEventListener('click', () => {
  body.classList.add('noScroll');
  navMenu.classList.remove('hide');
  modalMenu.classList.remove('hide');
  home.classList.add('hide');
  modalMenu.classList.add('mobileOverlay', 'mobileMenuFlex');
  navLinks.classList.add('menuItemsMargin');
});

btnCloseModalBtn.addEventListener('click', () => {
  body.classList.remove('noScroll');
  navMenu.classList.add('hide');
  modalMenu.classList.add('hide');
  home.classList.remove('hide');
  modalMenu.classList.remove('mobileOverlay', 'mobileMenuFlex');
  navLinks.classList.remove('menuItemsMargin');
});

for (let i = 0; i < navLinks.length; i += 1) {
  navLinks[i].addEventListener('click', () => {
    body.classList.remove('noScroll');
    navMenu.classList.add('hide');
    modalMenu.classList.add('hide');
    home.classList.remove('hide');
    modalMenu.classList.remove('mobileOverlay', 'mobileMenuFlex');
    navLinks.classList.remove('menuItemsMargin');
  });
}

// --------------------Creating Artist Section Objects------------------
const artistsArray = [
  {
    id: 1,
    artistImage: 'images/jah.png',
    artistName: 'Jah Prayzah',
    bio: 'Award winning Zimbabwean artist',
    description: `Mukudzeyi Mukombe, better known as Jah Prayzah, is a Zimbabwean
    fine musician.`,
  },
  {
    id: 2,
    artistImage: 'images/knoso2.png',
    artistName: 'Nkosazana Daughter',
    bio: 'A fine South African Amapiano star ',
    description:
      'She has been on top of the game since 2022 with hits such as; Sofa Silahlane and Kuwe',
  },
  {
    id: 3,
    artistImage: 'images/burna2.png',
    artistName: 'Burna Boy',
    bio: 'Known as the African Giant',
    description:
      'He rose to stardom in 2012 after releasing, Like to Party. Ever since he has been topping the music chats',
  },
  {
    id: 4,
    artistImage: 'images/winky.png',
    artistName: 'Winky D',
    bio: 'One of the finnest Zimbabwean artists',
    description:
      'A dancehall artist, known for his hits such as Green Like Me Garden and Mugarden',
  },
  {
    id: 5,
    artistImage: 'images/sauti.png',
    artistName: 'Sauti Sol',
    bio: 'A fine group from Nairobi, Kenya',
    description:
      'Sauti Sol is a Kenyan band formed in Nairobi, Kenya, by three vocalists.',
  },
  {
    id: 6,
    artistImage: 'images/ross.png',
    artistName: 'Ricky Ross',
    bio: 'Our main guest from USA',
    description:
      'Rick Ross, is an American rapper, record executive, and former athlete',
  },
];

const artistsCards = document.querySelector('.artistsCards');
if (window.innerWidth >= 768) {
  for (let i = 0; i < artistsArray.length; i += 1) {
    const fetch = document.querySelector('.artistsCards').innerHTML;
    artistsCards.innerHTML = `
  <article class="artist">
            <img
              src=${artistsArray[i].artistImage}
              alt="Picture of Jah Prayzah perfoming live"
              class="artistImage"
            />
            <div class="artistTextContent">
              <h3 class="artistName">${artistsArray[i].artistName}</h3>
              <p class="artistBio">${artistsArray[i].bio}</p>
              <hr class="artistHr" />
              <p class="artistDescription">${artistsArray[i].description}</p>
            </div>
          </article>
  ${fetch}`;
  }
} else {
  for (let i = 0; i < 2; i += 1) {
    const fetch = document.querySelector('.artistsCards').innerHTML;
    artistsCards.innerHTML = `
  <article class="artist">
            <img
              src=${artistsArray[i].artistImage}
              alt="Picture of Jah Prayzah perfoming live"
              class="artistImage"
            />
            <div class="artistTextContent">
              <h3 class="artistName">${artistsArray[i].artistName}</h3>
              <p class="artistBio">${artistsArray[i].bio}</p>
              <hr class="artistHr" />
              <p class="artistDescription">${artistsArray[i].description}</p>
            </div>
          </article>
  ${fetch}`;
  }
}

const seeMoreArtistBtn = document.querySelector('.moreArtistsLink');
const seeLessArtistBtn = document.querySelector('.lessArtistsLink');
seeMoreArtistBtn.addEventListener('click', () => {
  seeMoreArtistBtn.classList.add('hide');
  seeLessArtistBtn.classList.remove('hide');
  for (let i = 2; i < artistsArray.length; i += 1) {
    const fetch = document.querySelector('.artistsCards').innerHTML;
    artistsCards.innerHTML = `
  <article class="artist">
            <img
              src=${artistsArray[i].artistImage}
              alt="Picture of Jah Prayzah perfoming live"
              class="artistImage"
            />
            <div class="artistTextContent">
              <h3 class="artistName">${artistsArray[i].artistName}</h3>
              <p class="artistBio">${artistsArray[i].bio}</p>
              <hr class="artistHr" />
              <p class="artistDescription">${artistsArray[i].description}</p>
            </div>
          </article>
  ${fetch}`;
  }
});

seeLessArtistBtn.addEventListener('click', () => {
  seeMoreArtistBtn.classList.remove('hide');
  seeLessArtistBtn.classList.add('hide');
  artistsCards.innerHTML = '';
  for (let i = 0; i < 2; i += 1) {
    const fetch = document.querySelector('.artistsCards').innerHTML;
    artistsCards.innerHTML = `
  <article class="artist">
            <img
              src=${artistsArray[i].artistImage}
              alt="Picture of Jah Prayzah perfoming live"
              class="artistImage"
            />
            <div class="artistTextContent">
              <h3 class="artistName">${artistsArray[i].artistName}</h3>
              <p class="artistBio">${artistsArray[i].bio}</p>
              <hr class="artistHr" />
              <p class="artistDescription">${artistsArray[i].description}</p>
            </div>
          </article>
  ${fetch}`;
  }
});
