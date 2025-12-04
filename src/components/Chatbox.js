import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Cb1 from "../assets/imgs/cb1.svg";
import Cb3 from "../assets/imgs/cb3.svg";
import File from "../assets/imgs/file.png";
import Voice from "../assets/imgs/voice.svg";
import Clear from "../assets/imgs/clear.svg";
import Copy from "../assets/imgs/copy.svg";
import Downl from "../assets/imgs/down.svg";
import { Link } from 'react-router-dom';

const Chatbox = () => {
  return (
    <section className='chatbox_section'>
      <Container>
        <div className="chatbox_main_div">
          <Row>
            <Col lg={6} md={12} sm={12}>
                <div className="chat_box_left_main">
                    <div className="chatbox_title">
                        <div className="chatbox_title_logo">
                            <img src={Cb1} alt="" />
                        </div>
                        <p>Input Text</p>
                        <button type='button'>0 words</button>
                    </div>
                    <div className="chat_box_left_inner_main">
                        <div className="chat_box_left_text">
                            <p>Your Input will appear here...</p>
                        </div>
                        <div className="input_bottom">
                            <label htmlFor=""><img src={File} alt="" /></label>
                            <input type="text" placeholder="Write your text here or upload a file..."
                                className="input_field"/>
                            <span><img src={Voice} alt="" /></span>
                            <button className="echowrite_btn">Echowrite</button>
                        </div>
                        <button type='button' className="clear_btn"><img src={Clear} alt="" /> Clear</button>
                    </div>
                    <div className="chat_box_left_bottom_txt">
                        <p><Link>Login</Link> to combine upto 3 Extracts.</p>
                        <p>Free Trails Limited to 2000 words. <Link>Sign up</Link> to unlock more.</p>
                    </div>
                </div>
            </Col>
            <Col lg={6} md={12} sm={12}>
                <div className="chat_box_right_main">
                    <div className="chatbox_title">
                        <div className="chatbox_title_logo">
                            <img src={Cb3} alt="" />
                        </div>
                        <p>Output</p>
                        <button type='button'>0 words</button>
                    </div>
                    <div className="chat_box_right_inner_main">
                        <div className="chat_box_right_text">
                            <p>Your Humanized Output will appear here...</p>
                        </div>
                        <div className="chat_box_right_bottom_btns">
                            <p>AI Detection Score:</p>
                            <div>
                                <button type='button'><img src={Copy} alt="" /> Copy Text</button>
                                <button type='button'><img src={Downl} alt="" /> Export</button>
                            </div>
                        </div>
                    </div>
                    <div className="chat_box_left_bottom_txt text-end">
                        <p>Optimized to bypass AI Detectors Like GPTZero and Originality.ai</p>
                    </div>
                </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default Chatbox;