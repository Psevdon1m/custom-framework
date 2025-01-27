import { User } from "./models/User";

const user = new User({ id: "7e53", name: "Val 22", age: 29 });

user.on("save", () => {
  console.log(user);
});

user.save();
