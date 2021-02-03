import React from 'react';
import withUser from '../components/hoc/withUser';


interface MyProps {
}

interface MyState{
}

class RatingPage extends React.Component<any,any>{
    state = {
        name: null,
        serverApi: this.props.prop.serverApi
    }
    handler = async() => {
        const { serverApi} = this.state;
        const data = await serverApi.getRatingList(this.props.prop.jwtToken);
        return data;
    }
    render(){
        return (
            <div className="container">
                <button onClick={() => this.handler()}>fetch</button>
                <div className="row">
                </div>
            </div>
        )
    }
}

export default withUser(RatingPage);