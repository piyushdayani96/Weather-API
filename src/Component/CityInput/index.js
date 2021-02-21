import React, { useState } from 'react';
import {Form,Button, Container} from "react-bootstrap";
const CityInput = ({city,setCity, fetchCityWeather}) => {
  
    const [error,setError]=React.useState("");

    const handleInputChange=(event)=>{
        setCity(event.target.value);
    };

    const handleSubmit=()=>{
        if(!city){
          setError("City field is empty");
        }
        else{
           fetchCityWeather();
        }
    }

    return (
        <Container>
        <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>City</Form.Label>
    <Form.Control value={city} type="text" placeholder="Enter City" onChange={handleInputChange}/>
    <p className="text-danger">{error}</p>
    {/* <Form.Text className="text-muted">
      We'll never share your data with anyone else.
    </Form.Text> */}
  </Form.Group>

  
  <Button variant="primary" onClick={handleSubmit}>
    Submit
  </Button>
</Form>
</Container>
    );
};

export default CityInput;