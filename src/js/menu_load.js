import * as domTools from './dom_tools.js';

const menuItems = [
  {
    title: 'Butternut Mole Enchiladas',
    body: 'A delicious meal based on the popular Mexican Enchiladas',
    image: '\./src/images/butternut-mole-enchiladas-1594659122.jpg'
  },
  {
    title: 'Greek Chiken Wings',
    body: 'Fried chicken wings with delicious Greek salad',
    image: '\./src/images/ghk080116ykfeature02-1567609381.png'
  },
  {
    title: 'Swedish Salmon Salad',
    body: 'The best Swedish quality salmon with cooked green beans',
    image: '\./src/images/low-calorie-meals-1556302866.png'
  },
  {
    title: 'Spring Salad',
    body: 'Vegan fresh green salad with cucumber and corn',
    image: '\./src/images/spring-salad-recipe-with-apricot-vinaigrette-1611256040.jpg'
  },
  {
    title: 'Heirloom Tomato Salad',
    body: 'A variety of tomatoes and peppers in one spicy salad',
    image: '\./src/images/heirloom-tomato-salad-lead-1589406257.jpg'
  },
  {
    title: 'Vegan Strawberry Cookies',
    body: 'Your classic strawberry cookies but 100% vegan',
    image: '\./src/images/strawberry-oatmeal-cookies-1609276240.jpg'
  }
]

function menuCard(container, menuItem) {
  const div = domTools.createElement('div', 'col-12 col-md-6 col-xl-4');
  container.appendChild(div);

  const menuCard = domTools.createElement('div', 'menu__card');
  div.appendChild(menuCard);

  const menuImage = domTools.createElement('img', 'menu__image');
  menuImage.setAttribute('src', menuItem.image);
  menuCard.appendChild(menuImage);

  const menuContent = domTools.createElement('div', 'menu__content');
  menuCard.appendChild(menuContent);

  const menuTitle = domTools.createElement('h3', 'menu__title');
  menuTitle.textContent = menuItem.title;
  menuContent.appendChild(menuTitle);

  const menuBody = domTools.createElement('p', 'menu__body');
  menuBody.textContent = menuItem.body;
  menuContent.appendChild(menuBody);
}

export default function menuLoad() {
  const content = domTools.locateContainer();

  const menuSection = domTools.createElement('section', 'menu-section');
  menuSection.dataset.toggle = 'menu-nav';
  content.appendChild(menuSection);

  const menuMainTitle = domTools.createElement('h2', 'menu__main-title');
  menuMainTitle.textContent = 'Our Menu';
  menuSection.appendChild(menuMainTitle);

  const menu = domTools.createElement('div', 'menu row g-5');
  menuSection.appendChild(menu);
  
  menuItems.forEach(element => {
    menuCard(menu, element);
  });
}

