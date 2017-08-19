import React from 'react'
import {Container, Row, Col} from 'reactstrap';

var footer = {
  backgroundColor: '#2d2d2d',
  color: '#fff'
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
            <p>MAKE SURE YOU ARE ON <b>MYHUSHWALLET.IO</b></p>

            <p>Keys are validated client-side and do not leave your browser or network. You are responsible for keeping your own keys safe!!!</p>

            <p>Suggestions? Open a issue on <a href="https://github.com/MyHush/myhushwallet/issues" target="_blank">Github</a></p>          

            <p style={longP}>Donations are always welcome!<br/>
              <b>BTC</b>: 1HdcMMjVhzzn6ZjvvyDfWbodYBbqLM9cwK <br/>
              <b>HUSH</b>: t1dSqorCh1PdyvViTRHzKdAFjnR81VyGv1u 
            </p>
          </Col>
          <Col md="4">
            <a href="https://myhush.org/">Myhush.org</a><br/>
            <a href="https://forum.myhush.org/">Forum</a><br/>
            <a href="https://github.com/myhush">Github</a><br/>
            <a href="hhttp://slack.myhush.org/">Slack</a><br/>
          </Col>
        </Row>
        </Container>
      </div>
    )
  }
}
