import { View } from "./View";

import { User, UserProps } from "../models/User";

export class UserData extends View<User, UserProps> {
  template(): string {
    return `
        <div>
            <h1>User Data</h1>
            <div>User Name: ${this.model.get("name")}</div>
            <div>User Age: ${this.model.get("age")}</div>
        </div>
        `;
  }
}
