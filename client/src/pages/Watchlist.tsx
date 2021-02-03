import React from 'react';
import withUser from '../components/hoc/withUser';
import ItemList from '../components/list/list.component';
import Spinner from '../components/spinner/spinner';
import { Link } from 'react-router-dom';


interface MyProps {
}

interface MyState{
}

class Watchlist extends React.Component<any,any>{
    state = {
        name: null,
        serverApi: this.props.prop.serverApi,
        data: null,
        loading: true,
        error: false,
    }
    handler = async() => {
        const { serverApi} = this.state;
        const data = await serverApi.getWatchList(this.props.prop.jwtToken);
        return data;
    }

    componentDidMount() {
      this.update();
    }

    update() {
      this.setState({
        loading: true,
        error: false,
      });

      this.handler()
        .then((obj) => {
          this.setState({
            data: obj.data,
            loading: false,
          });
        })
    }

    renderMovieList() {
      return (item: any) => {
        return (
        <div className="col s12">
          <div className="card horizontal movie-list-card">
            <div className="card-image">
              <img src={item.posterPath}/>
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h5 className="header">{item.title}</h5>
                <p>{item.overview}</p>
                <span>
                  <i className="material-icons">grade</i>
                </span>
                <span className="item-rating">{item.voteAverage}</span>
              </div>
              <div className="card-action">
                <Link to={`/movie/${item.id}`}>Details</Link>
              </div>
            </div>
          </div>
        </div>
        )}
    }

    render() {
        const { data } = this.state;
        const itemList = <ItemList data={data} onItemSelected={()=>{}}>{this.renderMovieList()}</ItemList>
        const component = !this.state.data ? <Spinner/> : itemList;

        return (
            <div className="container">
                <div className="row">
                  { component }
                </div>
            </div>
        )
    }
}

export default withUser(Watchlist);
