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
    handler = async(url:string) => {
        const { serverApi} = this.state;
        const data = await serverApi.addWatchList(url,this.props.prop.jwtToken);
        return data;
    }
    render(){
        return (
            <div className="container">
                {/* <button onClick={() => this.handler('/api/watchlist')}>fetch</button> */}
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