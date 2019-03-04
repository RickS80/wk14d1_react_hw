import React, {Component} from "react";
import Film from "./film";

class FilmList extends Component {

    render(){
        const filmNodes = this.props.data.map(film => {
            return (
                <Film key={film.id} href={film.url}>{film.name}</Film>
                
                
            )
        })
    
        return (
            <div className = "film-list">
            {filmNodes}
            </div>
        )
        
    }




}

export default FilmList;