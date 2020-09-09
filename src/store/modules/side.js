let state = {
  path: {
      time:"",
      val:""
  }
};
let mutations = {
  setPath(state, val) {
      if(!val){
          state.side=val
          return;
      }
      let time=new Date().getTime()
      let reg=/^\//
      if(reg.test(val)){
          state.path={
              time,
              val
          }
      }else{
          state.path={
              time,
              val:"/"+val
          }
      }

  },
};
let actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
