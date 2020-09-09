const getters = {
  id: state => state.user.id,
  pwd: state => state.user.pwd,
  cookie:state=>state.user.cookie,
  routerArr:state=>state.user.routerArr,
  sidePath:state=>state.side.path
};
export default getters;
