import React from 'react';
import Card from 'react-bootstrap/Card';

const LiGenerating = ({ data }) => {
  return (
    <>
      {data && (
        <>
          <li>
            <Card
              border="secondary"
              bg="dark"
              text="white"
              style={{ width: '20rem' }}
            >
              <Card.Img variant="top" src={data.image} alt={data.name} />
              <Card.Header>Nome: {data.name}</Card.Header>
              <Card.Body>
                {data.commonPlaces && (
                  <>
                    <Card.Title> Lugar comuns para se encontrar: </Card.Title>
                    <Card.Text>{data.commonPlaces} </Card.Text>
                  </>
                )}
                {data.description && (
                  <>
                    <Card.Title>Descrição:</Card.Title>
                    <Card.Text>{data.description}</Card.Text>
                  </>
                )}
                {data.drops && (
                  <>
                    <Card.Title>Drops: </Card.Title>
                    <Card.Text>{data.drops}</Card.Text>
                  </>
                )}
              </Card.Body>
            </Card>
          </li>
        </>
      )}
    </>
  );
};

export default LiGenerating;
