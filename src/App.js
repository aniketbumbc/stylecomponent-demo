import Header from './componets/Header';
import { Container } from './componets/styles/Container.styled';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './componets/styles/Global';

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },

  mobile: '768px',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          <h1> Hello World </h1>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
