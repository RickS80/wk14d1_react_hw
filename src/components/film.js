import React, {Component} from "react";

class Film extends Component {

    render(){
        return (
            <div className="film">
                <a href={this.props.href}>{this.props.children}</a>
            </div>
        )
    }
}


export default Film;
