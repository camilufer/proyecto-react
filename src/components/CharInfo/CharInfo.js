import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

class CharInfo extends Component {
  constructor(props){
    super(props);

    this.state = {
      expanded: false,
    }
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  open(){
    this.setState({ expanded: !this.state.expanded })
  }
  close(){
    this.setState({ expanded: !this.state.expanded })
  }
  render() {
    const info = this.props.charInfo;
    if(!this.state.expanded){
      return(
        <p className="btn btn-info" onClick={this.open}>Show info</p>
      )
    }
    return(
      <Grid>
        <Row>
          <Col xs={6} sm={6} md={12}>
            <div className="user-details">
              <p className="btn btn-danger" onClick={this.close}>Hide info</p>
              <ul>
                <li><h3>Gender: {info.gender}</h3></li>
                <li><h3>Birth date: {info.birth_year}</h3></li>
                <li><h3>Hair color: {info.hair_color}</h3></li>
                <li><h3>Height: {info.height}</h3></li>
              </ul>
            </div>
          </Col>
        </Row>
      </Grid>
    )
  }
}


export default CharInfo;