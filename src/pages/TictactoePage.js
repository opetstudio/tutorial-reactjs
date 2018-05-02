import React, { Component } from 'react';
import {
  Container,
  Grid,
  Header,
  Responsive,
  Segment,
  Image
} from 'semantic-ui-react';
import FooterContainer from '../containers/FooterContainer';
import Game from '../containers/tictacgame/Game';

class TictactoePage extends Component {
  render() {
    return (
      <div>
        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as='h3' style={{ fontSize: '2em' }}>We Help Companies and Companions</Header>
                <p style={{ fontSize: '1.33em' }}>
                  We can give your company superpowers to do things that they never thought possible. Let us delight
                  your customers and empower your needs... through pure data analytics.
                </p>
                <Game />
              </Grid.Column>
              <Grid.Column floated='right' width={6}>
                <Image
                  bordered
                  rounded
                  size='large'
                  src='https://react.semantic-ui.com/assets/images/wireframe/white-image.png'
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <FooterContainer />
        </Segment>
      </div>
    );
  }
}

export default TictactoePage;
