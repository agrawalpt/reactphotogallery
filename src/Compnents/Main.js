import React, { Component } from "react"
import PhotoWall from './PhotoWall'
import AddPhoto from './AddPhoto'
import {Route, withRouter} from 'react-router-dom'
//3import Title from './Title'



class Main extends Component{
    constructor(){
        super()
        this.state = {
            posts: [{
                id: 0,
                description:"Me",
                imageLink:"https://tinyjpg.com/images/social/website.jpg"
            },
            {
                id: 1,
                description:"My Team",
                imageLink:"https://upload.wikimedia.org/wikipedia/commons/4/47/Snowboarder_in_flight_%28Tannheim%2C_Austria%29.jpg"
            
            },
            {
                id:2,
                description: "",
                imageLink:"http://personal.psu.edu/xqz5228/jpg.jpg"
            }],
            screen: 'photo'
        }
        this.removephoto = this.removephoto.bind(this)
        this.addPhoto = this.addPhoto.bind(this)
    }

    removephoto(postRemove){
        console.log(postRemove.imageLink);
        this.setState((state)=>({
            posts:state.posts.filter(post => post !== postRemove)
        }))
    }

    addPhoto(postSubmitted){
        
        this.setState((state) => ({
            posts: state.posts.concat([postSubmitted])
            
        }))
    }

    render(){
        return <div>
                    <Route path="/" render = {() =>
                        <div>
                        <h1>Photowall</h1>
                        {
                           console.log("Title")
                        }
                        <PhotoWall posts={this.state.posts} onRemovePhoto={this.removephoto} />
                        </div>
                    }/>
                    <Route path="/AddPhoto" render = {(history) =>
                        <AddPhoto onAddPhoto={(addedPost) => {
                            this.addPhoto(addedPost)
                            this.props.history.push("/")
                        }}/>
                    }/>             
                </div>
    }
}

export default withRouter(Main)
