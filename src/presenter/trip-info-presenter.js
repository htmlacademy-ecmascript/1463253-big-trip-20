import { render, RenderPosition } from '../render.js';
import TripInfoView from '../view/trip-info-view.js';

export default class TripInfoPresenter {
  infoComponent = new TripInfoView();

  constructor({ sortContainer }) {
    this.sortContainer = sortContainer;
  }

  init() {
    render(this.infoComponent, this.sortContainer, RenderPosition.AFTERBEGIN);
  }
}
