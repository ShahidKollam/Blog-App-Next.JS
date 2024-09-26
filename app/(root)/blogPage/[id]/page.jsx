import React from 'react'
import BlogPost from '@/components/BlogPost'
import { useQuery } from '@tanstack/react-query'


const page = () => {
  useQuery()
  return (
    <div>
      <BlogPost />
    </div>
  )
}

export default page