import {get} from '../utils/request'

export const getPetId=(param)=>get(`https://petstore.swagger.io/v2/pet/findByStatus`,{status:param})


