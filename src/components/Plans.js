import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Plan1 from "../assets/imgs/plan1.svg";
import Plan2 from "../assets/imgs/plan2.svg";
import Plan3 from "../assets/imgs/plan3.svg";
import Check from "../assets/imgs/check.svg";

const Plans = () => {
  return (
    <section className='pricing_plans_section'>
        <Container>
            <div className="pricing_plans_main">
                <div className="title_div">
                    <h1>Our Simple, Transparent Plans</h1>
                    <p>Choose the plan that fits your workflow.</p>
                </div>
                <div className="pricing_plans_cards_main">
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <div className="pricing_card_body_div">
                                <button type='button' className="plans_btn1">
                                    <img src={Plan1} alt="" /> Starter Plan</button>
                                <div className="pricing_card_text1">
                                    <h1>$0</h1>
                                    <p>Perfect for individuals testing the power of YourNLP.ai</p>
                                    <button type='button'>Try Free Now</button>
                                </div>
                                <div className="pricing_card_text2">
                                    <ul>
                                        <li><img src={Check} alt="" /> Up to 5 rewrites/day</li>
                                        <li><img src={Check} alt="" /> Combine up to 2 text extracts</li>
                                        <li><img src={Check} alt="" /> Default human-like writing style</li>
                                        <li><img src={Check} alt="" /> Access to basic paraphrasing engine</li>
                                        <li><img src={Check} alt="" /> Limited AI detection bypass</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="pricing_card_body_div">
                                <button type='button' className="plans_btn1">
                                    <img src={Plan2} alt="" /> Pro</button>
                                <div className="pricing_card_text1">
                                    <h1>$19 <sub>/month</sub></h1>
                                    <p>Ideal for content creators, students, and marketing teams</p>
                                    <button type='button'>Upgrade to Pro</button>
                                </div>
                                <div className="pricing_card_text2">
                                    <ul>
                                        <li><img src={Check} alt="" /> Unlimited rewrites up to 2000 words each</li>
                                        <li><img src={Check} alt="" /> Combine up to 3 text extracts</li>
                                        <li><img src={Check} alt="" /> Save and reuse writing style</li>
                                        <li><img src={Check} alt="" /> Full AI & plagiarism bypass engine</li>
                                        <li><img src={Check} alt="" /> Priority rewrite speed</li>
                                        <li><img src={Check} alt="" /> Email support included</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="pricing_card_body_div">
                                <button type='button' className="plans_btn1">
                                    <img src={Plan3 } alt="" /> Enterprise</button>
                                <div className="pricing_card_text1">
                                    <h1>Custom</h1>
                                    <p>Built for agencies, publishers, and developers</p>
                                    <button type='button'>Contact Sales</button>
                                </div>
                                <div className="pricing_card_text2">
                                    <ul>
                                        <li><img src={Check} alt="" /> Everything in Pro, plus:</li>
                                        <li><img src={Check} alt="" /> Team accounts and admin dashboard</li>
                                        <li><img src={Check} alt="" /> Full API access & usage tracking</li>
                                        <li><img src={Check} alt="" /> Custom model tuning for tone & domain</li>
                                        <li><img src={Check} alt="" /> 24/7 premium support</li>
                                        <li><img src={Check} alt="" /> On-premise data security options</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Plans