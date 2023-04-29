import { render, RenderPosition } from '../render.js';
import TripFiltersListView from '../view/trip-filters-list-view.js';

export default class TripFiltersPresenter {
  filterComponent = new TripFiltersListView();

  constructor({ sortContainer }) {
    this.sortContainer = sortContainer;
  }

  init() {
    render(this.filterComponent, this.sortContainer, RenderPosition.BEFOREEND);
  }
}
