import * as domTools from './dom_tools.js';

export default function pageLoad() {
  const content = domTools.locateContainer();

  const cover = domTools.createElement('section', 'cover');
  content.appendChild(cover);

  const coverCard = domTools.createElement('div', 'cover__card');
  cover.appendChild(coverCard);

  const coverTitle = domTools.createElement('h1', 'cover__title');
  coverTitle.textContent = 'Vegan forever';
  coverCard.appendChild(coverTitle);

  const coverBody = domTools.createElement('p', 'cover__body');
  coverBody.textContent = `Serves meat, vegan options available. Thai food restaurant with 50% of dishes being
    vegan. Marked vegan dishes and options on the menu include snacks, soup, wok, curry, fried noodles and rice.
    Also serves plant based desserts and drinks. Has free Wi-Fi.`;
  coverCard.appendChild(coverBody);

  const coverImage = domTools.createElement('div', 'cover__image');
  cover.appendChild(coverImage);
}

