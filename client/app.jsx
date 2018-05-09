import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { getUser } from './actions/index'


class App extends React.Component {

    constructor() {
        super(...arguments);
        this.state = {
            data: []
        }
    }
    
    componentDidMount() {
        
        console.log(this.props.getUser())
    }
    render() {
        const { data } = this.state
        console.log(data)
        return (
            <div className="index">
                <p className="title">主页</p>

                {/* {
                    data.map((item, index) =>  <p key={item._id}>{item.user}</p> )
                } */}
            
            </div>
        )
    }
}
const mapStatetoProps = (state) => {
    return {
        userInfo: state
    }
}

const mapDispatchtoProps = () => ({
    getUser: getUser()
})
App = connect(mapStatetoProps, mapDispatchtoProps)(App)
export default App