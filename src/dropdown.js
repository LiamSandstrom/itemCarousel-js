export class Dropdown {
  #btn;
  #container;

  constructor(btn, container) {
    this.#btn = btn;
    this.#container = container;
    this.validate(this.#btn);
    this.validate(this.#container);

    this.#btn.addEventListener("click", () => {
      this.toggleVisibility();
    });
    this.setHidden();
  }

  validate(element) {
    if (element instanceof HTMLElement == false)
      throw Error(element + " must be of HTML elements");
  }

  toggleVisibility() {
    const isVisible = this.#container.style.visibility === "visible";
    this.#container.style.visibility = isVisible ? "hidden" : "visible";
  }

  setHidden(){
    this.#container.style.visibility = "hidden";
  }
}
