import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
    Container,
    Menu,
    Responsive,
    Segment,
    Visibility
  } from 'semantic-ui-react';
  import { Link } from 'react-router-dom';
  import HomepageHeading from '../components/HomepageHeading';


class DesktopContainer extends Component {
    state = {}
  
    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })
   
    render() {
      const { children } = this.props
      const { fixed } = this.state
      const isHome = window.location.pathname==='/home'
      
      return (
        <Responsive {...Responsive.onlyComputer}>
          <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
            <Segment inverted textAlign='center' style={{ minHeight: isHome ? 700 : 0, padding: '1em 0em' }} vertical>
              <Menu
                fixed={fixed ? 'top' : null}
                inverted={!fixed}
                pointing={!fixed}
                secondary={!fixed}
                size='large'
              >
                <Container>
                  <Menu.Item as={Link} to='/home' active={window.location.pathname==='/home'}>Home</Menu.Item>
                  <Menu.Item as={Link} to='/about' active={window.location.pathname==='/about'}>About</Menu.Item>
                  <Menu.Item as={Link} to='/contact' active={window.location.pathname==='/contact'}>Contact</Menu.Item>
                </Container>
              </Menu>
              { isHome ? (<HomepageHeading />) : null }
            </Segment>
          </Visibility>
  
          {children}
        </Responsive>
      )
    }
  }

  DesktopContainer.propTypes = {
    children: PropTypes.node,
  }

  export default DesktopContainer;