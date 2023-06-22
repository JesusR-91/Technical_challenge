import service from "./config.services";

const allPhonesService = () =>{
    return service.get("/phones")
}

const onePhoneService = (phoneId) =>{
    return service.get(`/phones/${phoneId}`)
}
export {allPhonesService, onePhoneService}