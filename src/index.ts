import { User } from "./models/User";

const user = new User({ name: "Valentyn27", age: 27 });

user.save();

console.log(user);
