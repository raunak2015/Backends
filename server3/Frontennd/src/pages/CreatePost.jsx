import React from 'react'
import './CreatePost.css'

function CreatePost() {
  return (
    <section className='create-post-section'>
        <div className='create-post-card'>
          <h1>Create Post</h1>
          <p>Share a moment with an image and a caption.</p>
          <form action="" className='create-post-form'>
              <label htmlFor="image">Post image</label>
              <input type="file" name="image" id="image" accept='image/*' required/>
              <label htmlFor="text">Caption</label>
              <textarea name="text" id="text" placeholder='Write something interesting...' rows="5"></textarea>
              <button type="submit">Create Post</button>    
          </form>
        </div>
    </section>
  )
}

export default CreatePost