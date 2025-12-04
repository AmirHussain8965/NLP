import React from 'react'
import { Container } from 'react-bootstrap'

const Hero = () => {
  return (
    <section className='hero_section'>
        <Container>
            <div className="hero_text_main_div">
                <h1>Experience rewriting that feels human.</h1>
                <p>Test our software instantly with up to 2000 words — no signup required.</p>
            </div>
        </Container>
    </section>
  )
}

export default Hero