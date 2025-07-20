export class Dropdown {
  #btn;
  #container;
  #isVisible;

  constructor(btn, container) {
    this.#isVisible = false;

    this.#btn = btn;
    this.#container = container;
    this.#container.style.visibility = "hidden";
    this.validate(this.#btn);
    this.validate(this.#container);

    this.#btn.addEventListener("click", () => {
      this.flipVisibility();
    });
  }

  validate(element) {
    if (element instanceof HTMLElement == false) throw Error("Dropdown must be of HTML elements");
  }

  flipVisibility() {
    if (this.#isVisible) {
      this.#isVisible = false;
      this.#container.style.visibility = "hidden";
    } else {
      this.#isVisible = true;
      this.#container.style.visibility = "visible";
    }
  }
}
