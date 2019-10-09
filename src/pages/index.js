import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Bebas from "../components/bebaskanDiriAnda"
import SistemManagemen from "../components/SistemManagemen"
import KenapaKami from "../components/KenapaKami"
import Layanan from "../components/Layanan"
import Image from "../components/image"
import SEO from "../components/seo"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const IndexPage = () => (
    <Layout>
    <style type="text/css">
    {`
        .everyone{
          margin-top:8%;
          margin-bottom:5%;
          font-size: 64px;
          line-height: 1.0625;
          font-weight: 600;
          letter-spacing: -0.009em;
          text-align: center;
          color: rgb(68, 68, 68);
        }
    `}
    </style>
    <SEO title="Home" />
    <Bebas/>
    <SistemManagemen/>
    <KenapaKami/>
    <Layanan/>
    <div>
      <p className="everyone">Everyone Matters</p>
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
    
  </Layout>
)

export default IndexPage
