import { useEffect, useState } from 'react';
import { 
  Window, 
  WindowHeader, 
  WindowContent, 
  Button, 
  Frame, 
  MenuList, 
  MenuListItem, 
  Separator, 
  ScrollView
} from 'react95';
import styled from 'styled-components';
import cheetah from '../assets/photos/lep.png';
import x from '../assets/photos/x.png';
import maximize from '../assets/photos/maximize.png';
import Navbar from './Navbar';

// Styled window component with 3D border effect
const StyledWindow = styled(Window)`
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  position: absolute;
`;

// Menu bar styling
const MenuBar = styled.div`
  background-color: #c0c0c0;
  border-bottom: 1px solid #7b7b7b;
  padding: 2px 0;
`;

// More defined content area
const ContentArea = styled.div`
  background-color: #f0f0f0;
  border: 1px inset #7b7b7b;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d0d0d0' fill-opacity='0.3' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 5v1H0V0h5z'/%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.5;
    z-index: 0;
  }
`;

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showEntriesWindow, setShowEntriesWindow] = useState(true);
  const [showMainWindow, setShowMainWindow] = useState(true);
  const [showRightWindow, setShowRightWindow] = useState(true);
  const [dimensions, setDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [blogPosts, setBlogPosts] = useState([]);
  const API_URL = process.env.NODE_ENV === 'production' 
  ? 'https://mysiteserver.onrender.com' // Replace with your actual Render URL
  : 'http://localhost:5000';


  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_URL}/api/posts`);
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setBlogPosts(data.posts);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

    // Fetch a single post when selected
    const fetchPostContent = async (slug) => {
      try {
        const response = await fetch(`${API_URL}/api/posts/${slug}`);
        if (!response.ok) {
          throw new Error('Failed to fetch post content');
        }
        const data = await response.json();
        setSelectedPost(data);
      } catch (err) {
        console.error('Error fetching post content:', err);
        setError(err.message);
      }
    };


  // Check screen size on mount and resize
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setDimensions({ width, height });
      setIsMobile(width < 768);
      
      // Auto-adjust windows visibility on smaller screens
      if (width < 768) {
        setShowRightWindow(false);
        if (!selectedPost) {
          setShowMainWindow(true);
          setShowEntriesWindow(true);
        }
      } else {
        setShowEntriesWindow(true);
        setShowMainWindow(true);
        setShowRightWindow(true);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, [selectedPost]);

  const menuItems = ["File", "Edit", "View", "Help"];
  
  // Toggle window visibility
  const toggleEntriesWindow = () => setShowEntriesWindow(!showEntriesWindow);
  const toggleMainWindow = () => setShowMainWindow(!showMainWindow);
  const toggleRightWindow = () => setShowRightWindow(!showRightWindow);

  // Calculate window positions based on screen size
  const getEntriesWindowPosition = () => {
    if (isMobile) {
      return { 
        top: '80px',
        left: '10px',
        width: dimensions.width > 350 ? '250px' : 'calc(100% - 20px)',
        zIndex: showMainWindow ? 1 : 2
      };
    } else {
      return { 
        top: '150px',
        left: '50px',
        width: '250px',
        zIndex: 1
      };
    }
  };

  const getMainWindowPosition = () => {
    if (isMobile) {
      return { 
        top: showEntriesWindow ? '350px' : '80px',
        left: '10px',
        width: 'calc(100% - 20px)',
        height: 'auto',
        zIndex: showEntriesWindow ? 1 : 2
      };
    } else {
      return { 
        top: '100px',
        left: '400px',
        width: '600px',
        zIndex: 1
      };
    }
  };

  const getRightWindowPosition = () => {
    if (isMobile) {
      return { 
        bottom: '10px',
        right: '10px',
        width: 'calc(100% - 20px)',
        zIndex: 1
      };
    } else {
      return { 
        top: '150px',
        right: '50px',
        width: '200px',
        zIndex: 1
      };
    }
  };

  return (
    <>
      <Navbar />
      <div 
        className='min-h-screen w-full overflow-hidden bg-cover bg-center h-screen relative'
        style={{ backgroundImage: `url(${cheetah})` }}
      >
        {/* Semi-transparent overlay to reduce background intensity */}
        <div className="absolute inset-0 bg-black opacity-20 z-0"></div>
        
        {/* Mobile Controls */}
        {isMobile && (
          <div className="fixed top-16 left-0 right-0 z-10 flex justify-around bg-gray-800 bg-opacity-70 p-2">
            <Button onClick={toggleEntriesWindow} className="flex-1 mx-1">
              {showEntriesWindow ? 'Hide Entries' : 'Show Entries'}
            </Button>
            <Button onClick={toggleMainWindow} className="flex-1 mx-1">
              {showMainWindow ? 'Hide Blog' : 'Show Blog'}
            </Button>
            <Button onClick={toggleRightWindow} className="flex-1 mx-1">
              {showRightWindow ? 'Hide Info' : 'Show Info'}
            </Button>
          </div>
        )}

        {/* Entries Window */}
        {showEntriesWindow && (
          <StyledWindow 
            className='absolute'
            style={getEntriesWindowPosition()}
          >
            <WindowHeader 
              style={{ 
                backgroundColor: '#4b00d9', 
                color: 'white',
                display: 'flex',
                justifyContent: 'space-between',
                padding: '4px 8px'
              }}
            >
              <span>Entries</span>
              <Button 
                style={{ width: '25px', height: '25px' }}
                onClick={toggleEntriesWindow}
              >
                <img src={x} alt="Close" className="w-4 h-4" />
              </Button>
            </WindowHeader>
            <WindowContent>
              <ScrollView className='w-full h-[260px] bg-gray-300 p-2'>
                <MenuList
                  style={{
                    width: '100%',}}>
                  {blogPosts.map((post, index) => (
                    <div key={index} className="mb-0">
                      <MenuListItem 
                        onClick={() => {
                          fetchPostContent(post.slug);
                          if (isMobile) {
                            setShowEntriesWindow(false);
                            setShowMainWindow(true);
                          }
                        }}
                        style={{
                          width: '100%',
                          padding: '8px 2px',
                          backgroundColor: selectedPost?.slug === post.slug ? '#c3c7cb' : '#d3d3d3',
                          borderRadius: 0,
                          boxShadow: 'none'
                        }}
                      >
                        <div className="flex flex-row w-full">
                          <div className="text-center text-md font-bold">
                            {post.title}
                          </div>
                          <div className="text-center">
                            <span className="text-[10px] text-blue-700">{post.date}</span>
                          </div>
                        </div>
                      </MenuListItem>
                      {index < blogPosts.length - 1 && <Separator style={{ margin: '2px 0' }} />}
                    </div>
                  ))}
                </MenuList>
              </ScrollView>
            </WindowContent>
          </StyledWindow>
        )}
        
        {/* Main Blog Window */}
        {showMainWindow && (
          <StyledWindow 
            className='absolute'
            style={getMainWindowPosition()}
          >
            <WindowHeader 
              style={{ 
                backgroundColor: '#4b00d9', 
                color: 'white',
                display: 'flex',
                justifyContent: 'space-between',
                padding: '4px 8px'
              }}
            >
              <span>Blog</span>
              <div className='flex space-x-1'>
                <Button style={{ width: '25px', height: '25px' }}>
                  <img src={maximize} alt="Maximize" className="w-4 h-4" />
                </Button>
                <Button style={{ width: '25px', height: '25px' }}>
                  <img src={x} alt="Close" className="w-4 h-4" />
                </Button>
              </div>
            </WindowHeader>

            <MenuBar>
              <div className="flex overflow-x-auto">
                {menuItems.map((item, index) => (
                  <Button 
                    key={index} 
                    variant="menu"
                    className="flex-shrink-0 hover:bg-blue-200 transition-colors"
                    style={{ 
                      fontSize: isMobile ? '12px' : '15px', 
                      minWidth: isMobile ? '40px' : '50px',
                      height: '25px',
                      textAlign: 'left'
                    }}
                  >
                    <span>
                      <span style={{ textDecoration: 'underline' }}>{item[0]}</span>
                      {item.slice(1)}
                    </span>
                  </Button>
                ))}
              </div>
            </MenuBar>

            <WindowContent className='flex justify-center items-center'>
              <ScrollView>
              <ContentArea>
                <div className='h-[300px] md:h-[500px] w-full p-0 relative z-10'>
                  {selectedPost ? (
                    <div className="bg-blue-100 p-4 rounded w-[70%] mx-auto mt-8 border border-gray-400 shadow-md">
                      <h2 className="text-xl font-bold mb-2">{selectedPost.title}</h2>
                      <p className="text-sm mb-4">{selectedPost.date}</p>
                      <div 
                        dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                        className="prose prose-sm"
                      />
                    </div>
                  ) : (
                    <div className="bg-gray-100 p-4 rounded w-[70%] mx-auto mt-8 border border-gray-400 shadow-md flex flex-col items-center justify-center">
                      <div className="w-16 h-16 mb-4 bg-gray-300 border border-gray-400 rounded-full flex items-center justify-center">
                        <span className="text-gray-600 text-2xl">?</span>
                      </div>
                      {isMobile && !showEntriesWindow ? (
                        <Button onClick={toggleEntriesWindow} className="mb-4">
                          Show Entries
                        </Button>
                      ) : (
                        <p className="text-gray-700">Select a post from the entries list</p>
                      )}
                    </div>
                  )}
                </div>
              </ContentArea>
              </ScrollView>
            </WindowContent>
          </StyledWindow>
        )}

        {/* Right Info Window */}
        {showRightWindow && (
          <StyledWindow 
            className='absolute'
            style={getRightWindowPosition()}
          >
            <WindowHeader 
              style={{ 
                backgroundColor: '#4b00d9', 
                color: 'white',
                display: 'flex',
                justifyContent: 'space-between',
                padding: '4px 8px'
              }}
            >
              <span>Blog</span>
              <Button 
                style={{ width: '25px', height: '25px' }}
              >
                <img src={x} alt="Close" className="w-4 h-4" />
              </Button>
            </WindowHeader>
            <WindowContent className="p-2">
              <ScrollView className="h-[400px] bg-gray-300">
                <div className="p-3">
                  <h3 className="font-bold mb-2 text-sm">Blog Status</h3>
                  
                  {/* Progress bar */}
                  <div className="mb-4">
                    <p className="text-xs mb-1">Posts: 8/20</p>
                    <div className="w-full bg-gray-200 rounded h-4 border border-gray-400">
                      <div className="bg-blue-500 h-full rounded" style={{ width: '40%' }}></div>
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div className="mb-4">
                    <p className="text-xs mb-1">Views: 1,234</p>
                    <div className="w-full bg-gray-200 rounded h-4 border border-gray-400">
                      <div className="bg-green-500 h-full rounded" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                  
                  {/* Recent activity */}
                  <h3 className="font-bold mb-2 text-sm">Recent Activity</h3>
                  <div className="border border-gray-400 bg-white p-2 text-xs">
                    <p className="mb-1">• New post added (2 days ago)</p>
                    <p className="mb-1">• Comment received (5 days ago)</p>
                    <p>• Blog redesigned (1 week ago)</p>
                  </div>
                </div>
              </ScrollView>
            </WindowContent>
          </StyledWindow>
        )}
      </div>
    </>
  );
};

export default Blog;