import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
    return <div className="container">
        <h4>Links</h4>
        <ul className="home">
            <li><Link to='/users'>Users</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
            <li><Link to='/blog/2'>Blog with id 2</Link></li>
        </ul>
    </div>
}
export default Home;