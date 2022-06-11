import React from 'react'

const Post = () => {
  return (
    <div className='post'>
      <div className='profile-info-container'>
        <div className='profile-info'>
          <div className='profile-img'>
            <a href="#ijonel906">
            <img src="https://p19-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/1ee1d13aebc0e104fe117d4906e3d846~c5_100x100.jpeg?x-expires=1655060400&x-signature=25BWi4SAfahSpHVtcjaMkc1M8Kg%3D" alt='profile-img'/>
            </a>
          </div>
          <div className='profile-name'>
            <a href='#ijonel906'><h4>ijonel906</h4>
            <span>Jonel</span></a>
            <div className='post-time'>
              <span>- hours ago</span>
            </div>
          </div>
        </div>
        <div className='follow-btn'><button>Follow</button></div>
      </div>
      <div className='post-info'>
        <div className='post-video'>
          <video width='360' height='540' loop autoplay controls>
            <source src="https://v16m-webapp.tiktokcdn-us.com/a764a282cbb17b87d973e4f1837dc6e0/62a3f1ff/video/tos/useast5/tos-useast5-pve-0068-tx/524999bca4a24eb7bbea80f52f509336/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C0%7C0&br=3730&bt=1865&cs=0&ds=3&ft=ebtHKH-qMyq8Zz-Dawe2NJSRfl7Gb&mime_type=video_mp4&qs=0&rc=aDM7ZDo3NzhmOzxpMzxlPEBpMzxrZjg6ZnVxZDMzZzczNEBjMy5jYF4xXzQxNC81X2NiYSMxNi5lcjRva2VgLS1kMS9zcw%3D%3D&l=202206101937570101130061040500E276" type="video/mp4" />
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
    </div>
  )
}

export default Post