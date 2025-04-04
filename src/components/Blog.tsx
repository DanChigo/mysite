import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Maximize2, Minimize2, X } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Best Foot Forward: My time with Project oCEANIC in Hawaii",
    excerpt: "Learn how to set up a new React project with TypeScript and start building type-safe applications.",
    date: "2025-03-01"
  },
  {
    id: 2,
    title: "Building Modern UIs with Tailwind CSS",
    excerpt: "Explore the power of utility-first CSS with Tailwind and create beautiful user interfaces.",
    date: "2025-02-28"
  },
  // Add more blog posts here
];

export default function Blog() {
  const [activePost, setActivePost] = useState<number | null>(null);
  const [windowStates, setWindowStates] = useState<{[key: number]: {minimized: boolean, maximized: boolean}}>({});
  const [windowPositions, setWindowPositions] = useState<{[key: number]: {top: number, left: number, zIndex: number}}>({});

  // Initialize window states and positions when a post is opened
  const openPost = (postId: number) => {
    // Calculate a position that staggers windows
    const positionOffset = Object.keys(windowPositions).length * 25;
    const newTop = 100 + (positionOffset % 150);
    const newLeft = 100 + (positionOffset % 200);
    
    // Get highest z-index
    const allZIndices = Object.values(windowPositions).map(pos => pos.zIndex);
    const highestZ = allZIndices.length > 0 ? Math.max(...allZIndices) : 0;
    
    setActivePost(postId);
    setWindowStates({
      ...windowStates,
      [postId]: { minimized: false, maximized: false }
    });
    setWindowPositions({
      ...windowPositions,
      [postId]: { top: newTop, left: newLeft, zIndex: highestZ + 1 }
    });
  };

  const closePost = (postId: number) => {
    const newWindowStates = { ...windowStates };
    delete newWindowStates[postId];
    
    const newWindowPositions = { ...windowPositions };
    delete newWindowPositions[postId];
    
    setWindowStates(newWindowStates);
    setWindowPositions(newWindowPositions);
    
    if (activePost === postId) {
      setActivePost(null);
    }
  };

  const minimizePost = (postId: number) => {
    setWindowStates({
      ...windowStates,
      [postId]: { ...windowStates[postId], minimized: !windowStates[postId].minimized }
    });
  };

  const maximizePost = (postId: number) => {
    setWindowStates({
      ...windowStates,
      [postId]: { ...windowStates[postId], maximized: !windowStates[postId].maximized }
    });
  };

  const bringToFront = (postId: number) => {
    const allZIndices = Object.values(windowPositions).map(pos => pos.zIndex);
    const highestZ = Math.max(...allZIndices);
    
    setWindowPositions({
      ...windowPositions,
      [postId]: { ...windowPositions[postId], zIndex: highestZ + 1 }
    });
    setActivePost(postId);
  };

  return (
    <div className="min-h-screen bg-blue-100 pt-16 px-4 pb-12 font-mono">
      {/* Desktop Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-blue-200 to-blue-400 z-0 pointer-events-none"></div>
      
      {/* Blog Directory Window */}
      <div className="mx-auto max-w-4xl bg-gray-200 border border-gray-400 shadow-lg mt-8">
        <div className="bg-blue-800 text-white font-bold px-2 py-1 flex justify-between items-center">
          <span>Blog Directory</span>
          <div className="flex">
            <span className="mr-2 cursor-pointer">_</span>
            <span className="cursor-pointer">×</span>
          </div>
        </div>
        
        <div className="p-4">
          <h1 className="text-xl font-bold mb-4">My Blog Posts</h1>
          
          <div className="grid gap-4">
            {blogPosts.map(post => (
              <div 
                key={post.id} 
                className="bg-white border border-gray-400 p-3 cursor-pointer hover:bg-gray-100"
                onDoubleClick={() => openPost(post.id)}
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-center">
                    <div className="w-8 h-8 mr-3 bg-gray-300 border border-gray-400 flex items-center justify-center text-xs">
                      TXT
                    </div>
                    <div>
                      <h2 className="font-bold text-sm">{post.title}</h2>
                      <p className="text-xs text-gray-600">Last modified: {post.date}</p>
                    </div>
                  </div>
                  <button 
                    className="bg-gray-300 text-xs px-2 py-0.5 border border-gray-400 hover:bg-gray-400"
                    onClick={(e) => {
                      e.stopPropagation();
                      openPost(post.id);
                    }}
                  >
                    Open
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 text-sm text-gray-600">
            <p>Double-click on a post to open it, or click the "Open" button.</p>
          </div>
        </div>
      </div>
      
      {/* Blog Post Windows */}
      {Object.entries(windowStates).map(([postIdStr, state]) => {
        const postId = parseInt(postIdStr);
        const post = blogPosts.find(p => p.id === postId);
        const position = windowPositions[postId];
        
        if (!post || !position || state.minimized) return null;
        
        return (
          <div 
            key={postId}
            className={`absolute bg-gray-200 border border-gray-400 shadow-lg ${state.maximized ? 'inset-4 mt-8 mb-12' : ''}`}
            style={{ 
              top: state.maximized ? undefined : position.top, 
              left: state.maximized ? undefined : position.left, 
              width: state.maximized ? undefined : '500px',
              height: state.maximized ? undefined : 'auto',
              zIndex: position.zIndex
            }}
            onClick={() => bringToFront(postId)}
          >
            <div className="bg-blue-800 text-white font-bold px-2 py-1 flex justify-between items-center cursor-move">
              <span>{post.title}</span>
              <div className="flex">
                <span className="mr-2 cursor-pointer" onClick={() => minimizePost(postId)}>_</span>
                <span className="mr-2 cursor-pointer" onClick={() => maximizePost(postId)}>
                  {state.maximized ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
                </span>
                <span className="cursor-pointer" onClick={() => closePost(postId)}>×</span>
              </div>
            </div>
            
            <div className="p-4 max-h-[70vh] overflow-auto">
              <div className="font-bold mb-2">{post.title}</div>
              <div className="text-xs text-gray-600 mb-4">Date: {post.date}</div>
              
              <div className="bg-white border border-gray-400 p-3 mb-4">
                <p className="mb-4">{post.excerpt}</p>
                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl sit amet nisl.</p>
                <p>Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl sit amet nisl.</p>
              </div>
              
              <div className="flex justify-between">
                <Link 
                  to={`/blog/${postId}`} 
                  className="bg-gray-300 border border-gray-400 px-3 py-1 text-sm rounded shadow-sm hover:bg-gray-400"
                >
                  Read Full Article
                </Link>
                <button 
                  className="bg-gray-300 border border-gray-400 px-3 py-1 text-sm rounded shadow-sm hover:bg-gray-400"
                  onClick={() => closePost(postId)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        );
      })}
      
      {/* Taskbar */}
      <div className="fixed bottom-0 left-0 right-0 h-8 bg-gray-200 border-t border-gray-400 flex items-center px-2 z-50">
        <div className="mr-4 font-bold px-2 py-1 bg-blue-100 border border-gray-400 rounded">
          Start
        </div>
        
        {/* Window tasks in taskbar */}
        {Object.entries(windowStates).map(([postIdStr, state]) => {
          const postId = parseInt(postIdStr);
          const post = blogPosts.find(p => p.id === postId);
          
          if (!post) return null;
          
          return (
            <div 
              key={postId}
              className={`px-2 py-1 text-xs border border-gray-400 mx-1 cursor-pointer max-w-[150px] truncate ${activePost === postId ? 'bg-blue-100' : 'bg-gray-300'}`}
              onClick={() => {
                if (state.minimized) {
                  minimizePost(postId);
                }
                bringToFront(postId);
              }}
            >
              {post.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}