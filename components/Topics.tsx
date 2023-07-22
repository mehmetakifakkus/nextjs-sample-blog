import React, { useMemo } from 'react'

interface frequency {
  topic: string;
  freq: number;
}

export default function Topics({ postListData }) {

  // create the topics array
  const topics = useMemo(() => {
    const mySet = new Set();
    postListData.forEach(post => {
      post.topics.forEach(topic => {
        mySet.add(topic)
      })
    })
    return mySet;
  }, [postListData])

  // create the frequency array
  const frequency = useMemo(() => {
    const myArray: frequency[] = [];
    topics.forEach((topic: string) => {
      let freq = 0;
      postListData.forEach(post => {
        if (post.topics.includes(topic)) {
          freq++;
        }
      })
      myArray.push({ topic, freq })
    })
    return myArray;
  }, [topics, postListData])

  return (
    <div className='flex flex-col mt-8 mb-2 mx-12 w-[480px]'>
      <div className='flex flex-row gap-4 items-baseline mb-4'>
        <span className='text-xl text-gray-700'>Search by Topics</span>
        <span className='text-base text-gray-400 cursor-pointer'>Clear</span>
      </div>
      <div className='flex gap-2 w-full flex-wrap'>
        {
          frequency.map((item, index) => (
            <span key={index} className='text-gray-500 bg-gray-100 text-sm whitespace-nowrap border rounded-full border-gray-300 py-1 px-4 cursor-pointer hover:bg-gray-300 hover:text-gray-800'>{item.topic.replace('-', ' ')} ({item.freq})</span>
          ))
        }
      </div>
    </div>
  )
}
