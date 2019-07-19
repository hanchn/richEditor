import Component from "../libs/Component";
import "../css/components/title.css";

export default class Title extends Component {
  state = {};
  constructor({ root }) {
    super();
    let { setState, render } = this;
    setState({ root, className: "title" });
    render();
  }

  render = () => {
    let { initTitleComponent, createIcon, state } = this;
    let { root, className } = state;
    createIcon({ root: `.${root}`, className });
    initTitleComponent();
  };

  initTitleComponent = () => {
    let { createEl, state, lazy } = this;
    let { className } = state;
    createEl({ root: `.${className}`, attr: { class: "titleContainer" } });
    createEl({
      root: `.titleContainer`,
      attr: { class: "titleLi", html: "字号" },
      length: 5
    });
  };
}
