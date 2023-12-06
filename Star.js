export default class Star {
  constructor(i) {
    this.element = document.createElement("div");
    this.element.classList.add("star");
    this.element.innerHTML = i;
    // element.style.cssText = `left: ${x}px; top:${y}px; transform: scale(${scale})`;
    // element.style.left = `${x}px;`;
    // element.style.top = `${y}px`;
    // element.style.transform = `scale(${scale})`;
    document.body.append(this.element);
  }
}
