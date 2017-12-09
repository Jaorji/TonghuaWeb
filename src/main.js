import React,{Component} from 'react'
import {Carousel} from 'react-responsive-carousel';
import '../node_modules/react-responsive-carousel/lib/styles/carousel.css'
import './style/imageBox.css'
import Footer from './components/footer'
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


class Main extends Component{

  constructor(props){
    super(props);
    this.state={}
  }
 
  render(){   
    return(
      <div className="container">
        <div>
        <Paper zDepth={3}>
          <Carousel autoPlay interval={1000} infiniteLoop>
            <div>
              <img src={require('./assets/image/2.png')} />
            </div>
            <div>
              <img src={require('./assets/image/2.png')} />
            </div>
             <div>
              <img src={require('./assets/image/2.png')} />
            </div>
            <div>
              <img src={require('./assets/image/2.png')} />
            </div>
          </Carousel>
      </Paper>
      <div className="text">
        <p>Our Art Work</p>
        </div>
        <div className="cardDiv">
      <Card className="card">
        <img className="card1"src={require('./assets/image/1.png')}/>
        <CardActions  className="button">
          <FlatButton label="Action1"/>
        </CardActions>
      </Card>
      <Card className="card">
        <img className="card1"src={require('./assets/image/1.png')}/>
        <CardActions  className="button">
          <FlatButton label="Action1"/>
        </CardActions>
      </Card>
      <Card className="card">
        <img className="card1"src={require('./assets/image/1.png')}/>
        <CardActions  className="button">
          <FlatButton label="Action1"/>
        </CardActions>
      </Card>
      <Card className="card">
        <img className="card1"src={require('./assets/image/1.png')}/>
        <CardActions  className="button">
          <FlatButton label="Action1"/>
        </CardActions>
      </Card>
      </div>
      <div className="text">
        <p>Our Art Work</p>
        </div>
        <Divider/>
        <Footer/>
      </div>
      </div>      
    );
  }
 
}

export default Main;