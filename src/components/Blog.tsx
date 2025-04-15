import {useEffect, useState} from 'react';
import {Window, WindowHeader, WindowContent, ScrollView, Button, Frame, MenuList, MenuListItem, Separator } from 'react95';
import cheetah from '../assets/photos/lep.png';
import Navbar from './Navbar'
import styled from 'styled-components';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<{
    title: string;
    content: string;
    date: string;
  } | null>(null);
  const blogPosts = [ 
    {
      title: "First Post",
      content: "This is the content of the first post.",
      date: "2023-10-01",
    },
    {
      title: "Second Post",
      content: "This is the content of the second post.",
      date: "2023-10-02",
    },
    {
      title: "Third Post",
      content: "This is the content of the third post.",
      date: "2023-10-03",
    },
    {
      title: "Fourth Post",
      content: "This is the content of the fourth post.",
      date: "2023-10-04",
    },
    {
      title: "Fifth Post",
      content: "This is the content of the fifth post.",
      date: "2023-10-05",
    },
    {
      title: "Sixth Post",
      content: "This is the content of the sixth post.",
      date: "2023-10-06",
    },
    {
      title: "Seventh Post",
      content: "This is the content of the seventh post.",
      date: "2023-10-07",
    },
    {
      title: "Eighth Post",
      content: "This is the content of the eighth post.",
      date: "2023-10-08",
    },
  ];
  return (
    <>
    <Navbar/>
    <div className='h-screen w-full overflow-hidden relative bg-cover'
    style={{ backgroundImage: `url(${cheetah})` }}>
      <div className= "flex gap-4 p-5 h-[calc(100vh-20px)]">
        {/* Side Bar with Blog posts that are to be opened */}
        <div id="side panel" className= "flex-1 flex items-center justify-end pr-6">
          <Window className='w-[250px] h-1/2 '>
            <WindowHeader className='flex gap-0.5 flex-row items-center justify-between'>Entries
            <Button className='w-1 h-1'>
              <span className="close-icon"></span>
            </Button>
            </WindowHeader>
            <WindowContent className=''>
              <ScrollView className='w-[200px] h-[260px] bg-slate-100'>
              <MenuList>
                    {blogPosts.map((post, index) => (
                      <div key={index}>
                        <MenuListItem 
                          onClick={() => setSelectedPost(post)}
                          style={{
                            width: '145px',
                            backgroundColor: selectedPost === post ? '#c3c7cb' : 'transparent',
                          }}
                        >
                          <div className="flex flex-col">
                            <span className="font-bold">{post.title}</span>
                            <span className="text-xs">{post.date}</span>
                          </div>
                        </MenuListItem>
                        {index < blogPosts.length - 1 && <Separator />}
                      </div>
                    ))}
                  </MenuList>
              </ScrollView>
            </WindowContent>
          </Window>

        </div>
        
        <div className= "flex-[2] mt-12">
        <Window className='w-[700px] h-full flex items-center justify-center'>
            <WindowHeader className='flex gap-0.5 flex-row items-center justify-between'>Blog
            <Button className='w-1 h-1'>
              <span className="close-icon"></span>
            </Button>
            </WindowHeader>
            <WindowContent className='flex justify-center items-center'>
              <Frame>
              <div className='h-[400px] w-[600px] bg-pink-400'>
              <p>Under construction</p>
              </div>
              </Frame>
            </WindowContent>
          </Window>
        </div>
        <div className = "flex-1 mt-12">
        <Window className='w-3/4 h-5/6'>
            <WindowHeader>Blog</WindowHeader>
            <WindowContent >
              <ScrollView>

              </ScrollView>
            </WindowContent>
          </Window>
          </div>

      </div>



    </div>
    </>
  )
};

export default Blog;