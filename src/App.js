import './App.css';
import Header from './components/Header';
import MiCard from './components/MiCard';
import { info } from './data/dataCards';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from './components/Footer';

function App() { 
  return (
    <div className="App" style={{height:"100vh", background:"linear-gradient(blue, pink)"}}>
      <Header title={"Galería de Imágenes con React"}/>
      <Container>
      <Row>
        {info.map((e, i) => {
        return (
          <Col><MiCard title={e.title} description={e.description} urlImage={e.urlImage}/></Col>
        )
      })}
      </Row>
    </Container>
    <Footer/>




      </div>
  
  );
}

export default App;
