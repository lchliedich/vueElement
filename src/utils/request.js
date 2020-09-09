import axios from 'axios'

//  axios.defaults.baseURL=""

axios.interceptors.request.use(
  config=>{
      return config
  },
  err=>{
      return err
  }
)

axios.interceptors.response.use(
    response=>{
        return response
    },
    err=>{
        return err
    }
)


function get(url,param){
     return new Promise((resolve,reject)=>{
          axios.get(url,{param:param})
          .then(res=>{
              resolve(res)
          })
          .catch(err=>{
              reject(err)
          })
     })
}

function post(url,param){
    return new Promise((resolve,reject)=>{
        axios.post(url,param)
        .then(res=>{
            resolve(res)
        })
        .catch(err=>{
            reject(err)
        })
   })
}

export  {
    get,
    post
    
}