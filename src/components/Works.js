import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import File from "../assets/imgs/file.png";
import Voice from "../assets/imgs/voice.svg";

import { useState } from 'react';

export default function Works() {
    const steps = [
        {
            title: 'Add Extracts',
            text: `Start by pasting or typing your text into the input box. You can test Echowrite instantly
                    on the homepage without logging in. The system automatically detects your content and prepares it
                    for rewriting — no complicated settings needed.`
        },
        {
            title: 'AI Processing',
            text: `Echowrite analyzes your extract, identifies tone, structure, and clarity, and prepares an improved
            rewritten version using advanced language models.`
        },
        {
            title: 'Get Output',
            text: `Your rewritten, polished text appears instantly. Copy it, download it, or refine it further — all
             within seconds.`
        }
    ];

    const [current, setCurrent] = useState(0);

    const nextStep = () => {
        setCurrent((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
    };

    const prevStep = () => {
        setCurrent((prev) => (prev > 0 ? prev - 1 : prev));
    };

    return (
        <section className="works_section">
            <Container>
                <div className="title_div">
                    <h1>How Echowrite Works</h1>
                    <p>A simple, transparent workflow that lets you see the transformation happen.</p>
                </div>
                <div className="works_wrapper">
                    <div className="works_wrapper_inner">
                        <Row>
                            <Col lg={6} md={12} sm={12}>
                                <div className="works_left_main">
                                    <div className="input_box">
                                        <p className="placeholder_text">Your input will appear here...</p>

                                        <button className="add_extract_btn">+ Add Extract</button>

                                        <div className="input_bottom">
                                            <label htmlFor=""><img src={File} alt="" /></label>
                                            <input type="text" placeholder="Write your text here or upload a file..."
                                                className="input_field"/>
                                            <span><img src={Voice} alt="" /></span>
                                            <button className="echowrite_btn">Echowrite</button>
                                        </div>
                                    </div>

                                </div>
                            </Col>
                            <Col lg={6} md={12} sm={12}>
                                <div className="works_right_main">
                                    <div className="steps_box animate_step">
                                        <div className="steps_progress">
                                            <p className={`dot ${current === 0 ? 'active' : ''}`}>
                                                <span>01</span>
                                            </p>
                                            <span className="line"></span>
                                            <p className={`dot ${current === 1 ? 'active' : ''}`}>
                                                <span>02</span>
                                            </p>
                                            <span className="line"></span>
                                            <p className={`dot ${current === 2 ? 'active' : ''}`}>
                                                <span>03</span>
                                            </p>
                                        </div>

                                        <h2>{steps[current].title}</h2>
                                        <p>{steps[current].text}</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="arrows">
                        <button onClick={prevStep} className="arrow_btn" disabled={current === 0}>&lt;</button>
                        <button onClick={nextStep} className="arrow_btn" disabled={current === steps.length - 1}>&gt;</button>
                    </div>
                </div>
            </Container>
        </section >
    )
}
