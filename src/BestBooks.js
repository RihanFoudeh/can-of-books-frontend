import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BestBooks.css';
import axios from 'axios';
import Books from './Books';
import { Row, Button } from 'react-bootstrap';
import { withAuth0 } from "@auth0/auth0-react";
import Modules from './modalForm';
import UpdateBooks from './updateBook'

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      booksArr: [],
      showmodels: false,
      
      showFlag : false,
      bookTitle : '',
      bookDescription : '',
      bookStatus : '',
      ownerEmail : '',
      bookid :''


    }
  }

  // get to server 
  componentDidMount = () => {
    console.log('hi');
    const user = this.props.auth0;
    const email = user.email;
    console.log(user);
    axios
      .get(`http://localhost:3010/book?email=${email}`)
      .then(result => {
        this.setState({
          booksArr: result.data
        })
        console.log(this.state.booksArr);
      })
      .catch(err => {
        console.log('error');
      })
  }


  // addBooks


  addBook = (event) => {
    event.preventDefault();
    const user = this.props.auth0;
    const email = user.email;

    const obj = {
      bookTitle: event.target.bookname.value,
      bookDescription: event.target.bookdis.value,
      bookStatus: event.target.bookstus.value,
      ownerEmail: email
    }
    console.log(obj);

    axios
      .post(`http://localhost:3010/books`, obj)
      .then(result => {
        this.setState({
          booksArr: result.data
        })
      })
      .catch(err => {
        console.log('Error on adding data');
      })
  }






  //delete books 

  deleteBook = (id) => {
    const { user } = this.props.auth0;
    const email = user.email;
    axios
      .delete(`http://localhost:3010/Books/${id}?email=${email}`)
      .then(result => {
        this.setState({
          booksArr: result.data
        })
      })
      .catch(err => {
        console.log('error in deleting cat');
      })
  }





  showmodalfuncation = () => {
    this.setState({

      showmodels: true,


    })
  }
  
  handleClose = () => {
    this.setState({
      showFlag : false
    })
  }

  closemodalfuncation = () => {
    this.setState({

      showmodels: false,


    })
  }



  showUpdateForm = (item) => {
    this.setState({
      showFlag: true,
      bookTitle : item.bookTitle,
      bookDescription : item.bookDescription,
      bookStatus : item.bookStatus,
      bookid : item._id
    })
  }




  updateBook = (event) => {
    event.preventDefault();
    const { user } = this.props.auth0;
    const email = user.email;
    const obj = {
      bookTitle : event.target.bookTitle.value,
      bookDescription : event.target.bookDescription.value,
      bookStatus : event.target.bookstus.value,
      // ownerEmail : email
    }
    console.log(obj);

    axios
    .put(`http://localhost:3010/updatebooks/${this.state.bookid}`,obj)
    .then(result =>{
      this.setState({
        booksArr:result.data,
        showFlag : false
      })
    })
    .catch(err=>{
      console.log('error in updating the data');
    })
  }



  render() {
    return (
      <>
        <h1>My Favorite Books</h1>

        <Button onClick={this.showmodalfuncation} >Add a Book</Button>

        <Modules
          showmodels={this.state.showmodels}
          closemodalfuncation={this.closemodalfuncation}
          addBook={this.addBook}
        />

        <Row className="justify-content-between" className='row'>

          <Books
            booksArr={this.state.booksArr}
            deleteBook={this.deleteBook}
            showUpdateForm = {this.showUpdateForm}
          />

        </Row>


        <UpdateBooks
       
        show = {this.state.showFlag}
        handleClose = {this.handleClose}
        bookTitle = {this.state.bookTitle}
        bookDescription = {this.state.bookDescription}
        bookStatus = {this.state.bookStatus}
        updateBook={this.updateBook}

        />


        {/* <Books
          booksArr={this.state.booksArr}
        /> */}
      </>
    )
  }
}

export default withAuth0(MyFavoriteBooks);