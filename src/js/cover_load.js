import * as domTools from './dom_tools';

export default function coverLoad() {
  const content = domTools.locateContainer();

  const cover = domTools.createElement('section', 'cover');
  content.appendChild(cover);

  const coverContent = domTools.createElement('div', 'cover__content');
  cover.appendChild(coverContent);

  const coverCard = domTools.createElement('div', 'cover__card');
  coverContent.appendChild(coverCard);

  const coverTitle = domTools.createElement('h1', 'cover__title');
  coverTitle.textContent = 'Vegan forever';
  coverCard.appendChild(coverTitle);

  const coverBody = domTools.createElement('p', 'cover__body');
  coverBody.textContent = `Serves meat, vegan options available. Thai food restaurant with 50% of dishes being
    vegan. Marked vegan dishes and options on the menu include snacks, soup, wok, curry, fried noodles and rice.
    Also serves plant based desserts and drinks. Has free Wi-Fi.`;
  coverCard.appendChild(coverBody);

  const navigation = domTools.createElement('nav', 'navigation');
  coverContent.appendChild(navigation);

  const homeNav = domTools.createElement('div', 'home-nav');
  homeNav.textContent = 'Home';
  homeNav.dataset.type = 'nav';
  homeNav.classList.add('active');
  navigation.appendChild(homeNav);

  const menuNav = domTools.createElement('div', 'menu-nav');
  menuNav.textContent = 'Menu';
  menuNav.dataset.type = 'nav';
  navigation.appendChild(menuNav);

  const contactNav = domTools.createElement('div', 'contact-nav');
  contactNav.textContent = 'Contact';
  contactNav.dataset.type = 'nav';
  navigation.appendChild(contactNav);

  const coverImage = domTools.createElement('div', 'cover__image');
  cover.appendChild(coverImage);
}
