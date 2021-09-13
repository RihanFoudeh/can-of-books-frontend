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
                            src="https://www.cnet.com/a/img/zKiT35AfPlfRJvlHty6p4zmpCrw=/940x0/2020/05/01/7f0a951f-d9a2-4847-b962-b254b63842a2/img-4960.jpg"
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