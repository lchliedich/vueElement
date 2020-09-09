import Home from "../views/Home.vue";
const userlist = [
  {
    path: "/",
    redirect: "/home/index",
  },
  {
  path:"/redirect*",
  component:Home,
  children:[
     {
       path:'',
       name:"redirect/index",
       component:()=>import("../components/redirect")
     }
  ]
  },
  {
    hidden:true,
   path:"/Mock",
   name:"Mock",
   component:Home,
   alwaysShow:true,
   children:[
          {
        path:"index",
        name:"/Mock/index",
        meta:{title:"Mock",icon:"el-icon-s-home"},
        component:()=>import("../components/mock/mock")
          }
   ]
  },


  
  {
    hidden:true,
    path: "/home",
    name: "home",
    component: Home,
    redirect:"/home/index",
    alwaysShow:true,
    children: [
      {
        path: "index",
        name: "/home/index",
        meta: { title: "首页", icon: "el-icon-s-home"},
        component: () => import("../components/games"),
      },
    ],
  },
  {
    hidden:true,
    path: "/language",
    name: "language",
    component: Home,
    alwaysShow:true,
    redirect:"/language/index",
    children: [
      {
        path: "index",
        name: "/language/index",
        meta: { title: "国际化", icon: "el-icon-s-home"},
        component: () => import("../components/language"),
      },
    ],
  },
  {
    hidden:true,
    alwaysShow:true,
   path:"/zip",
   name:"zip",
   component:Home,
   redirect:"/zip/index",
   children:[
     {
       path:'index',
       name:'/zip/index',
       meta:{title:"zip",icon:"el-icon-s-home"},
      component:()=>import("../components/zip")

     }
   ]
  },
  {
  hidden:true,
  path:"/excel",
  name:"excel",
  meta:{title:"Excel",icon:"el-icon-s-home",menu:true},
  component:Home,
  redirect:'/excel/index',
  children:[
    {
      path:"index",
      name:'index',
      meta:{title:"导出 Excel"},
      component:()=>import("../components/excel/excel")
    },
    {
      path:"excelSelect",
      name:"excelSelect",
      meta:{title:"导出 已选择项"},
      component:()=>import("../components/excel/excelSelect")
    },
    {
      path:"excelMul",
      name:"excelMul",
      meta:{title:"导出 多级表头"},
      component:()=>import("../components/excel/excelMul")
    },
    {
      path:"excelUploading",
      name:"excelUploading",
      meta:{title:"上传 Excel"},
      component:()=>import("../components/excel/excelUploading")
    }
  ]
  },
  {
    hidden:true,
    path:"/table",
    name:"table",
    meta:{title:"table",icon: "el-icon-s-home",menu:true},
    component:Home,
    redirect:"/table/index",
    children:[
      {
        path:"index",
        name:"index",
        meta:{title:"动态表格"},
        component:()=>import("../components/table/dytable")
      },
      {
        path:"drag",
        name:"drag",
        meta:{title:"拖拽表格"},
        component:()=>import("../components/table/drag")
      },
      {
        path:"editable",
        name:"editable",
        meta:{title:"table 内编辑"},
        component:()=>import("../components/table/editTable")
      }
    ]
  },
 



  {
    hidden:true,
    path: "/cycle",
    name: "cycle",
    meta: { title: "循环", icon: "el-icon-s-promotion",menu:true},
    component: Home,
    redirect: "/cycle/c",
    children: [
      {
        path: "c",
        name: "c",
        meta: { title: "c" },
        component: () => import("../components/cycle/components/c"),
      },
      {
        path: "components",
        name: "components",
        meta: { title: "components" ,noClick:true,menu:true},
        component: () => import("../components/cycle/components"),

        redirect: "components/a",
        children: [
          {
            path: "a",
            name: "a",
            meta: { title: "a" },
            component: () => import("../components/cycle/components/a"),
          },
          {
            path: "b",
            name: "b",
            meta: { title: "b" },
            component: () => import("../components/cycle/components/b"),
          },
        ],
      },
    ],
  },

  {
    path: "/login",
    name: "login",
    component: () => import("../views/login"),
  },
  {
    path: "/404",
    component: () => import("../views/noExist"),
  },
  {
    path: "*",
    redirect: "/404",
  },
];

export default userlist;
