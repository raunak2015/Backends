import React, { useState, useEffect } from 'react'
import './Feed.css'
import axios from 'axios'

function Feed() {
    const [posts, setPosts] = useState([
        {
            _id: '1',
            image: 'https://ik.imagekit.io/1v8zhunyp/image_BR4u8_LAI',
            caption: 'A beautiful sunset at the beach.',
        }, 
    ])

    useEffect(()=>{
        axios.get('http://localhost:3000/posts')
        .then((res)=>{
            console.log(res)
            setPosts(res.data.posts)
        })
        .catch((err) => {
            console.error(err)
        })
    },[])
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