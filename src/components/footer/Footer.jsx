import React,{ Component  } from "react";
import { FaRegHeart } from "react-icons/fa";
import { introduction } from "../../portfolio";

export default class Footer extends Component{
  
    render(){
        return(
            <footer>
                <div>Developed by {introduction.name}</div>
            </footer>
        )
    }
}