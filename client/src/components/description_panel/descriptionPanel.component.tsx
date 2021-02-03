import React, { useState } from 'react';
import ISO639 from 'iso-639-1';
import './descriptionPanel.css';
import { UserContextConsumer } from '../../context/login-context';
import Spinner from '../spinner/spinner';
import withUser from '../hoc/withUser';

type DescriptionData = {
  posterPath: string;
  title: string;
  releaseDate: string;
  genreIds: string;
  popularity: number;
  originalLanguage: string;
  voteCount: number;
  voteAverage: number;
  adult: boolean;
  overview: string;
  id:any
}

type ComponentProps = {
  data: DescriptionData,
  prop:any,
}

const DescriptionPanel: React.FC<any> = (props: ComponentProps) => {
  const {
    posterPath,
    title,
    releaseDate,
    genreIds,
    popularity,
    originalLanguage,
    voteCount,
    voteAverage,
    adult,
    overview
  } = props.data;
  const [vote,setVote] = useState<any>(null);
  console.log(props.prop);
  const fn = async() => {
    try {
      const res = await props.prop.serverApi.getVoteByFilm(props.prop.jwtToken,props.data.id);
      setVote(res.vote[0].ourVote)
      return res.vote[0].ourVote;
    } catch (error) {
      
    }
  }
  fn();

  // const addGenres = (arr: object[]) => {
  //   arr.reduce((result, item) => {
  //     result += `${item}/`;
  //     return result;
  //   }, '');
  // };
  const handlerVote = async(item:any,val:any,vote:any) => {
    try {
      const {jwtToken,serverApi} = val;
      console.log(jwtToken,serverApi);
      const newitem:any = {...item, ourVote: vote};
      const res = await serverApi.addVote(newitem,jwtToken);
      M.toast({html: res.mes})
    } catch (error) {
      M.toast({html: error});
    }
  } 
  if(vote === null){
    return <Spinner />
  }
  return (
    <UserContextConsumer>
    {value => <div className="description-panel card-panel row">
      <div
        className="poster col s12 m12 l4 xl4"
        style={{ backgroundImage: `url(${posterPath})` }}
      />
      <div
        className="info black-text col s12 m12 l7 xl7
        offset-l1 offset-xl1"
      >
        <div className="title">
          <h4>{title}</h4>
        </div>
        <hr />
        <div className="release">
          <span className="category">Date of release:</span>
          <span className="description">{releaseDate || '-'}</span>
        </div>
        <hr />
        <div className="genres">
          <span className="category">Genres:</span>
          <span className="description">{genreIds}</span>
        </div>
        <hr />
        <div className="popularity">
          <span className="category">Popularuty:</span>
          <span className="description">{popularity}</span>
        </div>
        <hr />
        <div className="laguage">
          <span className="category">Language:</span>
          <span className="description">
            {ISO639.getName(originalLanguage)}
          </span>
        </div>
        <hr />
        <div className="vote-count">
          <span className="category">Number of votes:</span>
          <span className="description">{voteCount}</span>
        </div>
        <hr />
        <div className="vote-average">
          <span className="category">Average rating:</span>
          <span className="description">{voteAverage}</span>
        </div>
        <hr />
        <div className="adult">
          <span className="category">Adult movie:</span>
          <span className="description">{adult ? 'Yes' : 'No'}</span>
        </div>
        <hr />
        <div className="overview">
          <span className="category">Movie overview:</span>
          <span className="description">{overview}</span>
        </div>
        <select className="browser-default" defaultValue={vote} onClick={(e:any) => {
            e.stopPropagation();
          }} onChange={(e:any) => {
            handlerVote(props.data,value,e.target.value);
            console.log(e.target.value)
          }}>
            <option value="0">Choose your vote</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
      </div>
    </div>}
    </UserContextConsumer>
  );
};

export default withUser(DescriptionPanel);
