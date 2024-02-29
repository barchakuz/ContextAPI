import './App.css'
import { ThemeProvider } from './Context/ThemeContext'
import InfoPage from './InfoPage'
import Checkbox from './Checkbox'

function App() {
  // Assuming you need to pass these default values initially
  const defaultThemeContext = {
    thememode: 'light',
    darkmode: () => {},
    lightmode: () => {}
  };

  return (
    <>
      {/* Pass the value prop to ThemeProvider */}
      <ThemeProvider value={defaultThemeContext}>
        <InfoPage />
        <Checkbox />
      </ThemeProvider>
    </>
  )
}

export default App
