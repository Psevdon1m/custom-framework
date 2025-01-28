import { View } from "./View";

import { User, UserProps } from "../models/User";
import { UserForm } from "./UserForm";
import { UserData } from "./UserData";

export class UserEdit extends View<User, UserProps> {
  regionsMap(): { [key: string]: string } {
    return {
      userData: ".user-data",
      userForm: ".user-form",
    };
  }
  onRender(): void {
    new UserData(this.regions.userData, this.model).render();
    new UserForm(this.regions.userForm, this.model).render();
  }
  template(): string {
    return `
        <div class="user-data"></div>
        <div class="user-form"></div>
        `;
  }
}
