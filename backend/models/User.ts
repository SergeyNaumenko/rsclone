import {Schema, model, Types} from 'mongoose';

const schema = new Schema({
    login: {type: String, required:true, unique:true},
    password: {type: String, required:true},
    films: [{ type: Types.ObjectId, ref: 'Films' }]
})

export default model('User', schema);