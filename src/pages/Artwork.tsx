import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Artworktype } from '../utils/types';
import { Card, Col, Container, Row, Button, Spinner } from 'react-bootstrap';

function Artwork() {
    const param = useParams()
    const [artwork, setArtwork] = useState<Artworktype | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, []);

    //axios for fetching data which given id
    const fetchData = () => {
        axios.get(`https://api.artic.edu/api/v1/artworks/${param.id}`)
            .then(response => {
                setArtwork(response.data.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
                setLoading(false);
            });
    }

    //navigating to previous page
    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <Container>
            <Row className="justify-content-center mt-4">
                <Col md={8}>
                    {loading ? (
                        <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    ) : (
                        <Card>
                            <Card.Body>
                                {artwork && (
                                    <>
                                        <Card.Title>{artwork.title}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Artist: {artwork.artist_display}</Card.Subtitle>
                                        <Card.Img variant="top" src={artwork.thumbnail?.lqip} alt={artwork.thumbnail?.alt_text} width={artwork.thumbnail?.width} height='auto' />
                                        <Card.Text>Date: {artwork.date_display}</Card.Text>
                                        <Card.Text>Main Reference Number: {artwork.main_reference_number}</Card.Text>
                                        <Card.Text>Dimensions: {artwork.dimensions}</Card.Text>
                                        <Button onClick={handleGoBack} variant="secondary">Go Back</Button>
                                    </>
                                )}
                            </Card.Body>
                        </Card>
                    )}
                </Col>
            </Row>
        </Container>
    );
}

export default Artwork;
