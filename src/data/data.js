import json from './data.json'
const getProcucts = () => {
    return new Promise( (resolve, reject) => {
    //simulamos un retraso de red
    setTimeout(()=>{
        resolve(json)
    },3000);
    })
}
export default getProcucts