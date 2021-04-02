import '../css/styles.scss';
import coverLoad from './cover_load.js';
import homeLoad from './home_load.js';
import menuLoad from './menu_load.js';
import contactLoad from './contact_load.js';
import * as domTools from './dom_tools.js';

coverLoad();
homeLoad();
domTools.addEvent('home-nav', domTools.showSection);
menuLoad();
domTools.addEvent('menu-nav', domTools.showSection);
contactLoad();
domTools.addEvent('contact-nav', domTools.showSection);