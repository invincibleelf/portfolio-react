import { Component } from "react";
import { FaLeaf } from "react-icons/fa";
import { whatCanIDo} from "../../portfolio";

export default class CanDo extends Component {

    render() {

        var list = whatCanIDo.list.map((item,index)=> {
             return <li key={index}><FaLeaf style={{color:'green',paddingRight:'5px'}}></FaLeaf>{item}</li>
        }
        )
        
        return (
            <div className="cando-sec">
                <div className="title">{whatCanIDo.title}</div>
                <p>{whatCanIDo.summary}</p>
                <ul>
                    {list}
                </ul>
                
            </div>
        );
    }
}