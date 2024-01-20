import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/authcontext';
import axios from 'axios';
import './links.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

function Links() {
    const { loggedIn, user } = useContext(AuthContext);
    const [data, setData] = useState(null);
    const [display , setClass] = useState('none');
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Make the GET request using Axios
                const response = await axios.get(`http://localhost:8000/profile/${user._id}`);
                // Update state with the fetched data
                setData(response.data);
            } catch (error) {
                console.log("The error occurred: ", error);
                // Handle errors
            }
        };

        // Call the fetchData function
        fetchData();
    }, [user._id]);

    const handleLinkClick = (event, profileLink) => {
        event.preventDefault();
        navigator.clipboard.writeText(profileLink)
        setClass('inline')
        setTimeout(() => {
            setClass('none');
          }, 800);

    };

    return (
        <div className="links centerflex">
                <span style={{display:display}} className='alert'>Copied !</span>
            <h2>Your Important Links</h2>
            {data ? (
                data.map((item, index) => (
                    <div className="link-item" key={index}>
                        <i className={'fa fa-' + item.profiletitle.toLowerCase()}></i>
                        <span>{item.profiletitle}</span>
                        <span style={{ cursor: "pointer" }} onClick={(event) => handleLinkClick(event, item.profilelink)}>
                            <i className='fa fa-copy'></i>
                        </span>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Links;
