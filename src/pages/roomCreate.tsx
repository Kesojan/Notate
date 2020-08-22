import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import Col from '@paljs/ui/Col';
import Row from '@paljs/ui/Row';
// import { Card, CardBody } from '@paljs/ui/Card';
// import { Button } from '@paljs/ui/Button';
import { InputGroup } from '@paljs/ui/Input';
import { Link } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.css';
import { Form, Card, Button } from 'react-bootstrap';
import pic4 from '../images/undraw_online_learning_ao11.png';

const CreateCard = styled(Card)`
  height: 395px;
`;

const CardImg = styled.img`
  width: 100%;
`;

const CardInput = styled.input`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const CardButton = styled(Button)`
  margin-bottom: 20px;
`;

const ErrorText = styled.div`
  color: red;
`;

const SuccessText = styled.div`
  color: green;
`;

const RoomCreate = () => {
  let [input, setInput] = useState('');
  let [error, setError] = useState('');
  let [success, setSuccess] = useState(false);

  let onCreate = () => {
    var data = JSON.stringify({
      name: input,
    });
    if (input) {
      fetch('https://api.daily.co/v1/rooms', {
        method: 'POST',
        headers: new Headers({
          Authorization: `Bearer ${process.env.API_KEY}`,
          'Content-Type': 'application/json',
        }),
        body: data,
      }).then((response) => {
        if (response.ok) {
          setSuccess(true);
          setError('');
        } else {
          setSuccess(false);
          setError('Could not create your call. A call with that name may already exist.');
          return Promise.reject(response);
        }
      });
    } else {
      setError('Please enter a name.');
    }
  };
  return (
    <div>
      <Row>
        <h1>Start a Call</h1>
      </Row>
      <br></br>
      <Row>
        <Col breakPoint={{ xs: 4 }}>
          <CardImg src={pic4} />
        </Col>
        <Col breakPoint={{ xs: 8 }}>
          <CreateCard>
            <Card.Body>
              <form>
                <h6>Enter your call name:</h6>
                <InputGroup>
                  <CardInput
                    type="email"
                    placeholder="Call Name"
                    value={input}
                    onInput={(e) => {
                      setInput(e.target.value);
                      setError('');
                      setSuccess(false);
                    }}
                  />
                </InputGroup>

                <CardButton
                  type="button"
                  onClick={() => {
                    onCreate();
                  }}
                >
                  Create
                </CardButton>
                {error ? <ErrorText>{error}</ErrorText> : null}
                {success ? (
                  <div>
                    <SuccessText>Your call was successfully created!</SuccessText>
                    <Link to={`/chosenRoom`} state={{ roomName: `${input}` }}>
                      Take me there
                    </Link>
                  </div>
                ) : null}
              </form>
            </Card.Body>
          </CreateCard>
        </Col>
      </Row>
    </div>
  );
};

export default RoomCreate;
