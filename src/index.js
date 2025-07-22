import "./styles.css";
import { itemCarousel } from "./itemCarousel";
import bimg from "./Bellion.jpg"
import timg  from "./Test.jpeg"


const div = document.createElement("div")
for(let i = 0; i < 3; i++){
    const img = document.createElement("img")
    img.src = bimg;
    div.appendChild(img)
}

const test = new itemCarousel(div, {width : "300px", height : "500px", });
document.body.appendChild(test.getElement())

