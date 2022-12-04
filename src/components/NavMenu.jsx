import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import favicon from '../Images/favicon.svg';

export class NavMenu extends Component {
    static displayName = NavMenu.name;

  constructor (props) {
    super(props);

      this.toggleNavbar = this.toggleNavbar.bind(this);

      this.state = {
        collapsed: true,
      };


      window.addEventListener('scroll', function () {
          var minOffset = 980;
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
        this.setState({
            collapsed: !this.state.collapsed
        });
}


    render() {
            return (
                <header id="header" className="navbar-outer navbar-expand-lg  fixed-top">
                    <Navbar className="container-fluid navbar-inner " container light>
                        <NavbarBrand tag={Link} to="/"><img src={favicon} alt="" width={50} height={50}/></NavbarBrand>
                        <div className="flex-grow-1">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ">
                                <NavLink tag={Link} className="text-main" to="/">Бюджет</NavLink>
                                <NavLink tag={Link} className="text-main" to="/Test">Роль бюджета</NavLink>
                            </ul>
                        </div>
                        <div className="flex-grow-2 ">
                                <NavLink tag={Link} className="text-main" to="/Contact">Контакты</NavLink>
                        </div>  
                    </Navbar>
                </header>
            );
        }
}
