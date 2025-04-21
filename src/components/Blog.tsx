import {useEffect, useState} from 'react';
import {Window, WindowHeader, WindowContent, Toolbar, ScrollView, Button, Frame, MenuList, MenuListItem, Separator } from 'react95';
import cheetah from '../assets/photos/lep.png';
import x from '../assets/photos/x.png';
import maximize from '../assets/photos/maximize.png';
import Navbar from './Navbar';

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

  const menuItems = ["File", "Edit", "View", "Help"];
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
            <Button 
              style ={{ width: '25px', height: '25px' }}
              >
              <img src={x} alt="Close" className="w-4 h-4" />
            </Button>
            </WindowHeader>
            <WindowContent className=''>
              <ScrollView className='w-[190px] h-[260px] bg-slate-100 p-2'>
              <MenuList>
                    {blogPosts.map((post, index) => (
                      <div key={index} className="mb-4 mt-3">
                        <MenuListItem 
                          onClick={() => setSelectedPost(post)}
                          style={{
                            width: '138px',
                            padding: '8px',
                            backgroundColor: selectedPost === post ? '#c3c7cb' : 'transparent',
                          }}
                        >
                          <div className="flex flex-col w-full">
                            <span className="font-bold">{post.title}</span>
                            <span className="text-[10px]">{post.date}</span>
                          </div>
                        </MenuListItem>
                        {index < blogPosts.length - 1 && <Separator style={{ margin: '4px 0' }} />}
                      </div>
                    ))}
                  </MenuList>
              </ScrollView>
            </WindowContent>
          </Window>

        </div>
        
        <div className= "flex-[2] mt-12">
        <Window className='w-[700px] h-full flex items-center justify-center'>
            <WindowHeader className='flex gap-0.5 flex-row items-center justify-between'>
              Blog
            <div className='flex space-x-1'>
            <Button
              style={{ width: '25px', height: '25px' }}>
              <img src={maximize} alt="Maximize" className="w-4 h-4" />
            </Button>
            <Button 
              style ={{ width: '25px', height: '25px' }}
              >
              <img src={x} alt="Close" className="w-4 h-4" />
            </Button>
            </div>
            </WindowHeader>

            <Toolbar
              //style={{ height: '15px'}}
            >
            {menuItems.map((item, index) => (
                  <Button key={index} variant="menu"
                    style={{ fontSize: '15px', width: '50px', height: '25px' }}
                  >
                    {item.split(' ').map((word, i) => (
                      <span key={i}>
                        <span style={{ textDecoration: 'underline' }}>{word[0]}</span>
                        {word.slice(1)}{' '}
                      </span>
                    ))}
                  </Button>
                ))}
            </Toolbar>

            <WindowContent className='flex justify-center items-center'>
              <Frame>
                <div className='h-[500px] w-[650px] bg-slate-100'>
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