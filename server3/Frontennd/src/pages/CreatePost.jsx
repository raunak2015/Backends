import React from 'react'
import './CreatePost.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function CreatePost() {
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)

    try {
      await axios.post('http://localhost:3000/create-post', formData)
      alert('Post created successfully!')
      navigate('/feed')
    } catch (err) {
      console.error(err)
      alert('Failed to create post. Please try again.')
    }
  }

  return (
    <section className='create-post-section'>
        <div className='create-post-card'>
          <h1>Create Post</h1>
          <p>Share a moment with an image and a caption.</p>
          <form action="" className='create-post-form' onSubmit={handleSubmit}>
              <label htmlFor="image">Post image</label>
              <input type="file" name="image" id="image" accept='image/*' required/>
              <label htmlFor="caption">Caption</label>
              <textarea name="caption" id="caption" placeholder='Write something interesting...' rows="5" required></textarea>
              <button type="submit">Create Post</button>    
          </form>
        </div>
    </section>
  )
}

export default CreatePost