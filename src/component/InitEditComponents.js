import Component from "../libs/Component";
import Title from "./Title";

export default class InitEditComponents extends Component {
  constructor({ root, editName, components }) {
    super();
    let { setState, render } = this;
    setState({
      root,
      editName,
      components,
      editComponents: `${editName}Container`,
      editName
    });
    render();
  }

  render = () => {
    let { createContainer, batchInstantiation, state } = this;
    let { components } = state;
    createContainer();
    batchInstantiation(components);
  };

  createContainer = () => {
    let { state, createEl, setState, $ } = this;
    let { root, editComponents } = state;
    createEl({
      attr: {
        class: `${
          editComponents == "editComponents"
            ? editComponents
            : editComponents + " " + "editComponents"
        }`
      },
      root
    });
    // setState({
    //   editComponentsDom: $(`.${editComponents}`)
    // });
  };

  batchInstantiation = (list = {}) => {
    if (list == {}) return;
    let { state } = this;
    let { editName } = state;
    let root = `${editName}Container`;
    Object.keys(list).map(v => {
      if (list[v]) {
        switch (v) {
          case "Title":
            return new Title({ root });
          default:
            return;
        }
      }
    });
  };
}
