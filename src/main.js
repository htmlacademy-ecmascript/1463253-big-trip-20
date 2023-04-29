import TripInfoPresenter from './presenter/trip-info-presenter.js';
import TripPresenter from './presenter/trip-presenter.js';
import TripFiltersPresenter from './presenter/trip-filters-presenter.js';

const siteHeaderElement = document.querySelector('.page-header');
const siteMainElement = document.querySelector('.page-main');
const siteTripInfoElement = siteHeaderElement.querySelector('.trip-main');
const siteTripEventsElement = siteMainElement.querySelector('.trip-events');
const siteTripControlsElement = siteHeaderElement.querySelector('.trip-controls__filters');

const tripInfoPresenter = new TripInfoPresenter({sortContainer: siteTripInfoElement});
const tripFiltersPresenter = new TripFiltersPresenter({sortContainer: siteTripControlsElement});
const tripPresenter = new TripPresenter({sortContainer: siteTripEventsElement});

tripInfoPresenter.init();
tripFiltersPresenter.init();
tripPresenter.init();
