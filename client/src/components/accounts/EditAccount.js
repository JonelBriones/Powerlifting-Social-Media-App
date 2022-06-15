import React, {useState,useEffect} from 'react'
import axios from 'axios'

const EditAccount = () => {
    const [user,setUser] = useState({})
    useEffect(()=> {
      axios.get("http://localhost:8000/api/users/user",{withCredentials:true})
        .then((res)=>{
          console.log(res.data)
          setUser(res.data)
        })
        .catch((err)=>console.log(err))
    },[])
  return (
    <>
        <div className='post'>
        <div className='profile-info-container'>
          <div className='profile-info'>
            <div className='profile-img'>
              <a href="#ijonel906">
              <img src={`${user.profileImg}`} alt='profile-img'/>
              </a>
            </div>
            <div className='profile-name'>
              <a href='#ijonel906'><h4>{user.username}</h4>
              <span>{user.firstName+" " + user.lastName}</span></a>
              <div className='post-time'>
                <span>- hours ago</span>
              </div>
            </div>
          </div>
          <div className='follow-btn'><button>Edit</button></div>
        </div>
        {/* <div className='post-info'>
          <div className='post-video'>
            <video width='360' height='540' loop autoPlay controls>
              <source src={`${user.video}`} type="video/mp4" />
            </video>
          </div>
          <div className='post-info-description'>
            <div className='post-caption'><p>Caption of Video:Consequat est exercitation fugiat ipsum velit amet ea deserunt consequat aliqua excepteur labore Lorem tempor.</p></div>
            <div className='post-hashtags'><p>Hashtags: #Consequat #est #exercitation #tempor. </p></div>
            <div className='post-action-btn'>
            <button>Like</button>
            <button>Comment</button>
            <button>Share</button>
            </div>
            <div className='post-comments'>
              <div>Profile1 comments</div>
              <div>Profile2 comments</div>
              <div>Profile 3comments</div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default EditAccount