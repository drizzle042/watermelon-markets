import { createTheme, ThemeProvider } from '@mui/material/styles';
import { HashRouter, Route, Routes } from "react-router-dom";
import SalesWizardBot from './Pages/SalesWizardBot/SalesWIzardBot';
import SalesWizard from './Pages/SalesWizard/SalesWizard';
import Sales from './Pages/Sales/Sales';


const App = () => {
  const theme = createTheme({
    typography: {
      fontFamily: "'Dongle', sans-serif",
      fontSize: '32px',
    },
  })
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Routes>
          <Route element={<SalesWizardBot />} path="" />
          <Route element={<SalesWizard />} path="form" />
          <Route element={<Sales />} path="products" />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
