export class Section {
  constructor({ items, renderer }, selectorCSS) {
    this._items = items;
    this._renderer = renderer;
    this._selectorCSS = selectorCSS;
  }

  renderItems() {
    this._items.forEach((item) => this._renderer(item));
  }

  addItem(element) {
    this._selectorCSS.append(element);
  }
}
