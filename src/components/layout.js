/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Button from 'react-bootstrap/Button'
import Header from "./header"
import "./layout.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Ig from '../images/ig.png'
import Linkedin from '../images/Linkedin.png'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <style type="text/css">
      {`
          .foot{
            margin-top:8%;
            background:rgb(24, 28, 57);
            height:650px;

          }
          .tumbuh{
            font-size: 57px;
            line-height: 1.0625;
            font-weight: 600;
            padding-top:4%;
            letter-spacing: -0.009em;
            text-align: center;
            color: #fff;
          }
          .btn-primarydaftar{
            background-color: rgb(230, 116, 55);
            color:rgb(255, 240, 232);
            border-radius: 26px;
            border-color:rgb(230, 116, 55);
            font-weight:bold;
            text-transform:uppercase;
            font-size:14px;
            padding-left:16px;
            padding-right:16px;
            padding-top:10px;
            padding-bottom:10px;
        }
        .tentangkontak{
          font-weight:bold;
          text-transform:uppercase;
          font-size:14px;
          color:#fff;
        }
        .copyright{
          font-size:12px;
          color:#fff;
        }
        .btn-outline-secondary-subs{
          border-color:#fff;
          color:#fff;
        }
        .btn-outline-secondary-subs:hover{
          border-color:rgb(230, 116, 55);
          color:rgb(230, 116, 55);
        }
      `}
      </style>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          marginTop:`10%`,
          marginLeft:`10%`,
          marginBottom:`10%`,
          maxWidth: `80%`,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
      </div>
      <footer className="foot">
        <p className="tumbuh">Mulailah tumbuh bersama Modana hari ini</p>
        <div style={{textAlign:`center`}}>
          <Button variant="primarydaftar" style={{marginTop:`12px`}}>Daftar</Button>
        </div>
        <Container style={{marginTop:`2%`}}>
          <Row>
            <Col sm={8} md={4}>
                  <p className="tentangkontak">Subsribe to our newsletter</p>
                  <InputGroup className="mb-3">
                  <FormControl
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                  />
                <InputGroup.Append>
                  <Button variant="outline-secondary-subs">Subscribe</Button>
                </InputGroup.Append>
                </InputGroup>
            </Col>
            <Col>
              <p className="tentangkontak">tentang</p>
              <p className="tentangkontak"> kontak</p>
              <p className="tentangkontak">ketentuan layanan</p>
              <p className="tentangkontak"> kebijakan privasi</p>
              <p className="tentangkontak"> press</p>
            </Col>
            <Col>
            <p className="tentangkontak">ikuti kami</p>
            <div style={{display:`flex`}}>
              <img style={{width:`20px`,height:`20px`}} src={Ig}></img>
              <img style={{width:`22px`, height:`22px`,marginLeft:`25px`}} src={Linkedin}></img>
            </div>
            <p className="copyright">&copy; 2019 Modana All Rights Reserved</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
