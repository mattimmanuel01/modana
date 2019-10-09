import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HR from '../images/HR.png'
import Lending from '../images/Lending.png'
import Button from 'react-bootstrap/Button'
const Layanan = () => {
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
                .title{
                    font-size: 32px;
                    line-height: 1.25;
                    font-weight: 600;
                    letter-spacing: 0.004em;
                    color: rgb(36, 49, 116);
                    display:inline;
                    vertical-align: middle;
                }
                .btn-primary{
                    background-color: rgb(255, 240, 232);
                    color:rgb(230, 116, 55);
                    border-radius: 26px;
                    border-color:rgb(255, 240, 232);
                    font-weight:bold;
                    text-transform:uppercase;
                    font-size:14px;
                    padding-left:16px;
                    padding-right:16px;
                    padding-top:10px;
                    padding-bottom:10px;
                }
                .comingSoon{
                    display: inline-block;
                    font-size: 16px;
                    vertical-align: middle;
                    color: rgb(107, 107, 107);
                    margin-left: 14px;
                    background: rgb(218, 218, 218);
                    padding: 7px 10px;
                    border-radius: 8px;   
                    font-weight:bold;
                    margin-top:0;
                    margin-left:12px;        
                }
            `}
            </style>
            <Container style={{ marginTop:`10%`}}>
                    <Row>
                        <Col>
                            <p className="SistemManagemen">Layanan</p>
                            <p style={{textAlign:`center`}}>Servis yang membantu perusahaan anda dimulai dari mengelola informasi <br></br>karyawan, absensi, Penggajian, and Pinjaman Karyawan</p>
                        </Col>
                    </Row>
                    <Row style={{marginTop:`6%`}}>
                        <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }} style={{marginTop:`8%`}}>
                        <p className="title">Human Resource</p>
                        <p style={{marginTop:`20px`}}>Dengan layanan sumber daya manusia dari Modana, memperoleh informasi menjadi proses yang sangat cepat karena semua yang perlu Anda lakukan adalah mengetikkan melalui sistem pencarian kami. Anda hanya perlu memasukkan data sekali, seperti slip gaji atau kebijakan baru, dan itu dapat diterapkan di banyak tempat. Setiap perubahan yang dilakukan juga secara otomatis diperbarui di mana pun kebijakan telah ditetapkan tanpa harus secara manual mengubahnya di mana-mana.</p>
                        <Button variant="primary" style={{marginTop:`12px`}}>Baca Selengkapnya</Button>
                        </Col>
                        <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }}>
                        <img src={HR} style={{minWidth:`300px`}}></img>
                        </Col>
                    </Row>
                    <Row style={{marginTop:`8%`}}>
                        <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 1 }}>
                            <img src={HR} style={{minWidth:`300px`}}></img>
                        </Col>
                        <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }} style={{marginTop:`8%`}}>
                            <div style={{display:`inline`, width:`500px`}}>
                            <p className="title">Payroll</p>
                            <span className="comingSoon">Coming Soon</span>
                            </div>
                            <p style={{marginTop:`20px`}}>Pemenuhan gaji adalah tugas yang sebaiknya diserahkan kepada sistem HR Modana karena system kami yang selalu dapat diandalkan. Perhitungan pajak untuk semua kebutuhan akan dilakukan dengan proses yang sederhana.</p>
                            <Button variant="primary" style={{marginTop:`12px`}}>Baca Selengkapnya</Button>
                        </Col>
                    </Row>
                    <Row style={{marginTop:`8%`}}>
                        <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }} style={{marginTop:`8%`}}>
                            <div style={{display:`inline`, width:`500px`}}>
                                <p className="title">Lending</p>
                                <span className="comingSoon">Coming Soon</span>
                            </div>
                            <p style={{marginTop:`20px`}}>Karena kami menyediakan metode pengembalian melalui debit otomatis dari gaji, kami akan menekan angka NPL. Jadi tidak perlu khawatir lagi, Work Hard, Gets Hard!</p>
                            <Button variant="primary" style={{marginTop:`12px`}}>Baca Selengkapnya</Button>
                        </Col>
                        <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }}>
                            <img src={Lending} style={{minWidth:`300px`,verticalAlign:`center`}}></img>
                        </Col>
                    </Row>
            </Container>    
        </>

    )
}

export default Layanan
