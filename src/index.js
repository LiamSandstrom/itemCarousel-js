import "./styles.css";
import { Dropdown } from "./dropdown";

const container = document.querySelector(".container");
const btn = document.querySelector(".btn");

const myDropdown = new Dropdown(btn, container);
