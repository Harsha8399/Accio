import React, { useEffect, useState } from 'react';
import { Card, Button } from "react-bootstrap";
import axios from 'axios';
import { Link } from 'react-router-dom'

function Posts() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setPosts(res.data)
        }
        fetchPosts()
    }, []);

    return (
        <>
            <h1>Posts</h1>
            {Posts.length ? (
                posts.map((post) => (
                    <Card
                        className="post"
                        border="primary"
                        bg="dark"
                        text="light"
                        key={post.id}
                    > <Card.Header>
                            <small className="text-muted">User {post.userId}</small>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title><Link className="router-link" to={`/posts/${post.id}`}>{post.title}</Link></Card.Title>
                            <Card.Text>{post.body}</Card.Text>
                        </Card.Body>
                    </Card>
                ))
            ) : (
                <Spinner animation="border" />
            )}

        </>

    )
}
export default Posts;