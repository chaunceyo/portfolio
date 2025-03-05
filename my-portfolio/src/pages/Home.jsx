import React from 'react';
import './Home.css'


const Home = () => {
    return(
        <>
          <div className='home-container'>
            <div className='intro-top'>
              <div className='intro'>
                <h1 className='hello'> Hello! </h1>
                <h1 className='name'> I'm Chauncey Ogletree, </h1>
                <h1>a Web Developer helping small businesses build modern websites. </h1>
              </div>
              <img className='myImg' src="./myImage.png"></img>
            </div>
            <div className='lang-container'>
              <h1 className='tech-stacks'>Tech Stacks: </h1>
              <div className='lang-img'>
                <img src="./HTML5.png"></img>
                <img src="./CSS3.png"></img>
                <img src="./React.png"></img>
                <img src="./nodejs.png"></img>
                <img src="./SQL.png"></img>
                <img src="./NPM.png"></img>
              </div>
            </div>
          </div>
        </>
        
    )
}
export default Home;