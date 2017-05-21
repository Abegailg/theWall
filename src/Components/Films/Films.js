import React from 'react';
import Axios from "axios";  

import FilmItem from "./FilmItem.js";

class Films extends React.Component{
    constructor(props){
        super(props);
        this.cancelToken = Axios.CancelToken.source();
        this.state = {films: false, message: "STILL LOADING..."}
    }
    componentDidMount(){
        Axios.get("http://swapi.co/api/films",
        {cancelToken: this.cancelToken.token})
        .then((response) => {
            console.log(response);
            this.setState({
                films: response.data.results,
                message: ""
            })
        }).catch((err)=>{
            if(Axios.isCancel(err)){
                console.log(err.message);
                return;
            }
            console.log(err);
        })
    }

    render(){
        if(this.state.films){
            var movies = this.state.films.map((movie) => {
               return <FilmItem key={movie.episode_id} filmData={movie} />
          })
          return (
              <div>
                  <h1>This is Films component</h1>
                  {movies}
              </div>
          )
        } else {
            return <h1>{this.state.message}</h1>
        }
    }
}
export default Films;