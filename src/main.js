import { createSiteTripInfoTemplate } from './view/trip-info';
import { createSiteMenuTemplate } from './view/menu';
import { createSiteFilterTemplate } from './view/filter';
import { createSiteSortTemplate } from './view/sort';
import { createSiteAddNewPointTemplate } from './view/add-point';
import { createSiteEditPointTemplate } from './view/edit-point';
import { createSitePointTemplate } from './view/point-item';

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeader = document.querySelector('.page-header');
const siteHeaderMain = siteHeader.querySelector('.trip-main');
const siteNav = siteHeaderMain.querySelector('.trip-controls__navigation');
const siteFilter = siteHeaderMain.querySelector('.trip-controls__filters');
const siteMain = document.querySelector('.page-main');
const tripEvents = siteMain.querySelector('.trip-events');

render(siteHeaderMain, createSiteTripInfoTemplate(), 'afterbegin');
render(siteNav, createSiteMenuTemplate(), 'beforeend');
render(siteFilter, createSiteFilterTemplate(), 'beforeend');
render(tripEvents, createSiteSortTemplate(), 'beforeend');
render(tripEvents, createSiteEditPointTemplate(), 'beforeend');
const list = tripEvents.querySelector('.trip-events__list');
for(let i = 0; i < 3; i++) {
  render(list, createSitePointTemplate(), 'beforeend');
}
render(list, createSiteAddNewPointTemplate(), 'beforeend');
