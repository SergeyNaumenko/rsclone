import React from 'react';
import withUser from '../components/hoc/withUser';


interface MyProps {
}

interface MyState{
}

class ProfilePage extends React.Component<any,any>{
    state = {
        name: null,
        serverApi: this.props.prop.serverApi
    }
    handler = async() => {
        const { serverApi} = this.state;
        const data = await serverApi.getWatchList(this.props.prop.jwtToken);
        console.log(data);
        return data;
    }
    render(){
        return (
            <div className="container">
                <button onClick={() => this.handler()}>fetch</button>
                <div className="row">
                    <div className="col s12">This div is 12-columns wide on all screen sizes</div>
                    <div className="col s6">6-columns (one-half)</div>
                    <div className="col s6">6-columns (one-half)</div>
                </div>
            </div>
        )
    }
}

export default withUser(ProfilePage);