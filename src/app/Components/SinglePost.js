import React from 'react';
import '../css/Singlepost.css';
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';


function SinglePost(props) {
    
    const {id} = useParams();

    const [comment, setcomment] = useState([]);
    const [blog, setBlog] = useState([]);
    
    const [visible, setVisible] = useState(4)

    const showMore = () => {
        setVisible(prevValue => prevValue + 4);
    };

    const fetchData = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
            setcomment(await response.json());
        } catch (error) {
            console.log(error);
        }
    }
    const singleData = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            setBlog(await response.json());
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        singleData();
        fetchData();
    }, [])
    return (
        <div className="single__post">
            <div className="container">
                <div className="row">
         
                            <div className="single-post-details" key={blog.id}>
                            <img src="/img/IMAGE.png" alt="singlepost"></img>
                            <h1>{blog.title}</h1>
                            <p>{blog.body}</p>
                        </div>

                 
                                <div className="comments" key={comment.id}>
                                    <div className="comments-details">
                                        <h1>Name: {comment.name}</h1>
                                        <h1>Email: {comment.email}</h1>
                                    </div>
                                    <div className="comment-body">
                                        <p>{comment.body}</p>
                                    </div>
                                </div>
                </div>
            </div>
        </div>
    )
}

export default SinglePost
