import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './Home.scss';

const onClickHandle = (event:any)=>{
    console.log(event.target);
}

function Home() {
    const [namePlayer, setNamePlayer] = useState("")
    const [hash, setHash] = useState("")

    const updateNamePlayer = (event:any) => {
        setNamePlayer(event.target.value)
    }

    const getHash = () => {
        fetch(`${process.env.REACT_APP_API_URL}campaign/new`,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ namePlayer: namePlayer })
        })
            .then((data:any) => {
                console.log(data);
                console.log(data.data.hash);
                setHash(data.data.hash)
            } )
            .catch(error => console.log(error) )
    }

    return (
        <Container className="main-container">
            <Row>
                <Col xs="12">
                    <Card>
                        <Card.Body>
                            <label>
                                Nombre: 
                                <input type="text" value={namePlayer} onChange={updateNamePlayer}/>
                            </label>
                            <button
                                onClick={getHash}
                            >fetch</button>
                            <p>{process.env.REACT_APP_API_URL}</p>
                            <button
                                onClick={onClickHandle}>
                                    <Link to={{
                                        pathname:`/campaign/${hash}`,
                                        state: {
                                            namePlayer: namePlayer,
                                        }
                                    }} >
                                        ¡Comenzar partida!
                                    </Link>
                                </button>
                            <p>{namePlayer}</p>
                            <p>{hash}</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>            
    );
}

export default Home;
