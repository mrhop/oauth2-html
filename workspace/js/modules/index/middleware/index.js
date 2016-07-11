//export  {default as dashBoard }  from './dashBoard'
// for prepare to the default call, special parameters
import dashBoard from './dashBoard'

export default [].concat(dashBoard, MiddleWare.defaultCall);  