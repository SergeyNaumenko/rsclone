import {Schema, model, Types} from 'mongoose';

const schema = new Schema({
    adult: {type: Boolean},
    backdropPath: {type: String},
    genreIds: {type: Array},
    id: {type: Number},
    originalLanguage: {type: String},
    originalTitle:  {type: String},
    overview:  {type: String},
    popularity: {type: Number},
    posterPath:  {type: String},
    releaseDate:  {type: String},
    title:  {type: String},
    voteAverage: {type: Number},
    voteCount: {type: Number},
    ourWatchList: {type: Boolean, default:false},
    ourVote: {type: Number, default:0},
    owner: {type: Types.ObjectId, ref: 'User'}
})

export default model('Films', schema);