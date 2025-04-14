import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Blog from './components/Blog'
import { styleReset } from 'react95'
import original from 'react95/dist/themes/original'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import ScrollViewTest from './components/Test'

/* Original Windows95 font (optional) */
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2'
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2'

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
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  
  ::-webkit-scrollbar-track {
    background-image: linear-gradient(
      45deg,
      ${({ theme }) => theme.material} 25%,
      transparent 25%,
      transparent 75%,
      ${({ theme }) => theme.material} 75%
    ),
    linear-gradient(
      45deg,
      ${({ theme }) => theme.material} 25%,
      transparent 25%,
      transparent 75%,
      ${({ theme }) => theme.material} 75%
    );
    background-color: ${({ theme }) => theme.borderLightest};
    background-size: 4px 4px;
    background-position: 0 0, 2px 2px;
  }
  
  ::-webkit-scrollbar-thumb {
    box-sizing: border-box;
    display: inline-block;
    background: ${({ theme }) => theme.material};
    color: ${({ theme }) => theme.materialText};
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({ theme }) => theme.borderLight};
    border-top-color: ${({ theme }) => theme.borderLight};
    border-right-color: ${({ theme }) => theme.borderDarkest};
    border-bottom-color: ${({ theme }) => theme.borderDarkest};
    box-shadow: inset 1px 1px 0px 1px ${({ theme }) => theme.borderLightest},
                inset -1px -1px 0 1px ${({ theme }) => theme.borderDark};
    outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({ theme }) => theme.material};
  }
  
  ::-webkit-scrollbar-button {
    box-sizing: border-box;
    display: inline-block;
    background: ${({ theme }) => theme.material};
    color: ${({ theme }) => theme.materialText};
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({ theme }) => theme.borderLight};
    border-top-color: ${({ theme }) => theme.borderLight};
    border-right-color: ${({ theme }) => theme.borderDarkest};
    border-bottom-color: ${({ theme }) => theme.borderDarkest};
    box-shadow: inset 1px 1px 0px 1px ${({ theme }) => theme.borderLightest},
                inset -1px -1px 0 1px ${({ theme }) => theme.borderDark};
    display: block;
    outline-offset: -2px;
    height: 26px;
    width: 26px;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0 0;
  }
  
  ::-webkit-scrollbar-button:active {
    background-position: 0 1px;
    border-left-color: ${({ theme }) => theme.borderDarkest};
    border-top-color: ${({ theme }) => theme.borderDarkest};
    border-right-color: ${({ theme }) => theme.borderLight};
    border-bottom-color: ${({ theme }) => theme.borderLight};
    box-shadow: inset 1px 1px 0px 1px ${({ theme }) => theme.borderDark},
                inset -1px -1px 0 1px ${({ theme }) => theme.borderLightest};
  }

  ::-webkit-scrollbar-button:horizontal:increment:start,
  ::-webkit-scrollbar-button:horizontal:decrement:end,
  ::-webkit-scrollbar-button:vertical:increment:start,
  ::-webkit-scrollbar-button:vertical:decrement:end {
    display: none;
  }

  /* Create SVG triangle for scrollbar buttons */
  ::-webkit-scrollbar-button:horizontal:decrement {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg height='26' width='26' viewBox='0 0 26 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(90 13 13)'%3E%3Cpolygon fill='%23000' points='6,10 20,10 13,17'/%3E%3C/g%3E%3C/svg%3E");
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg height='26' width='26' viewBox='0 0 26 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(270 13 13)'%3E%3Cpolygon fill='%23000' points='6,10 20,10 13,17'/%3E%3C/g%3E%3C/svg%3E");
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg height='26' width='26' viewBox='0 0 26 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(180 13 13)'%3E%3Cpolygon fill='%23000' points='6,10 20,10 13,17'/%3E%3C/g%3E%3C/svg%3E");
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg height='26' width='26' viewBox='0 0 26 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(0 13 13)'%3E%3Cpolygon fill='%23000' points='6,10 20,10 13,17'/%3E%3C/g%3E%3C/svg%3E");
  }
`

function App() {
  return (
    <div>
      <ThemeProvider theme={original}>
      <GlobalStyles />
        {/* Changed from BrowserRouter to HashRouter and removed basename */}
        <Router>
          <div className="min-h-screen">
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About/>} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/test" element={<ScrollViewTest />} />
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