import {$} from "@core/dom";

export class Excel {
  constructor(selector, options) {
    this.$el = document.querySelector(selector)
    this.components = options.components || []
  }

  getRoot() {
    $.create()
    const $root = $.create("div", "excel");

    this.components.forEach(Component => {
      // const $el = document.createElement("div");
      // $el.classList.add(Component.className);
      const $el = $.create("div", Component.className)
      const component = new Component($el);
      $el.innerHTML = component.toHTML();
      // $root.insertAdjacentHTML('beforeend', component.toHTML());
      $root.append($el);
    })

    return $root;
  }

  render() {
    // console.log("$el", this.$el)
    // this.$el.insertAdjacentElement("afterbegin", "<h1>test</h1>");
    // const node = document.createElement("h1");
    // node.textContent = 'TEST';
    this.$el.append(this.getRoot());
  }
}