## 这是一个超文编辑器

基于原生实现的一个超文本编辑器

### 引用

通过实例化引用

```
new InitEditor({
  attr: { // 配置编辑器属性
    style: { width: "600px", height: "300px", border: "1px solid #000" },
    editName: "myEditor",  // 编辑器绑定id 或者 类 （可缺省）
    contenteditable: "true", // 是否可编辑
    components: {  // 开启组件
      size,
      family,
      h
    }
  },
  root: "#root",  // 绑定的根组件
  theme: "black"  // 编辑器主题
});

```

### 功能点

1. 文本输入
2.
