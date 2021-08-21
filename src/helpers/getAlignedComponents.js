import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function getAlignedComponents(components) {
  return (
    <Container fluid>
      <Row className='App'>
        {components.map((component, index) => (
          <Col
            xs={12}
            md={index === components.length - 1 && index % 2 === 0 ? 12 : 6}
            key={index}
            style={{
              border: 'solid',
              borderRight:
                index === components.length - 1 || index % 2 !== 0
                  ? 'solid'
                  : 'none'
            }}
          >
            {component}
          </Col>
        ))}
      </Row>
    </Container>
  );
}
