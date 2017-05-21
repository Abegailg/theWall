import React from "react";

class FilmItem extends React.Component{

    render(){
        return(
            <div>
                <h3>{this.props.filmData.title}</h3>
                <p>{this.props.filmData.opening_crawl}</p>
            </div>
        )
    }
}
export default FilmItem;