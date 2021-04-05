import * as domTools from './dom_tools';

export default function homeLoad() {
  const content = domTools.locateContainer();

  const home = domTools.createElement('section', 'home');
  home.dataset.toggle = 'home-nav';
  home.classList.add('show');
  content.appendChild(home);

  const homeTitle = domTools.createElement('h2', 'home__title');
  homeTitle.textContent = 'About us';
  home.appendChild(homeTitle);

  const homeBody = domTools.createElement('p', 'home__body');
  homeBody.textContent = `Our restaurant is the best restaurant you can find in California for vegan people.
  We have all types of vegan food and you will be very pleased and healthier when eating here.`;
  home.appendChild(homeBody);

  const homeImage = domTools.createElement('div', 'home__image');
  home.appendChild(homeImage);
}
