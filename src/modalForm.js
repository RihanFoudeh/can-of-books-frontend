import React, { Component } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';



class modalForm extends Component {
  render() {
    return (
      <>
        <Modal show={this.props.showmodels} onHide={this.props.closemodalfuncation}  >
          <Modal.Dialog >
            
            <Modal.Body>
              <Form onSubmit={this.props.addBook}>
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                  <Form.Label>Book Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Book Name" name="bookname" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDescription" >
                  <Form.Label>Book Description</Form.Label>
                  <Form.Control type="text" placeholder="Enter Book Description" name="bookdis" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="dropDawn" >
                  <Form.Label>Status</Form.Label>
                  <Form.Select size="lg" name="bookstus">
                    <option>Life Changing</option>
                    <option>Favorite Five</option>
                    <option>Recommended To Me</option>
                  </Form.Select>
                  
                </Form.Group>
                <Button variant="secondary" onClick={this.props.closemodalfuncation}>Close</Button>
              <Button variant="primary" type="submit" >Save changes</Button>
              </Form>
            </Modal.Body>

           
          </Modal.Dialog>


        </Modal>




      </>
    );
  }
}

export default modalForm;