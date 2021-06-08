import { Component } from "react";
import { whatCanIDo} from "../../portfolio";

export default class CanDo extends Component {

    render() {

        var list = whatCanIDo.list.map((item,index)=> {
             return <li>{item}</li>
        }
        )
        
        return (
            <div className="cando-sec">
                <div className="intro-title">{whatCanIDo.title}</div>
                <p>{whatCanIDo.summary}</p>
                <ul>
                    {list}
                </ul>
                
            </div>
        );
    }
}