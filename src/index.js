import InitEditor from "./component/index";

new InitEditor({
  attr: {
    style: {
      height: "200px",
      background: "#666",
      border: "1px solid #000"
    },
    editName: "myEditor",
    contenteditable: "true",
    components: {
      // size,
      // family,
      Title: true
    }
  },
  root: "#root"
});
