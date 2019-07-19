// 专注处理数据的工具
export default class StateUtils {
  state = {};
  constructor() {}

  // 插入
  setState = (args = {}) => {
    if (args == {}) return;
    let { getState } = this;
    let getAllState = getState();
    if (!(args instanceof Array) && args instanceof Object) {
      Object.keys(args).map(v => {
        getAllState[v] = args[v];
      });
    } else {
      console.error("传入的数据格式必须是非数组对象，例如：{a:10}！");
      return;
    }
    this.state = getAllState;
  };

  // 获取
  getState = (args = []) => {
    let { state } = this;
    if (args.length == 0) {
      return state;
    }
    if (args.length == 1) {
      return state[args[0]];
    } else {
      let empState = {};
      for (let i = 0; i < args.length; i++) {
        empState[args[i]] = state.get(args[i]);
      }
      return empState;
    }
  };

  // 异步
  // promise = req =>
  //   new Promise((resolve, reject) => {
  //     let res = req();
  //     if (res.ok) {
  //       resolve(res);
  //     } else {
  //       reject(res);
  //     }
  //   });

  // setimeout 实现异步

  lazy = ({ req = () => {}, lazyTime = 0, res = false }) => {
    const set = setTimeout(() => {
      if (res) {
        return req();
      } else {
        req();
      }
      clearTimeout(set);
    }, lazyTime);
  };

  // 更新
  useEffect = (list = {}, res = () => {}) => {};
}
