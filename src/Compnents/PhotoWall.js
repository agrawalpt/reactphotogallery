import React from 'react'
import PropTypes from 'prop-types'
import {Link } from 'react-router-dom'

function PhotoWall(props){
    return <div>
           <Link className="addIcon" to="/AddPhoto"></Link>
           <div className="photoGrid">
                {props.posts
                .sort(function(x,y){
                    return y.id - x.id
                })
                .map((post,index) => <figure className="figure" key={index}> 
                    <img className="photo" src={post.imageLink} alt={post.description}/>
                    <figcaption><p> {post.description}</p></figcaption>
                    <div className="button-container">
                        <button className="remove-button" onClick = {() => {
                            props.onRemovePhoto(post)
                        }}>Remove</button>

                    </div>
                </figure> )}
            </div>
            </div>
}

PhotoWall.prototype = {
    posts:PropTypes.array.isRequired,
    onRemovePhoto:PropTypes.func.isRequired
}

export default PhotoWall