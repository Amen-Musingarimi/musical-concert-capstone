const btnOpenModal = document.querySelector('.openModal');
const btnCloseModalBtn = document.querySelector('.closeModalBtn');
const home = document.querySelector('.home-page');
const navMenu = document.querySelector('.nav-bar');
const modalMenu = document.querySelector('.menuContainer');
const navLinks = document.querySelectorAll('.menuLink');

btnOpenModal.addEventListener('click', () => {
  navMenu.classList.remove('hide');
  modalMenu.classList.remove('hide');
  home.classList.add('hide');
  modalMenu.classList.add('mobileOverlay', 'mobileMenuFlex');
  navLinks.classList.add('menuItemsMargin');
});

btnCloseModalBtn.addEventListener('click', () => {
  navMenu.classList.add('hide');
  modalMenu.classList.add('hide');
  home.classList.remove('hide');
  modalMenu.classList.remove('mobileOverlay', 'mobileMenuFlex');
  navLinks.classList.remove('menuItemsMargin');
});

for (let i = 0; i < navLinks.length; i += 1) {
  navLinks[i].addEventListener('click', () => {
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
    artistImage: 'images/jah.jpg',
    artistName: 'Jah Prayzah',
    bio: 'Award winning Zimbabwean artist',
    description: `Mukudzeyi Mukombe, better known as Jah Prayzah, is a Zimbabwean
    contemporary musician and lead member of the band Third
    Generation.`,
  },
  {
    id: 2,
    artistImage: 'images/knoso2.jpg',
    artistName: 'Nkosazana Daughter',
    bio: 'A fine South African Amapiano star ',
    description:
      'She has been on the music leaderboard since 2022 with hits such as; Sofa Silahlane and Kuwe',
  },
  {
    id: 3,
    artistImage: 'images/burna2.jpg',
    artistName: 'Burna Boy',
    bio: 'Known as the African Giant',
    description:
      'He rose to stardom in 2012 after releasing, Like to Party. Ever since he has been topping the music chats',
  },
  {
    id: 4,
    artistImage: 'images/winky.jpg',
    artistName: 'Winky D',
    bio: 'One of the finnest Zimbabwean artists',
    description:
      'A Zimbabwean reggae-dancehall artist, known for his hits such as Green Like Me Garden and Mugarden',
  },
  {
    id: 5,
    artistImage: 'images/sauti.jpg',
    artistName: 'Sauti Sol',
    bio: 'A fine group from Nairobi, Kenya',
    description:
      'Sauti Sol is a Kenyan band formed in Nairobi, Kenya, by vocalists Bien-Aime Baraza, Willis Chimano and Savara Mudigi',
  },
  {
    id: 6,
    artistImage: 'images/ross.jpg',
    artistName: 'Ricky Ross',
    bio: 'Our main guest from USA',
    description:
      'William Leonard Roberts II, known professionally as Rick Ross, is an American rapper, record executive, and former athlete',
  },
];

const artistsCards = document.querySelector('.artistsCards');

for (let i = 0; i < artistsArray.length; i += 1) {
  const fetch = document.querySelector('.artistsCards').innerHTML;
  artistsCards.innerHTML =
    `
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
  ` + fetch;
}
