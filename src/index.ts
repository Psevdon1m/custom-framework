import { User } from "./models/User";
import { UserForm } from "./views/UserForm";

const root = document.getElementById("root");
if (!root) throw new Error("Root element not found");

const user = User.buildUser({ name: "NAME", age: 20 });
const userForm = new UserForm(root, user);
userForm.render();
