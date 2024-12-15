import React, { Component } from 'react'
import { Collapse, CardBody, Card } from 'reactstrap';
import { Link } from 'react-router-dom'
import './style.css';

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/home',
        submenu: [
            {
                id: 11,
                title: 'Home style 1',
                link: '/home'
            },
            {
                id: 12,
                title: 'Home style 2',
                link: '/home2'
            },
            {
                id: 13,
                title: 'Home style 3',
                link: '/home3'
            },
            {
                id: 14,
                title: 'Home style 4',
                link: '/home4'
            },
            {
                id: 15,
                title: 'Home style 5',
                link: '/home5'
            },
        ]
    },

    {
        id: 2,
        title: 'About',
        link: '/about',
    },

    {
        id: 3,
        title: 'Services',
        link: '/service',
        submenu: [
            {
                id: 31,
                title: 'Service',
                link: '/service'
            },
            {
                id: 32,
                title: 'Service style 2',
                link: '/service-s2'
            },
            {
                id: 33,
                title: 'Service Single',
                link: '/service-single/1'
            }
        ]
    },
    {
        id: 4,
        title: 'Projects',
        link: '/project',
        submenu: [
            {
                id: 41,
                title: 'Projects',
                link: '/project'
            },
            {
                id: 42,
                title: 'Projects style 2',
                link: '/project-s2'
            },
            {
                id: 43,
                title: 'Projects Single',
                link: '/project-single/1'
            }
        ]
    },

    {
        id: 7,
        title: 'Pages',
        link: '/',
        submenu: [
            {
                id: 771,
                title: 'Shop',
                link: '/shop'
            },
            {
                id: 772,
                title: 'Shop Single',
                link: '/product-single/1'
            },
            {
                id: 773,
                title: 'Cart',
                link: '/cart'
            },
            {
                id: 774,
                title: 'Checkout',
                link: '/checkout'
            },
            {
                id: 775,
                title: 'Team Single',
                link: '/team-single/1'
            },
            {
                id: 71,
                title: 'Pricing',
                link: '/pricing'
            },
            {
                id: 75,
                title: 'Testimonial',
                link: '/testimonial'
            },
            {
                id: 76,
                title: 'Error 404',
                link: '/404'
            },

            {
                id: 77,
                title: 'Login',
                link: '/login'
            },
            {
                id: 78,
                title: 'Register',
                link: '/register'
            },

        ]
    },

    {
        id: 5,
        title: 'Blog',
        link: '/blog',
        submenu: [
            {
                id: 51,
                title: 'Blog',
                link: '/blog'
            },
            {
                id: 52,
                title: 'Blog Left sidebar',
                link: '/blog-left'
            },
            {
                id: 53,
                title: 'Blog full width',
                link: '/blog-fullwidth'
            },
            {
                id: 54,
                title: 'Blog single',
                link: '/blog-details'
            },
            {
                id: 55,
                title: 'Blog single Left sidebar',
                link: '/blog-details-left'
            },
            {
                id: 56,
                title: 'Blog single Left sidebar',
                link: '/blog-details-fullwidth'
            },
        ]
    },
    {
        id: 88,
        title: 'Contact',
        link: '/contact',
    }


]


export default class MobileMenu extends Component {

    state = {
        isMenuShow: false,
        isOpen: 0,
    }

    menuHandler = () => {
        this.setState({
            isMenuShow: !this.state.isMenuShow
        })
    }

    setIsOpen = id => () => {
        this.setState({
            isOpen: id === this.state.isOpen ? 0 : id
        })
    }

    render() {

        const { isMenuShow, isOpen } = this.state;

        const ClickHandler = () => {
            window.scrollTo(10, 0);
        }

        return (
            <div>
                <div className={`mobileMenu ${isMenuShow ? 'show' : ''}`}>
                    <div className="menu-close">
                        <div className="clox" onClick={this.menuHandler}><i className="ti-close"></i></div>
                    </div>

                    <ul className="responsivemenu">
                        <li className="menu-item-has-children">
                            <Link onClick={ClickHandler} to="/">Home</Link>
                        </li>
                        <li><Link onClick={ClickHandler} to="/about">About</Link></li>
                        <li><Link to="/service">Service</Link></li>
                        <li><Link onClick={ClickHandler} to="/project">Project</Link></li>
                        <li><Link onClick={ClickHandler} to="/contact">Contact</Link></li>
                    </ul>

                </div>

                <div className="showmenu" onClick={this.menuHandler}>
                    <button type="button" className="navbar-toggler open-btn">
                        <span className="icon-bar first-angle"></span>
                        <span className="icon-bar middle-angle"></span>
                        <span className="icon-bar last-angle"></span>
                    </button>
                </div>
            </div>
        )
    }
}
