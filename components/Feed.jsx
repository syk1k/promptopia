"use client";

import {useState, useEffect} from 'react';
import PromptCard from './PromptCard';


const PromptCardList = ({data, handleTagClick}) => {
  return (
    <div className='mt-16 prompt_layout'>
      {data.map((post) => (
        <PromptCard key={post._id} post={post} handleTagClick={handleTagClick} />
      ))}
    </div>
  )
}


function Feed() {
  const [searchText, setSearchText] = useState()
  const [posts, setPosts] = useState([])
  const handleSearchChange = (e) => {

  }

  useEffect(()=>{
    const fetchPosts = async () =>{
      const response = await fetch("/api/prompt");
      const data = await response.json()

      console.log(data);

      setPosts(data)
    }

    fetchPosts();
  }, [])

  return (
    <section className='feed'>
      <form action="" className='relative w-full flex-center'>
        <input 
          type="text" 
          placeholder='Search for tag or a value or a username' 
          value={searchText}
          onChange={handleSearchChange}
          required
          className='search_input peer'
        />
      </form>
      <PromptCardList 
        data={posts}
        handleTagClick={() => {}}
      />
    </section>
  )
}

export default Feed