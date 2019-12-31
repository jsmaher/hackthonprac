import React from 'react'
import { firebaseApp } from '../../Config/Firebase/firebase'
import { Verify,PostPage } from '../index'
import './Home.css'
import Navbar from './../../Component/Drawer/Drawer'

export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            check: '',
            userEmail:''
        }
    }
    componentDidMount() {
        let that = this
        firebaseApp.auth().onAuthStateChanged(function (user) {
            if (user) {
                console.log(user.email);
                let emailVerified = user.emailVerified;
                that.setState({ check: emailVerified,userEmail:user.email })
            } else {
                // No user is signed in.
            }
        });
    }
    render() {
        return (
            <div>
                {this.state.check ?
                    <div >
                        <Navbar path={this.props.history} list={[{ name: 'Home',path:'/Home' }]} />
                        <PostPage />
                    </div>
                    :
                    <div>
                        <Verify email={this.state.userEmail} />
                    </div>}
            </div>
        )
    }
}