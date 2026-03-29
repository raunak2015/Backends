import React, { useState } from 'react'
import './Feed.css'

function Feed() {
    const [posts] = useState([
        {
            _id: '1',
            image: 'https://ik.imagekit.io/1v8zhunyp/image_BR4u8_LAI',
            caption: 'A beautiful sunset at the beach.',
        },
       
        
        
    ])
  return (
    <section className={`feed-section ${posts.length === 1 ? 'single-post' : ''}`}>
        {posts.map((post, index) => (
            <div key={`${post._id}-${index}`} className='post-card'>
                <img src={post.image} alt="Post" className='post-image' />
                <p className='post-caption'>{post.caption}</p>
            </div>
        ))}
    </section>
  )
}

export default Feed