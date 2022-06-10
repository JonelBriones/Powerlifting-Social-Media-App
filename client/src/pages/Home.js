import React from 'react'
import Post from '../components/navbar/accounts.js/Post.js'
import Index from '../components/navbar/Index.js'

const Home = () => {
  return (
      <>
        <h1>Home</h1>
        <div className='container-contents'>
            <div className='container-contents-left-side'>
            <Index/>
            </div>
            <div className='container-contents-main'>
                <Post/>
            {/* <p>This app is designed for those who are into or is new to the sport of powerlifting! <br/> 
            I created this site for lifters to share their proud lifts, fails, experiences and motivation for the sport!
            <br/>Have a great day and hit some Prs!
            </p> */}
            </div>
        </div>

      </>
  )
}

export default Home