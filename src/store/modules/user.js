import jsCookie from "js-cookie";
import { getPetId } from "../../api/user";
// import {getPetId} from '../../api/user'
let state = {
  id: "skse",
  pwd: "silver",
  routerArr: [],
  cookie: jsCookie.get("token"),
};

let mutations = {
  setRouterArr(state, arr) {
    arr.map((val) => {
      if (!val.hidden) return;
      if (val.alwaysShow && val.hidden) {
        state.routerArr.push(val.children[0]);
        return;
      }
      state.routerArr.push(val);
    });
  },
  setCookie(state, val) {
    state.cookie = val;
    jsCookie.set("token", val);
  },
};

let actions = {
  login() {
    return new Promise((resolve, rej) => {
      getPetId("sold")
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          rej(err);
        });
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
