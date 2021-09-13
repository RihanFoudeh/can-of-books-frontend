import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

class Books extends Component {
    render() {
        console.log(this.props.booksArr);
        return (
            <div>
               
                {this.props.booksArr.map(item => {
                    return(
                    < Card style={{ width: '18rem' }} className='card'>
                        <Card.Body>
                            <Card.Title>{item.bookTitle}</Card.Title>
                            <Card.Text>
                                {item.bookDescription}
                            </Card.Text>
                            <Card.Text>
                            Availability : {item.bookStatus}
                            </Card.Text>
                        </Card.Body>
                    </Card >
                    )
                })}

            </div>
        );
    }
}

export default Books;