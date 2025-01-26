import { User } from "./models/User";

const user = new User({ name: "Valentyn27", age: 27 });

user.save();

user.events.on("click", () => {
  console.log("clicked");
});

user.events.trigger("click");
