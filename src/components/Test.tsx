import React from 'react';
import { Window, WindowHeader, WindowContent, ScrollView } from 'react95';

const ScrollViewTest = () => {
  return (
    <div style={{ padding: '50px' }}>
      <Window style={{ width: '350px' }}>
        <WindowHeader>ScrollView Test</WindowHeader>
        <WindowContent>
          <ScrollView style={{ width: '300px', height: '200px' }}>
            <div>
              <p style={{ width: 400 }}>
                React95 is the best UI library ever created
              </p>
              <p>React95 is the best UI library ever created</p>
              <p>React95 is the best UI library ever created</p>
              <p>React95 is the best UI library ever created</p>
              <p>React95 is the best UI library ever created</p>
              <p>React95 is the best UI library ever created</p>
              <p>React95 is the best UI library ever created</p>
              <p>React95 is the best UI library ever created</p>
              <p>React95 is the best UI library ever created</p>
            </div>
          </ScrollView>
        </WindowContent>
      </Window>
    </div>
  );
};

export default ScrollViewTest;