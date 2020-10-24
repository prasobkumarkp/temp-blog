import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router';
import { getUsers } from "../api/UserApi";
import { getBlogPots } from "../api/BlogApi";

const Blog = () => {
    const { id } = useParams();
    const [posts, setPosts] = useState(null);
    const [searchText, setSearchText] = useState(null);
    const history = useHistory();


    useEffect(() => {
        const fetchPosts = async () => {
            const users = await getUsers();
            const posts = await getBlogPots();
            const updatedPosts = addUserDetailsToBlogPost(posts, users);
            if (id) {
                const post = updatedPosts.filter(post => post.id.toString() === id);
                setPosts(post);
            }
            else {
                setPosts(updatedPosts);
            }
        }
        fetchPosts();
    }, [id]);


    const addUserDetailsToBlogPost = (posts, users) => {
        const updatedPosts = posts.map(post => {
            post.user = users.find(user => user.id === post.userId);
            return post;
        })
        return updatedPosts;
    }

    const handleFilter = (text) => {
        setSearchText(text);
    }

    const applyFilter = (posts) => {
        if (!searchText)
            return posts;
        return posts.filter(post => post.title.toLowerCase().includes(searchText.toLowerCase()))
    }

    const openBlogPost = (id) => {
        if (!id) return;
        history.push(`/blog/${id}`);
    }

    if (id)
        return <div className="container">
            <ul className="user-posts">
                <li>{posts[0].title}</li>
                <li>{posts[0].body}</li>
                <li>{posts[0].user.name} ({posts[0].user.username})</li>
            </ul>
        </div>

    return <div className="container">
        <h3>Blogs</h3>

        <ul className="user-posts">
            <input className="search-field" type="text" onChange={(e) => handleFilter(e.target.value)} placeholder="Search here..." />
            {
                posts && applyFilter(posts).map(post => {
                    return <li key={post.id} onClick={(e) => { openBlogPost(post.id) }}>
                        <div className="blog-post" >{post.title}</div>
                        <div className="user-name">{post.user.username}</div>
                    </li>
                })
            }
        </ul>
    </div>
}

export default Blog;