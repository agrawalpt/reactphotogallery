import React, {Component} from 'react'

class AddPhoto extends Component{
    constructor(){
        super()
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleSubmit(event){
        event.preventDefault();
        const imageLink=event.target.elements.link.value
        const description=event.target.elements.description.value      
        const post = {
            id: Number(new Date()),
            description:description,
            imageLink: imageLink
        }
        if(description && imageLink){
            this.props.onAddPhoto(post)
        }

    }

    render(){
        return <div> 
                    <h1>PhotoWall</h1>
                    <div className = "form">
                        <form onSubmit={this.handleSubmit}>
                            <input name="link" type = "text" placeholder = "Link"/>
                            <input name="description" type = "text" placeholder = "Description"/>
                            <button className = "remove-button">Post</button>
                        </form>
                    </div>
                </div>
    }
}

export default AddPhoto