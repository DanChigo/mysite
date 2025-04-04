import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import  Navbar  from './components/Navbar'
import { Home } from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Blog from './components/Blog'
import { styleReset } from 'react95'
import original from 'react95/dist/themes/original';
import { createGlobalStyle, ThemeProvider } from 'styled-components'

/* Original Windows95 font (optional) */
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
`;

function App() {
  return (
    <div>
    <GlobalStyles />
    <ThemeProvider theme={original}>
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />

            {/* Add other routes when they're ready */}
          </Routes>
        </main>
      </div>
    </Router>
    </ThemeProvider>
    </div>
  )
}

export default App