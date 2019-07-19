import QueryUtils from "../utils/QueryUtils";

export default class Component extends QueryUtils {
  constructor() {
    super();
  }

  createIcon = ({ root, className }) => {
    let { createEl, $ } = this;
    createEl({ root, attr: { class: className + " editIcon" } });
  };
  // 处理选中
}
