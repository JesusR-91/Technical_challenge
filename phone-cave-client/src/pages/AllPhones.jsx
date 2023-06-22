//IMPORTS
import { useEffect, useState } from "react"
import { allPhonesService } from "../services/phones.services";
import { Link } from "react-router-dom";
import { PuffLoader } from "react-spinners";



export default function AllPhones() {

    //Variables
    const [allPhones, setAllPhones] = useState();

    //FUNCTIONS

    const getData = async () =>{
        try {    
            const response = await allPhonesService();
            setAllPhones (response.data); 
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() =>{getData()}, [])
  return allPhones ? (
    <div style={{backgroundColor:"white", padding:"100px"}}>
        <h3>All phones:</h3>
        <div style={{textDecoration:"none"}}> 
            {allPhones.map(phone => (
                <p key={phone.id}><Link to={`/${phone.id}`}>{phone.name}</Link></p>
            ))}
        </div>
    </div>
  ) : (<div className="spinners">
        <PuffLoader color="white" size={120} />
    </div>)
}
