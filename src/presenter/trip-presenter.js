import { render, RenderPosition } from '../render.js';
import TripSortListView from '../view/trip-sort-list-view.js';
import TripPointsListView from '../view/trip-points-list-view.js';
import TripPointItemView from '../view/trip-point-item-view.js';
import TripEditPointView from '../view/trip-edit-new-point-view.js';

export default class TripPresenter {
  sortComponent = new TripSortListView();
  listComponent = new TripPointsListView();
  editFormComponent = new TripEditPointView();

  constructor({ sortContainer }) {
    this.sortContainer = sortContainer;
  }

  init() {
    render(this.sortComponent, this.sortContainer, RenderPosition.AFTERBEGIN);
    render(this.listComponent, this.sortContainer, RenderPosition.BEFOREEND);
    render(this.editFormComponent, this.listComponent.getElement());
    for (let i = 0; i < 3; i++) {
      render(new TripPointItemView(), this.listComponent.getElement());
    }
  }
}
