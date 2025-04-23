 
import './App.css';
import { ThemeProvider } from '@emotion/react';
import { colors, createTheme, CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';
// import { theme } from './tailwind.config';
import { SnackbarProvider } from 'notistack';
import Router from './AppRouter';

// const MuiTheme = createTheme({
//   palette: {
//     mode: "dark",
//   },
//   components: {
//     MuiDataGrid: {
//       styleOverrides: {
//         root: {
//           border: 1,
//           borderColor: theme.extend.colors.primary,
//           borderStyle: "solid",
//           borderRadius: 10,
//           boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
//           backgroundColor: theme.extend.colors.primary,
//           color: "#C1C2C5",
//           padding: 10,
//         },
//       },
//     },
//   },
// });

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: (themeParam) => ({
        body: null,
      }),
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme/>
        <SnackbarProvider maxSnack={3}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </SnackbarProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
