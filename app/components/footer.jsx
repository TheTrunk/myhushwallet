import React from 'react'
import {Container, Row, Col} from 'reactstrap';

var footer = {
  backgroundColor: '#f5f5f5'
}

var longP = {
  wordWrap: 'break-word'
}

export default class ZFooter extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (      
      <div style={footer}>
        <br/>
        <Container>      
        <Row>
          <Col md="8">
            <p>MAKE SURE YOU ARE ON <b>WALLET.MYHUSH.ORG</b></p>

            <p>Keys are validated client-side and do not leave your browser or network. You are responsible for keeping your own keys safe!!!</p>

            <p>Suggestions? <a href="https://myhush.org/#contact">Contact us</a> or join our <a href="https://discord.io/hush">Discord</a> server!</p>          

            <p style={longP}>Donations are always welcome!<br/>
              <b>HUSH</b>: t1UDhNq2aEqvxEbPzcRM8n2QJV8YJ664rXJ<br/>
            </p>
          </Col>
          <Col md="4">
            <a href="https://myhush.org/">website</a><br/>
            <a href="https://forum.myhush.org/">forum</a><br/>
            <a href="https://github.com/MyHush/myhushwallet">github</a><br/>
            <a href="https://myhush.slack.com/">slack</a><br/>
            <a href="https://discord.io/hush">discord</a><br/>
          </Col>
        </Row>
        </Container>
      </div>
    )
  }
}