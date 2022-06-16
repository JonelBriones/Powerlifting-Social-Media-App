import React, {useState} from 'react'

const Post = () => {
  const [post,setPost] = useState([{
    username: "ijonel906",
    firstName: "Jonel",
    lastName: "Briones",
    profileImg: "https://p19-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/1ee1d13aebc0e104fe117d4906e3d846~c5_100x100.jpeg?x-expires=1655128800&x-signature=GO2kIseA6wGnMmGA6RCvSpdhkBk%3D",
    caption: "Just hit a pr of 405",
    hashtag: ["#swole","#405","#deadlift"],
    video: ""
  }])
  return (
    <>
    {
      post.map(p=> (
        <div className='post' key={p}>
        <div className='profile-info-container'>
          <div className='profile-info'>
            <div className='profile-img'>
              <a href="#ijonel906">
              <img src={`${p.profileImg}`} alt='profile-img'/>
              </a>
            </div>
            <div className='profile-name'>
              <a href='#ijonel906'><h4>{p.username}</h4>
              <span>{p.firstName+" " + p.lastName}</span></a>
              <div className='post-time'>
                <span>- hours ago</span>
              </div>
            </div>
          </div>
          <div className='follow-btn'><button>Follow</button></div>
        </div>
        <div className='post-info'>
          <div className='post-video'>
            <video width='360' height='540' loop autoPlay controls>
              <source src={`${p.video}`} type="video/mp4" />
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
        </div>
        <hr/>
      </div>
      ))
    }
    </>
  )
}

export default Post