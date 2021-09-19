import React from 'react';
import { useState, useEffect } from 'react';
import '../css/Blog.css';
import {Link} from 'react-router-dom';


function Blog() {

    const [blog, setBlog] = useState([]);
    const [visible, setVisible] = useState(8)
    const showMore = () => {
        setVisible(prevValue => prevValue + 4);
    };

    const fetchData = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
            setBlog(await response.json());
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData();
    }, [])


    return (
        <div className="blog">
        
            <div className="container">
                <div className="row">
                    <div className="blog-details">

                        {
                            blog.slice(0, visible).map((postData) => {
                                return (
                                    <div className="blog-card" key={postData.id}>
                                        <img src="./img/IMAGE.png" alt="postimage"></img>
                                        <h1>{postData.title}</h1>
                                        <h2><Link to={`/post/` + postData.id}>👉 Read More</Link></h2>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="col-12 login-button">
                    <button style={{ display: visible >= blog.length ? 'none' : 'hidden' }} className="loadmorebtn" onClick={showMore}>Load More</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
