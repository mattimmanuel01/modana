
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "../components/image"

const Bebas = () => {
    return (
        <>
        <style type="text/css">
            {`
            .btn-daftar {
                color: #fff;
                background-color: #E37535;
                border-color: #E37535;
                width:300px;
                border-radius:50px;
                font-weight:bold;
                text-transform:uppercase;
                font-size:12px;
                padding:0 15px;
                height:40px;

            }
            .btn-daftar:hover {
                background-color: transparent;

                color: #40a9ff;
                border-color: #40a9ff;
                }
                .Bebas{
                font-size:64px;
                font-weight:bold;
                color: rgb(36, 49, 116);
                line-height: 1.0625;
                letter-spacing: -0.009em;
                }
                }
            `}
            </style>
            <Container fluid="true">
            <Row>
            <Col>
                <div>
                    <p className="Bebas">Bebaskan diri Anda untuk lebih produktif</p>
                    <p>Memberdayakan orang dan bisnis untuk melakukan yang terbaik di tempat kerja dan kehidupan dengan bantuan teknologi
                    </p>
                    <Button variant="daftar">Daftar - Gratis!</Button>
                </div>
            </Col>
            <Col>
            <div style={{ minWidth: `300px`, textAlign:`center`}}>
                <Image style={{margin:`auto`}}/>
            </div>
            </Col>
            </Row>
            </Container>     
        </>

    )
}

export default Bebas
