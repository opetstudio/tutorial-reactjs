import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import HomepageHeading from '../components/HomepageHeading';

class MobileContainer extends Component {
    state = {}
  
    handlePusherClick = () => {
      const { sidebarOpened } = this.state
  
      if (sidebarOpened) this.setState({ sidebarOpened: false })
    }
  
    handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })
  
    render() {
      const { children } = this.props
      const { sidebarOpened } = this.state
      const isHome = window.location.pathname==='/home'
  
      return (
        <Responsive {...Responsive.onlyMobile}>
          <Sidebar.Pushable>
            <Sidebar as={Menu} animation='uncover' inverted vertical visible={sidebarOpened}>
            <Menu.Item as={Link} to='/home' active={window.location.pathname==='/home'}>Home</Menu.Item>
            <Menu.Item as={Link} to='/about' active={window.location.pathname==='/about'}>About</Menu.Item>
            <Menu.Item as={Link} to='/contact' active={window.location.pathname==='/contact'}>Contact</Menu.Item>
            </Sidebar>
  
            <Sidebar.Pusher dimmed={sidebarOpened} onClick={this.handlePusherClick} style={{ minHeight: '100vh' }}>
              <Segment inverted textAlign='center' style={{ minHeight: isHome ? 350 : 0, padding: '1em 0em' }} vertical>
                <Container>
                  <Menu inverted pointing secondary size='large'>
                    <Menu.Item onClick={this.handleToggle}>
                      <Icon name='sidebar' />
                    </Menu.Item>
                  </Menu>
                </Container>
                { isHome ? (<HomepageHeading mobile />) : null }
              </Segment>
              {children}
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Responsive>
      )
    }
  }
  
  MobileContainer.propTypes = {
    children: PropTypes.node,
  }

  export default MobileContainer;
