import Component from "../libs/Component";
import InitEditComponents from "./InitEditComponents";
import "../css/editor.css";

export default class InitEditor extends Component {
  state = {};

  constructor({
    attr = {
      editName: "myEditor",
      contenteditable: "true",
      style: {},
      components: {}
    },
    root = "body",
    theme = "default"
  }) {
    super();
    let { render, setState } = this;
    let { editName, contenteditable, style, components } = attr;
    setState({
      attr: {
        editName,
        contenteditable,
        style
      },
      editName,
      root,
      components,
      theme
    });
    render();
  }

  render = () => {
    let { initEditor } = this;
    initEditor();
    window.onload = () => {
      this.state.rootDom.css({ display: "block" });
    };
  };

  // 初始化一个富文本
  initEditor = () => {
    let { setState, state, createEl, $ } = this;
    let { attr, root, components, editName, theme } = state;
    let rootDom = $(root);
    rootDom.addClass(`editorTheme ${theme}`);
    setState({
      rootDom: rootDom.css({ display: "none" })
    });
    // 初始化组件
    if (components !== {})
      new InitEditComponents({ root, editName, components });
    createEl({ attr, root });
  };
}
