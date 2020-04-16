import { Header } from "./components/header.js";
import { User } from "./components/user.js";
import "./scss/app.scss";

const app = async () => {
  document.getElementById("header").innerHTML = Header();
  document.getElementById("user").innerHTML = await User();
};

// Init App
app();
