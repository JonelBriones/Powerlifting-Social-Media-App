import React, {useState} from 'react'
import Post from '../components/accounts/Post.js'

const Home = () => {
  return (
      <>
        <div className='container-contents'>
            <div className='container-contents-main'>
              <div id='top'></div>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>

            {/* <p>This app is designed for those who are into or is new to the sport of powerlifting! <br/> 
            I created this site for lifters to share their proud lifts, fails, experiences and motivation for the sport!
            <br/>Have a great day and hit some Prs!
            </p> */}
            </div>
            <button className='back-to-top'><a href="#top">TOP</a></button>
        </div>

      </>
  )
}

export default Home