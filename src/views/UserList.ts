import { CollectionView } from "./CollectionView";
import { User, UserProps } from "../models/User";

export class UserList extends CollectionView<User, UserProps> {
  renderItem(model: User, parentElement: Element): void {
    const childHtml = `
    <li>
    <div>User Name: ${model.get("name")}</div>
    <div>User Age: ${model.get("age")}</div>
    </li>
    `;
    const template = document.createElement("template");
    template.innerHTML = childHtml;
    parentElement.append(template.content);
  }
}
