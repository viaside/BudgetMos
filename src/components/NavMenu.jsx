import React, { Component } from 'react';
import { Navbar, Nav, Offcanvas} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './NavMenu.css';
import  MediaQuery  from 'react-responsive'



export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor (props) {
    super(props);

      this.toggleNavbar = this.toggleNavbar.bind(this);

      this.state = {
        collapsed: false,
        home: "nav-link",
        direction: "nav-link",
        contact: "nav-link",
      };


      window.addEventListener('scroll', function () {
          var minOffset = 965;
          let has_class = document.body.classList.contains("scroll_navbar");
          if (minOffset < window.scrollY) {
              document.body.classList.add('scroll_navbar');
          }
          else if (has_class) {
              document.body.classList.remove('scroll_navbar');
          }
      });
    }


    toggleNavbar () {
        const role = window.innerWidth;
        if(role <= 1000){
            this.setState({
                collapsed: !this.state.collapsed
            });
            let href = window.location.href.substring(36);
            console.log(href);
            if(href === ""){
                this.setState({
                    home: "activeLink",
                    direction: "nav-link",
                    contact: "nav-link"
                })
            } else if(href === "Direction"){
                this.setState({
                    direction: "activeLink",
                    home: "nav-link",
                    contact: "nav-link"
                })
            } else if(href === "Contact"){
                this.setState({
                    contact: "activeLink",
                    home: "nav-link",
                    direction: "nav-link"
                })
            }
        }
        window.scrollTo(0,0);
    }

    render() {
            return (
                <header className='navbar-outer navbar-expand-lg fixed-top'>
                <Navbar expand="sm" className='container-fluid navbar-inner'>
                    <div className='container'>
                    <Navbar.Brand className='navbar-brand' href="/BudgetMos/">Бюджет <br/> для <br/> граждан</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} onClick={this.toggleNavbar}/>
                    <Navbar.Offcanvas id={`offcanvasNavbar-expand-sm`} aria-labelledby={`offcanvasNavbarLabel-expand-sm`} placement="end" show={this.state.collapsed} >
                        <div className='offcanvas-item animated fadeInUp'>
                        <Offcanvas.Header>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                                <div className='title'>
                                    <div className='d-flex justify-content-end'>
                                        <img src="" alt="" width={50}  height={50}/>
                                    </div>
                                </div>
                            </Offcanvas.Title>
                            <div className='float-right'>
                                <button type="button" className="btn-close" aria-label="Close" onClick={this.toggleNavbar}></button>
                            </div>
                        </Offcanvas.Header>
                        <MediaQuery minWidth={12} maxWidth={999} >
                            <h1 className='text-main text-bold display-1 p-0 m-0 text-title'>Бюджет для граждан</h1>
                        </MediaQuery>
                        <Offcanvas.Body>
                            <Nav className="flex-grow-1">
                                <NavLink tag={ Link } className={this.state.home } onClick={this.toggleNavbar} to="/">Бюджет</NavLink>
                                <NavLink tag={ Link } className={this.state.direction }  onClick={this.toggleNavbar} to="/Direction">Направления</NavLink>
                            </Nav>
                            <Nav className="flex-grow-2">
                                <NavLink tag={ Link } className={this.state.contact }  onClick={this.toggleNavbar} to ="/Contact">Контакты</NavLink>
                            </Nav>
                        </Offcanvas.Body>
                        </div>
                    </Navbar.Offcanvas> 
                    </div>
                </Navbar>
                </header>
            );
        }
}
