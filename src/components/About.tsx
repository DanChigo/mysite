import React from 'react';
import { 
  Window, 
  WindowHeader, 
  WindowContent,
  Button
} from 'react95';
import styled from 'styled-components';

// Import all images
import paperBackground from '../assets/photos/paper.png';
import mushroomGif from '../assets/photos/mushroom.gif';
import girllGif from '../assets/photos/girll.gif';
import daniImage from '../assets/photos/dani.JPG';
import dani3Image from '../assets/photos/dani3.JPG';
import dani4Image from '../assets/photos/dani4.JPG';
import strawberryGif from '../assets/photos/strawberry.gif';

// Styled window component with 3D border effect
const StyledWindow = styled(Window)`
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
`;

// Styled text for the purple labels
const LabelText = styled.span`
  color: #4b00d9;
  font-weight: bold;
`;

const InfoBox = styled.div`
  border: 2px inset #c0c0c0;
  padding: 8px;
  background: white;
  box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.2);
`;

const AboutPage = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center p-4 flex items-center justify-center" 
      style={{ backgroundImage: `url(${paperBackground})` }}
    >
        <div className="absolute top-24 left-4">
            <img 
                src={mushroomGif} 
                alt="PMM"
            />
        </div>
        <div className="absolute mid top-1/2 left-10">
            <img 
                src={girllGif} 
                alt="PMM"
            />
        </div>
      <div className="w-full max-w-4xl">
        {/* Main about window */}
        <StyledWindow className="w-full mb-4">
          <WindowHeader style={{ 
            backgroundColor: '#4b00d9', 
            color: 'white',
            display: 'flex',
            justifyContent: 'space-between',
            padding: '4px 8px'
          }}>
            <span>#ABOUT ME</span>
            <Button style={{ marginLeft: 'auto' }}>
              <span className="close-icon"></span>
            </Button>
          </WindowHeader>
          
          <WindowContent className="bg-[#FFFAF0] p-4">
            <div className="grid grid-cols-4 gap-4">
              {/* Image panel */}
              <div className="col-span-1">
                <InfoBox>
                  <img 
                    src={daniImage} 
                    alt="Character avatar" 
                    className="w-full"
                  />
                  <img src={dani3Image} alt="Character avatar" className="w-full mt-2" />
                  <img src={dani4Image} alt="Character avatar" className="w-full mt-2" />
                </InfoBox>
              </div>
              
              {/* Info panels */}
              <div className="col-span-3 grid gap-4">
                {/* First row */}
                <div className="grid grid-cols-3 gap-4">
                  <InfoBox>
                    <LabelText>NAME:</LabelText> Danielle
                  </InfoBox>
                  
                  <InfoBox>
                    <LabelText>AGE:</LabelText> 20
                  </InfoBox>
                  
                  <InfoBox>
                    <LabelText>LOCATION:</LabelText> USA
                  </InfoBox>
                </div>
                
                {/* Second row */}
                <div className="grid grid-cols-3 gap-4">
                  <InfoBox>
                    <LabelText>MBTI:</LabelText> INFJ
                  </InfoBox>
                  
                  <InfoBox className="col-span-2">
                    <LabelText>ASTRO:</LabelText> ♋♏♏
                  </InfoBox>
                </div>
                
                {/* Bio panel */}
                <InfoBox>
                  <p className="mb-4">
                    Hi!!! I assume you're here because I put this link in a job application.
                    I'm looking for industry experience after an exciting summer of research in Hawaii. I'm a rising senior at Purdue University with a passion for
                    interdisciplinary problem solving. I thrive in collaborative environments and love researching!
                    I have experience in full-stack development, data science, and machine learning.
                  </p>
                  
                  <p className="mb-4">
                    I also love reading, gaming, cooking, and learning new technologies. I'm currently a research assistant
                    on two different projects, on in ML and the other in historical modeling. I'm also a Resident Assistant!
                  </p>
                  
                  <p>
                    I made this site to host my creative projects and showcase my skills. 
                    You can find my GitHub Profile <a 
                      href="https://github.com/DanChigo" 
                      className="text-indigo-600 no-underline hover:underline"
                    >here</a>.
                  </p>
                </InfoBox>
              </div>
            </div>
          </WindowContent>
        </StyledWindow>
        
        {/* Interests window */}
        <StyledWindow className="w-full">
          <WindowHeader style={{ 
            backgroundColor: '#4b00d9', 
            color: 'white',
            display: 'flex',
            justifyContent: 'space-between',
            padding: '4px 8px'
          }}>
            <span>#INTERESTS</span>
            <Button style={{ marginLeft: 'auto' }}>
              <span className='close-icon'></span>
            </Button>
          </WindowHeader>
          
          <WindowContent className="bg-[#FFFAF0] p-4">
            <div className="grid grid-cols-2 gap-4">
              <InfoBox>
                <h3 className="text-xl font-bold text-indigo-600 mb-3">FAVORITE MEDIA</h3>
                <ul className="list-disc pl-5">
                  <li>Their Eyes Were Watching God by Zora Neale Hurston</li>
                  <li>Everything Everywhere All at Once</li>
                  <li>The ArchAndroid by Janelle Monae</li>
                </ul>
              </InfoBox>
              
              <InfoBox>
                <h3 className="text-xl font-bold text-indigo-600 mb-3">HOBBIES:</h3>
                <ul className="list-disc pl-5">
                  <li>Coding</li>
                  <li>Writing</li>
                  <li>Reading</li>
                </ul>
              </InfoBox>
            </div>
          </WindowContent>
        </StyledWindow>
      </div>
      <div className="absolute bottom-4 right-4">
        <img 
          src={strawberryGif} 
          alt="strawberry"
        />
      </div>
    </div>
  );
};

export default AboutPage;