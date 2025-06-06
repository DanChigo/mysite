import React, { useState } from 'react';
import { 
  Window, 
  WindowHeader, 
  WindowContent,
  Button
} from 'react95';
import Navbar from './Navbar'
import folder from '@react95/icons'
import styled from 'styled-components';
import {FolderOpen, InfoBubble, Pbrush1, ReaderCd, HardwareDiag ,Notepad, Progman20} from '@react95/icons';
import { Info } from 'lucide-react';
import x from '../assets/photos/x.png';
import maximize from '../assets/photos/maximize.png';
import oCEANIC from '../assets/photos/oceanic.png';
import dpsgd from '../assets/photos/average_percent_difference.png';
// Styled window component with 3D border effect
const StyledWindow = styled(Window)`
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
`;

// Styled desktop icon
const DesktopIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px;
  cursor: pointer;
  width: 75px;
  
  &:hover {
    opacity: 0.8;
  }
  
  &:active .icon-image {
    transform: scale(0.95);
  }
`;

const IconLabel = styled.div`
  color: white;
  text-shadow: 1px 1px 1px black;
  padding: 2px;
  font-size: 11px;
  text-align: center;
  max-width: 100%;
`;

const DesktopContainer = styled.div`
  width: 100%;
  height: calc(100vh - 30px); /* Full height minus taskbar */
  background-color: #000080;
  position: relative;
  overflow: hidden;
