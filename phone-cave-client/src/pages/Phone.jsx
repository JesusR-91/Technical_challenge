//Imports
import { useEffect, useState } from "react";
import { onePhoneService } from "../services/phones.services";
import { useParams } from "react-router-dom";

import { Card } from "react-bootstrap";
import { PuffLoader } from "react-spinners";


//Images
import galaxy from "../assets/Galaxy_S7.png";
import honor from "../assets/Honor_10.png";
import iphone from "../assets/IPhone_7.png";
import moto from "../assets/Moto_G6.png";
import nokia from "../assets/Nokia_7.1.jpg";
import p10 from "../assets/P10_Lite.jpg";
import xiaomi from "../assets/Xiaomi_MI_A2.jpeg";
import zen from "../assets/ZenPhone_5.jpg";



export default function Phone() {
    //Variables
    const [phone, setPhone] = useState();
    const [image, setImage] = useState();
    const [Loading, setLoading] = useState(true);

    const {phoneId} = useParams();


    
    //Functions
    const getData = async () =>{
        try {
            const response = await onePhoneService(phoneId);
            setPhone(response.data);
            console.log(response.data)
            switch(response.data.imageFileName){
                case "Galaxy_S7.png":
                    setImage(galaxy);
                    break;
                case "Honor_10.png":
                    setImage(honor);
                    break;
                case "IPhone_7.png":
                    setImage(iphone);
                    break;
                case "Moto_G6.png":
                    setImage(moto);
                    break;
                case "Nokia_7.1.jpg":
                    setImage(nokia);
                    break;
                case "P10_Lite.jpg":
                    setImage(p10);
                    break;
                case "Xiaomi_MI_A2.jpeg":
                    setImage(xiaomi);
                    break;
                case "ZenPhone_5.jpg":
                    setImage(zen);
                    break;
                }
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(()=>{getData()}, [])

  return !Loading ? (
    <Card style={{width:"500px", display:"flex", flexDirection:"column", backgroundColor:"white", padding:"30px", justifyContent:"center", alignItems:"center", borderRadius:"10px", textAlign:"left"}}>
        <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"flex-start", marginRight:"125px"}}>
            <img src = {image} alt="phone-img" style={{width:"300px"}} />
            <h4>{phone.name}</h4>
        </div>
        <p><b>Description:</b> {phone.description}</p>
        
        <div style={{display:"flex", flexDirection:"column", gap:"10px", height:"200",width:"300px", alignItems:"flex-start", justifyContent:"center", backgroundColor:"lightgray", padding:"30px", flexWrap:"wrap", borderRadius:"10px"}}>
            <h4>Technical details:</h4>
            <div style={{paddingLeft:"50px"}}>
                <p><b>Made by:</b> {phone.manufacturer}</p>
                <p><b>Screen:</b> {phone.screen}</p>
                <p><b>Processor:</b> {phone.processor}</p>
                <p><b>Ram:</b> {phone.ram}</p>
                <p><b>Color:</b> {phone.color}</p>
            </div>
        </div>

        <p style={{width:"500px"}}><b>Price:</b> {phone.price} $</p>
    </Card>
  ) : (<div className="spinners">
        <PuffLoader color="white" size={120} />
    </div>)
}
