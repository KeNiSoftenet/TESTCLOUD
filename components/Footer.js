import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from './SectionTitle';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer>
            <div className="footer__area fix p-relative pt-200 pb-60">
                <div className="footer__shape">
                    <img className="footer-shape-1" src="/assets/images/shape/footer/footer-s-1.png" alt=""/>
                    <img className="footer-shape-2" src="/assets/images/shape/footer/footer-s-2.png" alt=""/>
                </div>
                <Container>
                    {/* <Row className="mb-145">
                        <Col xxl={6} xl={7} lg={8} md={10}>
                            <div className="footer__newsletter">
                                <SectionTitle subTitle="Join Our Community"
                                titleFirst="Subscribe for newsletter"
                                />
                            </div>
                        </Col>
                        <Col xxl={{ span: 5, offset: 1 }} xl={5} lg={4} md={4}>
                            <div className="footer__subscribe"> 
                                <form action="#">                                        
                                    <div className="footer__subscribe-input">
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Email address"/>
                                        </div>
                                        <button type="submit">Subscribe</button>
                                    </div>
                                </form>                               
                            </div> 
                        </Col>
                    </Row> */}
                    <Row className="mb-50">
                        <Col xl={4} lg={4} md={10} sm={10}>
                            <div className="footer__widget wow fadeIn" data-wow-delay=".5s">
                                <div className="footer__widget-logo">
                                    <img src="assets/images/logo/footerlogo.png" alt="logo"/>
                                    <p>your ultimate gateway to the cloud and a world of infinite possibilities.</p>
                                </div>
                                <div className="footer__widget-social">
                                    <Link href="#">
                                        <a><i className="fa-brands fa-facebook-f"></i></a>
                                    </Link>
                                    <Link href="#">
                                        <a><i className="fa-brands fa-twitter"></i></a>
                                    </Link>
                                    <Link href="#">
                                        <a><i className="fa-brands fa-instagram"></i></a>
                                    </Link>
                                    <Link href="#">
                                        <a><i className="fa-brands fa-youtube"></i></a>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col xl={2} lg={2} md={4} sm={6}>
                            <div className="footer__widget">
                                <div className="footer__widget-title">
                                    <h5>Our Services</h5>
                                </div>
                                <div className="footer__widget-link">
                                    <ul>
                                        <li>
                                            <Link href="#service">
                                                <a>Cloud Solution</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#service">
                                                <a>App Development</a>  
                                            </Link>                                          
                                        </li>
                                        <li>
                                            <Link href="#service">
                                                <a>Unity Gaming</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#service">
                                                <a>App Store Optimization (ASO)</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col xl={2} lg={2} md={4} sm={6}>
                            <div className="footer__widget footer__widget-mt-2">
                                <div className="footer__widget-title">
                                    <h5>Company</h5>
                                </div>
                                <div className="footer__widget-link">
                                    <ul>
                                        <li>
                                            <Link href="#about">
                                                <a>About us</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#fact">
                                                <a>Facts</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#team">
                                                <a>Teams</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#contact">
                                                <a>Contact</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#services">
                                                <a>Services</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4} lg={4} md={4} sm={10}>
                            <div className="footer__widget footer__widget-mt">
                                <div className="footer__widget-title">
                                    <h5>Stay Connected</h5>
                                </div>
                                <div className="footer__widget-info">
                                    <div className="footer__widget-address">
                                        <p>Plot number 23, Bahria Greens 
                                            Sector 1 Bahria Greens,Rawalpindi, pakistan</p>
                                    </div>
                                    <div className="footer__widget-phone d-flex align-items-center">
                                        <i className="fa-solid fa-phone"></i>
                                        <p>
                                            <Link href="tel:+0516142226">
                                                <a>+051 6142226</a>
                                            </Link>
                                        </p>
                                    </div>
                                    <div className="footer__widget-email d-flex align-items-center">
                                        <i className="fa-solid fa-paper-plane"></i>
                                        <p>
                                            <Link href="mailto:info@cloudgatetechnologies.com">
                                                <a>info@cloudgatetechnologies.com</a>
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Col>                        
                    </Row> 
                    <Row>
                        <Col xl={12}>
                            <div className="footer__copyright">
                                <p>Copyright © 2023
                                    <Link href="#">
                                        <a>CloudGate Technologies</a>
                                    </Link>
                                </p>
                            </div>
                        </Col>
                    </Row>                 
                </Container>
            </div>
        </footer>
    );
};

export default Footer;