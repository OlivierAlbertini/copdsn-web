import React from 'react'
import Link from 'gatsby-link'
import './header.css'

export default class Header extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset
  
    if (scrollTop > 50) {
    this.setState({ hasScrolled: true })
    } else {
    this.setState({ hasScrolled: false })
    }
  } 

  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <Link to="/"><img src="https://s3.ca-central-1.amazonaws.com/public-images-blog/favicon.png" width="30" /></Link>
          <Link to="/articles">Articles</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          <Link to="/Login"><button>Login</button></Link>
        </div>
      </div>
    )
  }
}