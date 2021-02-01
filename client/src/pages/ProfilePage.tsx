import React from 'react';
import {MovieApiServiceConsumer} from '../components/movie_service_context';
import MovieApiService from '../services/movieApiService';
import {withMovieService} from '../components/hoc'


interface MyProps {
}

interface MyState{
}

class ProfilePage extends React.Component<any,MyState>{
    state = {
        name: null,
        
    }
    render(){
        this.props.getTopRatedMovies().then((data:any) => console.log(data));
        return (
            <div className="container">
                
            </div>
        )
    }
}
const mapMethodsToProps = (MovieApiService:any) => {
    return {
        getTopRatedMovies : MovieApiService.getTopRatedMovies
    }
}
export default withMovieService(mapMethodsToProps)(ProfilePage);