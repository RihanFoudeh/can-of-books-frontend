import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

import { Card } from 'react-bootstrap';

class Books extends Component {
    render() {
        console.log(this.props.booksArr);
        return (
            <div>

                <Carousel>
                   
                {this.props.booksArr.map(item => {
                     return(
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://media.istockphoto.com/photos/many-hardbound-books-background-selective-focus-picture-id1209683444?k=20&m=1209683444&s=612x612&w=0&h=apRHyEOnUCQ7gXkIChHTyixwezHZ4Bm6tDyr7zwu32Y="
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>{item.bookTitle}</h3>
                            <p> {item.bookDescription}</p>
                            <h5> Availability : {item.bookStatus}</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                      )
                    })} 
                </Carousel>

            </div>
        );
    }
}

export default Books;