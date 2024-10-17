import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { CountryListProps } from '../types';

const CountryList: React.FC<CountryListProps> = ({countries, onSelectCountry}) => {
  return (
    <Container style={{maxHeight: '100vh', overflowY: 'auto'}}>
      <ListGroup style={{maxHeight: '100vh', overflowY: 'auto'}}>
        {countries.map((country) => (
          <ListGroup.Item
            key={country.alpha3Code}
            onClick={() => onSelectCountry(country.alpha3Code)}
          >
            {country.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default CountryList;