import { Collection } from "../models/Collection";

export abstract class CollectionView<T, K> {
  public collection: Collection<T, K>;
  public parentDiv: Element;
  constructor(collection: Collection<T, K>, parentDiv: Element) {
    this.collection = collection;
    this.parentDiv = parentDiv;
  }
  abstract renderItem(model: T, itemParent: Element): void;

  render(): void {
    this.parentDiv.innerHTML = "";
    const models = this.collection.models;
    models.forEach((model: T) => {
      this.renderItem(model, this.parentDiv);
    });
  }
}
