import React from 'react'

const Index = () => {
  return (
      <>
        <nav>
            <ul>
                <li className='logo'><a href="#home">PowerLifts</a></li>
                <li><a href="#home">Home</a></li>
                <li><a href="#following">Following</a></li>
                <li><a href="#login">Log in</a></li>
            <div className='topics'>
            <span>Excercises</span>
                <li><a href="#squat">Squat</a></li>
                <li><a href="#bench">bench</a></li>
                <li><a href="#deadlift">Deadlift</a></li>
            </div>
            <div className='suggested-accounts'>
            <span>Suggested-accounts</span>
                <li><a href="#account1">Account 1</a></li>
                <li><a href="#account2">Account 2</a></li>
                <li><a href="#account3">Account 3</a></li>
            </div>
            <div className='extra-links'>
                <span>Extra-links</span>
                <li><a href="#account1">About</a></li>
                <li><a href="#account2">Contacts</a></li>
                <li><a href="#account3">Github</a></li>
            </div>
            <div className='personal-links'>
                <li>Created by <a href="#jonelbriones.com">Jonel</a></li>
            </div>
            </ul>
        </nav>
    </>
  )
}

export default Index