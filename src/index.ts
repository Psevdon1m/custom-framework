import { User } from "./models/User";
import { UserEdit } from "./views/UserEdit";
import { UserList } from "./views/UserList";

const root = document.getElementById("root");
if (!root) throw new Error("Root element not found");

const userListEl = document.getElementById("user-list");
if (!userListEl) throw new Error("User list element not found");

const user = User.buildUser({ name: "NAME", age: 20 });
const collection = User.buildUserCollection();
const userList = new UserList(collection, userListEl);
userList.collection.fetch();

collection.on("change", () => {
  userList.render();
});

console.log(userList);

const userEdit = new UserEdit(root, user);
userEdit.render();

console.log(userEdit);
