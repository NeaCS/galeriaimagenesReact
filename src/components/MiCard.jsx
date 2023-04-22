import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function MiCard(props) {
 const {title, urlImage, description} = props
  return (
    <Card style={{ width: '18rem', height:"19rem"}} className="mb-5">
        <div style={{height:"60%"}}>
      <Card.Img style={{maxWidth: "100%", maxHeight:"100%",boxSizing:"border-box"}}variant="top" src={urlImage} /></div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MiCard;