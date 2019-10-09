import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import secure from '../images/secure.png'
import team from '../images/team.png'
import time from '../images/time.png'
import attendance from '../images/attendance.png'
import cloud from '../images/cloud.png'
import network from '../images/network.png'
const KenapaKami = () => {
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
                            <p className="SistemManagemen">Kenapa Kami?</p>
                        </Col>
                    </Row>
                    <Row style={{marginTop:`50px`}}>
                        <Col style={{textAlign:`center`}}>
                            <img src={secure} ></img>
                            <p>HRIS platform, tanpa kertas, lebih cepat, aman</p>
                        </Col>                       
                        <Col style={{textAlign:`center`}}>
                            <img src={team} ></img>
                            <p>Lembaga database, kehadiran dan kompensasi (penggajian) dengan intervensi minimal manusia</p>
                        </Col> 
                        <Col style={{textAlign:`center`}}>
                            <img src={time} ></img>
                            <p>Credit Score engine untuk membuat keputusan yang lebih baik dan lebih cepat membantu kreditor Bank / NBFI</p>
                        </Col> 
                    </Row>
                    <Row style={{marginTop:`12px`}}>
                        <Col style={{textAlign:`center`}}>
                            <img src={attendance} ></img>
                            <p>Mengelola kompensasi (gaji) dengan minimal intervensi pengguna</p>
                        </Col>                       
                        <Col style={{textAlign:`center`}}>
                            <img src={cloud} ></img>
                            <p>Berbasis Cloud, mudah diakses melalui Web dan aplikasi Mobile</p>
                        </Col> 
                        <Col style={{textAlign:`center`}}>
                            <img src={network} ></img>
                            <p>Kesempatan untuk peluang masa depan yang lebih baik</p>
                        </Col> 
                    </Row>
                    {/* <Row>
                    <Col sm={8} style={{marginLeft:`auto`,marginRight:`auto`,}}>
                    <p className="servis"> Servis yang membantu perusahaan anda dimulai dari mengelola informasi karyawan, absensi, Penggajian, and Pinjaman Karyawan</p>
                    </Col>
                    </Row>
                    <Row style={{textAlign:`center`}}>
                        <Col>
                            <img src={imageProduct} style={{width:`800px`,margin:`auto`}}></img>
                        </Col>
                    </Row> */}
            </Container>    
        </>

    )
}

export default KenapaKami
