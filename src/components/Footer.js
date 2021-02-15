import { Button, Container, Jumbotron, Card, Row, Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer style={{ position: 'fixed', left: 0, bottom: 0, right: 0 }}>
            <Container style={{ background: 'rgba(0, 0, 0, 0.2)' }}>
                <p style={{ textAlign: 'center', paddingTop: '1rem', paddingBottom: '1rem' }}> © 2020 Copyright:</p>
            </Container>
        </footer>
    )
}

export default Footer
