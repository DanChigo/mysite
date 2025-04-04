import React, { useState } from 'react';
import { 
  Window, 
  WindowHeader, 
  WindowContent,
  Button
} from 'react95';
import styled from 'styled-components';

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

const IconImage = styled.img`
  width: 32px;
  height: 32px;
  margin-bottom: 4px;
  transition: transform 0.1s;
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
      id: 'project1',
      title: 'Project A',
      description: 'This is a full-stack web application built with React and Node.js.',
      image: '/api/placeholder/500/300', // Replace with your project image
      link: '#',
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 'project2',
      title: 'Project B',
      description: 'A machine learning project focused on natural language processing.',
      image: '/api/placeholder/500/300',
      link: '#',
      technologies: ['Python', 'TensorFlow', 'NLTK']
    },
    {
      id: 'project3',
      title: 'Project C',
      description: 'Mobile app developed for Android and iOS platforms.',
      image: '/api/placeholder/500/300',
      link: '#',
      technologies: ['React Native', 'Firebase']
    },
    {
      id: 'project4',
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
    'project1': 'https://win98icons.alexmeub.com/icons/png/notepad-1.png',
    'project2': 'https://win98icons.alexmeub.com/icons/png/msie1-2.png',
    'project3': 'https://win98icons.alexmeub.com/icons/png/winamp-1.png',
    'project4': 'https://win98icons.alexmeub.com/icons/png/paint_old-0.png',
    'project5': 'https://win98icons.alexmeub.com/icons/png/cd_drive-4.png',
    'project6': 'https://win98icons.alexmeub.com/icons/png/console_prompt-0.png',
  };

  return (
    <div className="h-screen w-full flex flex-col overflow-hidden">
      {/* Projects "desktop" */}
      <DesktopContainer>
        {/* Project Icons - displayed in a row at the top */}
        <div className="flex flex-wrap pl-4 pt-14"> {/* Changed pt-4 to pt-14 for more space */}
            {projects.map((project) => (
                <DesktopIcon 
                key={project.id}
                onClick={() => setOpenProject(project.id)}
                >
                <IconImage 
                    className="icon-image"
                    src={tempIcons[project.id]} 
                    alt={project.title}
                />
                <IconLabel>{project.title}</IconLabel>
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
                <Button 
                  style={{ marginLeft: 'auto' }}
                  onClick={() => setInfoVisible(false)}
                >
                  <span>×</span>
                </Button>
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
                  <Button 
                    style={{ marginLeft: 'auto' }}
                    onClick={() => setOpenProject(null)}
                  >
                    <span>×</span>
                  </Button>
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