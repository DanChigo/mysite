import React, { useState } from 'react';
import { 
  Window, 
  WindowHeader, 
  WindowContent, 
  Button, 
  Toolbar,
  AppBar
} from 'react95';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import backgroundImage from '../assets/photos/IMG_0400.JPG';
import {FolderOpen, InfoBubble, Write1} from '@react95/icons';


export function Home() {
  const [windows, setWindows] = useState({
    welcome: { open: true, minimized: false, zIndex: 4 },
    about: { open: true, minimized: false, zIndex: 3 },
    projects: { open: true, minimized: false, zIndex: 2 },
  });

  const toggleWindow = (name) => {
    setWindows({
      ...windows,
      [name]: { 
        ...windows[name], 
        open: !windows[name].open,
        minimized: false
      }
    });
  };

  const minimizeWindow = (name) => {
    setWindows({
      ...windows,
      [name]: { 
        ...windows[name], 
        minimized: !windows[name].minimized 
      }
    });
  };

  const bringToFront = (name) => {
    const maxZ = Math.max(...Object.values(windows).map(w => w.zIndex));
    setWindows({
      ...windows,
      [name]: { 
        ...windows[name], 
        zIndex: maxZ + 1 
      }
    });
  };

  return (
    <div className="h-screen w-full overflow-hidden relative bg-cover bg-center
    "
    style={{ backgroundImage: `url(${backgroundImage})` }}>
      {/* Desktop Icons */}
      <div className="fixed top-20 left-4 flex flex-col">
        <div 
          className="flex flex-col items-center mb-4 cursor-pointer"
          onClick={() => {
            toggleWindow('about');
            bringToFront('about');
          }}
        >
          <div className="w-9 h-9 flex items-center justify-center mb-1">
            <InfoBubble variant="32x32_4"/>
          </div>
          <div className="text-white text-xs shadow-sm bg-blue-900 bg-opacity-70 px-1">
            About
          </div>
        </div>

        <div 
          className="flex flex-col items-center mb-4 cursor-pointer"
          onClick={() => {
            toggleWindow('projects');
            bringToFront('projects');
          }}
        >
          <div className="w-9 h-9 flex items-center justify-center mb-1">
            <FolderOpen variant="32x32_4"/>
          </div>
          <div className="text-white text-xs shadow-sm bg-blue-900 bg-opacity-70 px-1">
            Projects
          </div>
        </div>


        <Link to="/blog" className="flex flex-col items-center mb-4 no-underline">
          <div className="w-9 h-9 flex items-center justify-center mb-1">
          <Write1 variant="32x32_4"/>
          </div>
          <div className="text-white text-xs shadow-sm bg-blue-900 bg-opacity-70 px-1">
            Blog
          </div>
        </Link>
      </div>

      {/* Welcome Window */}
      {windows.welcome.open && !windows.welcome.minimized && (
        <Window 
          style={{ 
            width: 600, 
            height: 400,
            position: 'absolute', 
            top: '50%', 
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: windows.welcome.zIndex
          }}
          onClick={() => bringToFront('welcome')}
        >
          <WindowHeader active style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>Welcome to DanielleOS</span>
            <div>
            <Button onClick={() => toggleWindow('about')}>
              <span className="close-icon"></span>
            </Button>
            </div>
          </WindowHeader>
          <WindowContent>
            <div className="text-center p-6">
              <h1 className="text-2xl font-bold mb-3">
                Danielle Ejiogu
              </h1>
              <p className="text-lg mb-3">Aspiring Software Engineer</p>
              <p className="italic mb-8">
                Full-Time Student, Nostalgia Fetishist, and Research Assistant
              </p>
              <Button onClick={() => toggleWindow('welcome')}>OK</Button>
            </div>
          </WindowContent>
        </Window>
      )}

      {/* About Window */}
      {windows.about.open && !windows.about.minimized && (
        <Window 
          style={{ 
            width: 500, 
            height: 300,
            position: 'absolute', 
            top: 150, 
            left: 400,
            zIndex: windows.about.zIndex
          }}
          onClick={() => bringToFront('about')}
        >
          <WindowHeader style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>About Me</span>
            <div>
            <Button onClick={() => minimizeWindow('about')}>
              <span className="close-icon"></span>
            </Button>
            </div>
          </WindowHeader>
          <WindowContent>
            <p className="mb-3">
              Full-stack developer with a passion for creating user-friendly applications and solving complex problems.
            </p>
            <p className="font-bold mb-2">Skills:</p>
            <div className="grid grid-cols-2 gap-1 mb-4">
              <Button size="sm" style={{ fontSize: '12px' }}>JavaScript</Button>
              <Button size="sm" style={{ fontSize: '12px' }}>React</Button>
              <Button size="sm" style={{ fontSize: '12px' }}>TypeScript</Button>
              <Button size="sm" style={{ fontSize: '12px' }}>Node.js</Button>
              <Button size="sm" style={{ fontSize: '12px' }}>Scala</Button>
            </div>
            <div className="flex justify-end">
              <Link to="/about">
                <Button>Learn More →</Button>
              </Link>
            </div>
          </WindowContent>
        </Window>
      )}

      {/* Projects Window */}
      {windows.projects.open && !windows.projects.minimized && (
        <Window 
          style={{ 
            width: 380, 
            position: 'absolute', 
            top: 150, 
            right: 100,
            zIndex: windows.projects.zIndex
          }}
          onClick={() => bringToFront('projects')}
        >
          <WindowHeader style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>My Projects</span>
            <div>
            <Button onClick={() => minimizeWindow('projects')}>
              <span className="close-icon"></span>
            </Button>
            </div>
          </WindowHeader>
          <WindowContent>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div>
                <p className="font-bold mb-1">Computational Model of Yapese Navigation</p>
                <div className="w-full h-20 bg-gray-300 flex items-center justify-center border border-black">
                  [Preview]
                </div>
              </div>
              <div>
                <p className="font-bold mb-1">Architechural Optimizations for DP-SGD</p>
                <div className="w-full h-20 bg-gray-300 flex items-center justify-center border border-black">
                  [Preview]
                </div>
              </div>
            </div>
            <p className="mb-4">
              Check out my latest projects, from web applications to innovative software solutions.
            </p>
            <div className="flex justify-end">
              <Link to="/projects">
                <Button>View All Projects →</Button>
              </Link>
            </div>
          </WindowContent>
        </Window>
      )}

      {/* AppBar at bottom */}
      <AppBar style={{ position: 'fixed', bottom: 0, top: 'auto' }}>
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <div className="flex items-center">
            <Button style={{ fontWeight: 'bold', marginRight: '4px' }}>
              Start
            </Button>
            {Object.entries(windows).map(([name, { open }]) => (
              open && (
                <Button 
                  key={name}
                  active={!windows[name].minimized}
                  onClick={() => {
                    if (windows[name].minimized) {
                      minimizeWindow(name);
                      bringToFront(name);
                    } else {
                      minimizeWindow(name);
                    }
                  }}
                  style={{ fontSize: '12px', marginRight: '4px' }}
                >
                  {name === 'welcome' ? 'Welcome' : 
                   name === 'about' ? 'About Me' : 
                   name === 'projects' ? 'My Projects' : 
                   'Connect With Me'}
                </Button>
              )
            ))}
          </div>
          <div className="text-xs">
            {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: true})}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}