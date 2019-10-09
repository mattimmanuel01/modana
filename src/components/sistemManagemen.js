import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imageProduct from '../images/product.png'
const SistemManagemen = () => {
    return (
        <>
            <style type="text/css">
            {`
                .SistemManagemen{
                font-size: calc(16px + 1vw);
                line-height: 1.08365;
                font-weight: 600;
                letter-spacing: -0.003em;
                text-align: center;
                color: rgb(230, 116, 55);

                }
                .servis{
                text-align:center;
                margin-left:auto;
                margin-right:auto;
                margin-top:20px;
                
                }
            `}
            </style>
            <Container style={{ marginTop:`10%`}}>
                    <Row>
                    <Col>
                        <p className="SistemManagemen">Sistem Manajemen Sumber Daya Manusia, Penggajian, Virtual Account, Pinjaman.
            <br></br>Kami memiliki semuanya!</p>
                    </Col>
                    </Row>
                    <Row>
                    <Col sm={8} style={{marginLeft:`auto`,marginRight:`auto`,}}>
                    <p className="servis"> Servis yang membantu perusahaan anda dimulai dari mengelola informasi karyawan, absensi, Penggajian, and Pinjaman Karyawan</p>
                    </Col>
                    </Row>
                    <Row style={{textAlign:`center`}}>
                        <Col>
                            <img src={imageProduct} style={{width:`800px`,margin:`auto`}}></img>
                        </Col>
                    </Row>
            </Container>    
        </>

    )
}

export default SistemManagemen
