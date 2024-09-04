import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Logo from '../../assets/images/logo.png'
import { generatorList } from '../../data/generatorList';
import GeneratorCard from '../generators/GeneratorCard';
import '../../App.css';

const Home = () => {
    const featuredGenerators = generatorList.filter((generator) => generator.featured);

    return (
        <div id='main'>
            <Container id="hero">
                <img src={Logo} className="logo" alt='Illustration of woman with long brown hair and purple back ground' />
                <h1>Hey, I’m ASHai.</h1>
                <p>I'm your asistant, always to help you out. With a click of a button I'll write high quality copy for your products, company bio, or blog intro paragraphs. I was trained via OpenAI and achieved my GPT-3 degree.</p>
                <h3>What I can do for you:</h3>
            </Container>
            <Container>
                <Row>
                    {featuredGenerators.map((generator) => (
                        <GeneratorCard key={generator.id} generator={generator} />
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Home;