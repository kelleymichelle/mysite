import React from 'react'
import medium from '../assets/images/medium-40.png';
import twitter from '../assets/images/twitter-40.png';
import github from '../assets/images/github-40.png';
import linkedin from '../assets/images/linkedin-40.png';

export default function SocialMediaIcons() {
    return (
        <div>
            <a href="https://medium.com/@jvullo" target="_blank" rel="noopener noreferrer" >
            <img src={medium} alt="medium" />
            </a>
            <a href="https://twitter.com/jamievullo" target="_blank" rel="noopener noreferrer" >
            <img src={twitter} alt="twitter" />
            </a>
            <a href="https://github.com/jamievullo" target="_blank" rel="noopener noreferrer" >
            <img src={github} alt="github" />
            </a>
            <a href="https://www.linkedin.com/in/jamie-vullo/" target="_blank" rel="noopener noreferrer" >
            <img src={linkedin} alt="linkedin" />
            </a>
        </div> 
    )
}
