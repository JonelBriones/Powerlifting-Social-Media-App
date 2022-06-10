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
            <a href='#ijonel906'><h4>ijonel906</h4></a>
          </div>
        </div>
        <div className='follow-btn'><button>Follow</button></div>
      </div>
      <div className='post-info'>
        <div className='post-caption'><p>Caption of Video</p></div>
        <div className='post-hashtags'><p>Hashtags</p></div>
      </div>
    </div>
  )
}

export default Post