import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Logo from "../assets/imgs/logo.svg";
import Arrow from "../assets/imgs/arrow.svg";
import Phone from "../assets/imgs/phone.svg";
import Email from "../assets/imgs/email.svg";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer_section'>
      <Container>
        <div className="footer_inner_one">
          <Row>
              <Col lg={5} md={12} sm={12}>
                <div className="footer_logo_main">
                  <span><img src={Logo} alt="" /> NLP-AI</span>
                  <p>Intelligent Language Infrastructure for the Next Generation of Businesses.</p>
                  <p>Automate workflows, extract insights, and accelerate growth with AI that understands your language.</p>
                </div>
              </Col>
              <Col lg={7} md={12} sm={12}>
                <Row>
                  <Col lg={4} md={4} sm={6}>
                    <div className="footer_links_main">
                      <ul>
                        <li><Link>Overview <img src={Arrow} alt="" /></Link></li>
                        <li><Link>Core Features <img src={Arrow} alt="" /></Link></li>
                        <li><Link>Integrations <img src={Arrow} alt="" /></Link></li>
                        <li><Link>API Access <img src={Arrow} alt="" /></Link></li>
                        <li><Link>Pricing <img src={Arrow} alt="" /></Link></li>
                      </ul>
                    </div>
                  </Col>
                  <Col lg={4} md={4} sm={6}>
                    <div className="footer_links_main">
                      <ul>
                        <li><Link>Documentation <img src={Arrow} alt="" /></Link></li>
                        <li><Link>Case Studies <img src={Arrow} alt="" /></Link></li>
                        <li><Link>Blog / Insights <img src={Arrow} alt="" /></Link></li>
                        <li><Link>FAQs <img src={Arrow} alt="" /></Link></li>
                      </ul>
                    </div>
                  </Col>
                  <Col lg={4} md={4} sm={6}>
                    <div className="footer_links_main">
                      <ul>
                        <li><Link><img src={Phone} alt="" /> +123 456 7890</Link></li>
                        <li><Link><img src={Email} alt="" /> support@nlpai.com </Link></li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </Col>
          </Row>
        </div>
        <div className="footer_inner_two">
          <div className="footer_bottom_links">
            <p>© 2025 All Rights Reserved by NLP.AI</p>
            <div className="footer_bottom_links_inner">
              <ul>
                <li><Link>Terms of Service <img src={Arrow} alt="" /></Link></li>
                <li><Link>Privacy Policy <img src={Arrow} alt="" /></Link></li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer