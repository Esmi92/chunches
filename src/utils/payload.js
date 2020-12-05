export default function(){
    const token = window.localStorage.getItem('token')
    if(token){
        const [header,payload,signature] = token.split('.')

        const base64 =payload.replace('-','+').replace('_','/')
        const payloadString = window.atob(base64)

        const payloadObj = JSON.parse(payloadString)

        return payloadObj
    }else{return null}
}