`;

const ProjectsPage = () => {
  // State to manage which project window is open
  const [openProject, setOpenProject] = useState(null);
  const [infoVisible, setInfoVisible] = useState(true);

  // Project data
  const projects = [
    {
      id: 'Project oCEANIC',
      title: 'Project oceanic: Computing Environmental Adaptation and Navigation ​in Island Communities',
      description: 'A full-stack website that gives users access to a agent based model of Yapese Navigation.',
      image: oCEANIC, // Replace with your project image
      link: 'https://project-oceanic.vercel.app/',
      technologies: ['React', 'Node.js', 'Flask', 'Python', 'MERRA-2', 'ARCGIS']
    },
    {
      id: 'DP-SGD Optimization',
      title: 'GPU Architectural Optimizations for Differentially Private Stochastic Gradient Descent ',
      description: 'A machine learning project focused on balancing privacy with performance.',
      image: dpsgd,
      link: 'https://purdue0-my.sharepoint.com/:p:/g/personal/dejiogu_purdue_edu/EWnCmbBHivtJs5_L3IGI9VQBsLatzMohEcjs23jJ7kvC_g?e=e5vzAJ',
      technologies: ['PyTorch', 'Accel-Sim', 'C++']
    },
    {
      id: 'Stock Tracker',
      title: 'Project C',
      description: 'Mobile app developed for Android and iOS platforms.',
      image: '/api/placeholder/500/300',
      link: '#',
      technologies: ['Python', 'Firebase']
    },
    {
      id: 'MiniScala Compiler',
      title: 'Project D',
      description: 'Data visualization dashboard for analyzing historical data.',
      image: '/api/placeholder/500/300',
      link: '#',
      technologies: ['D3.js', 'React', 'Python']
    },
    {
      id: 'project5',
      title: 'Project E',
      description: 'Browser extension that enhances productivity.',
      image: '/api/placeholder/500/300',
      link: '#',
      technologies: ['JavaScript', 'Chrome API']
    },
    {
      id: 'project6',
      title: 'Project F',
      description: 'Command-line tool for automating repetitive tasks.',
      image: '/api/placeholder/500/300',
      link: '#',
      technologies: ['Node.js', 'Shell Scripting']
    }
  ];

  // Windows 98 icons
  const tempIcons = {
    'Project oCEANIC': <Notepad variant="32x32_4" />,
    'DP-SGD Optimization': <HardwareDiag variant="32x32_4" />,
    'Stock Tracker': <Progman20 variant="32x32_4" />,
    'MiniScala Compiler': <Pbrush1 variant="32x32_4" />,
    'project5': <ReaderCd variant="32x32_4" />,
    'project6': <InfoBubble variant="32x32_4" />,
  };

  return (
    <div className="h-screen w-full flex flex-col overflow-hidden">
      <Navbar /> {/* Navbar component */}
      {/* Projects "desktop" */}
      <DesktopContainer>
        {/* Project Icons - displayed in a row at the top */}
        <div className="flex flex-wrap pl-4 pt-14"> {/* Changed pt-4 to pt-14 for more space */}
            {projects.map((project) => (
                <DesktopIcon 
                key={project.id}
                onClick={() => setOpenProject(project.id)}
                >
                <div>{tempIcons[project.id]}</div>
                <IconLabel>{project.id}</IconLabel>
                </DesktopIcon>
            ))}
            </div>

        {/* Info Window - centered near the top */}
        {infoVisible && (
          <div className="absolute top-24 right-0 left-0 mx-auto" style={{ width: '450px' }}>
            <StyledWindow>
              <WindowHeader style={{ 
                backgroundColor: '#9370DB', 
                color: 'white',
                display: 'flex',
                justifyContent: 'space-between',
                padding: '4px 8px'
              }}>
                <span>#PROJECTS</span>
                <div className='flex space-x-1'>
            <Button
              style={{ width: '25px', height: '25px' }}>
              <img src={maximize} alt="Maximize" className="w-4 h-4" />
            </Button>
            <Button 
              style ={{ width: '25px', height: '25px' }}
              onClick={() => setInfoVisible(false)}
              >
              <img src={x} alt="Close" className="w-4 h-4" />
            </Button>
            </div>
              </WindowHeader>
              
              <WindowContent className="bg-white p-4">
                <p className="text-center mb-2">
                  Click on any project icon to learn more about it!
                </p>
                <p className="text-center text-gray-600 text-sm">
                  These projects showcase my skills and experience as a developer.
                </p>
              </WindowContent>
            </StyledWindow>
          </div>
        )}

        {/* Project detail windows */}
        {projects.map((project) => (
          openProject === project.id && (
            <div key={project.id} className="absolute inset-0 flex items-center justify-center">
              <StyledWindow className="w-4/5 max-w-4xl">
                <WindowHeader style={{ 
                  backgroundColor: '#9370DB', 
                  color: 'white',
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '4px 8px'
                }}>
                  <span>{project.title}</span>
                  <div className='flex space-x-1'>
            <Button
              style={{ width: '25px', height: '25px' }}>
              <img src={maximize} alt="Maximize" className="w-4 h-4" />
            </Button>
            <Button 
              style ={{ width: '25px', height: '25px' }}
              onClick={() => setOpenProject(null)}
              >
              <img src={x} alt="Close" className="w-4 h-4" />
            </Button>
            </div>
                </WindowHeader>
                
                <WindowContent className="bg-white p-4">
                  <div className="flex flex-col">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover mb-4 border border-gray-400"
                    />
                    
                    <p className="mb-4">{project.description}</p>
                    
                    <div className="mb-4">
                      <strong>Technologies:</strong>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.technologies.map((tech, index) => (
                          <span 
                            key={index}
                            className="bg-gray-200 px-2 py-1 text-sm rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button 
                        onClick={() => window.open(project.link, '_blank')}
                        style={{ marginRight: '8px' }}
                      >
                        View Project
                      </Button>
                      <Button onClick={() => setOpenProject(null)}>
                        Close
                      </Button>
                    </div>
                  </div>
                </WindowContent>
              </StyledWindow>
            </div>
          )
        ))}
      </DesktopContainer>

      {/* Taskbar */}
      <div className="h-10 bg-gray-300 border-t-2 border-white flex items-center px-2">
        <Button className="mr-3">
          <span className="flex items-center text-sm">
            <img 
              src="https://win98icons.alexmeub.com/icons/png/windows-0.png" 
              alt="Start"
              className="w-5 h-5 mr-1"
            />
            Start
          </span>
        </Button>
        <div className="border-l-2 border-gray-500 h-6 mx-2"></div>
        {openProject && (
          <div className="bg-gray-400 border-t-2 border-white border-l-2 px-2 py-1 flex items-center text-sm">
            <img 
              src={tempIcons[openProject]} 
              alt="Running"
              className="w-4 h-4 mr-1"
            />
            {projects.find(p => p.id === openProject)?.title}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;