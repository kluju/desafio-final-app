import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import PrivateRoute from './components/private-route/PrivateRoute';

import store from './store';
import Footer from './components/footer/Footer';
import HomeView from './views/home/Home';

import UserListView from './views/user-list/UserList';
import LoginView from './views/login/Login';
import UserCreate from './views/user-create/UserCreate';

import UserDetailView from './views/user-detail/UserDetail';

import Header from './components/header/Header';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Container>
          <Router>
            <Route path="" component={Header} />
            <Route path="/" exact component={HomeView} />
            <PrivateRoute path="/dashboard/users" exact component={UserListView} />
            <PrivateRoute path="/dashboard/users/view/:id" exact component={UserDetailView} />
            <PrivateRoute path="/dashboard/users/create" exact component={UserCreate} />
            <Route path="/login" exact component={LoginView} />
            <Footer />
        </Router>
        </Container>
      </div>
      
    </Provider>
  );
}

export default App;
/*



*/ 


/*
<div className="container">
      <header className="blog-header py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-4 pt-1">
            <a className="text-muted" href="#">Subscribe</a>
          </div>
          <div className="col-4 text-center">
            <a className="blog-header-logo text-dark" href="#">Large</a>
          </div>
          <div className="col-4 d-flex justify-content-end align-items-center">
            <a className="text-muted" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="mx-3" role="img" viewBox="0 0 24 24" focusable="false"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"></circle><path d="M21 21l-5.2-5.2"></path></svg>
            </a>
            <a className="btn btn-sm btn-outline-secondary" href="#">Sign up</a>
          </div>
        </div>
      </header>

      <div className="nav-scroller py-1 mb-2">
        <nav className="nav d-flex justify-content-between">
          <a className="p-2 text-muted" href="#">World</a>
          <a className="p-2 text-muted" href="#">U.S.</a>
          <a className="p-2 text-muted" href="#">Technology</a>
          <a className="p-2 text-muted" href="#">Design</a>
          <a className="p-2 text-muted" href="#">Culture</a>
          <a className="p-2 text-muted" href="#">Business</a>
          <a className="p-2 text-muted" href="#">Politics</a>
          <a className="p-2 text-muted" href="#">Opinion</a>
          <a className="p-2 text-muted" href="#">Science</a>
          <a className="p-2 text-muted" href="#">Health</a>
          <a className="p-2 text-muted" href="#">Style</a>
          <a className="p-2 text-muted" href="#">Travel</a>
        </nav>
      </div>

      <div className="jumbotron p-4 p-md-5 text-white rounded bg-dark">
        <div className="col-md-6 px-0">
          <h1 className="display-4 font-italic">Title of a longer featured blog post</h1>
          <p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
          <p className="lead mb-0"><a href="#" className="text-white font-weight-bold">Continue reading...</a></p>
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-md-6">
          <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-primary">World</strong>
              <h3 className="mb-0">Featured post</h3>
              <div className="mb-1 text-muted">Nov 12</div>
              <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="stretched-link">Continue reading</a>
            </div>
            <div className="col-auto d-none d-lg-block">
              <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-success">Design</strong>
              <h3 className="mb-0">Post title</h3>
              <div className="mb-1 text-muted">Nov 11</div>
              <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="stretched-link">Continue reading</a>
            </div>
            <div className="col-auto d-none d-lg-block">
              <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
*/