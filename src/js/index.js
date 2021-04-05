import '../css/styles.scss';
import coverLoad from './cover_load';
import homeLoad from './home_load';
import menuLoad from './menu_load';
import contactLoad from './contact_load';
import * as domTools from './dom_tools';

coverLoad();
homeLoad();
domTools.addEvent('home-nav', domTools.showSection);
menuLoad();
domTools.addEvent('menu-nav', domTools.showSection);
contactLoad();
domTools.addEvent('contact-nav', domTools.showSection);
