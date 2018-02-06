import React, { Component } from 'react';
// import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import './css/style.css';

import { connect } from 'react-redux';
import {
  fetchDatasWithRedux,
  postIdWithRedux,
} from '../../../actions/actionListCourse/actionListCourse.js';

import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

class ListCourse extends Component {
  componentDidMount() {
    this.props.fetchDatasWithRedux();
  }
  render() {
    return (
      <div className="root">
        <Grid container spacing={24}>
          {this.props.data.map((card, index) => {
            return (
              <Grid key={card.id} item xs={12} sm={6} md={3}>
                <Card className="card">
                  {/* <CardMedia
                      className='media'
                      image='http://www.liveanimalslist.com/reptiles/images/lizard-eye-view.jpg'
                      title="Contemplative Reptile"
                      /> */}
                  <CardContent>
                    <Typography type="headline" component="h2">
                      {card.id}
                      {card.title}
                    </Typography>
                    <Typography component="p">{card.body}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      onClick={() => this.onClickShowId(card.id)}
                    >
                      Share
                    </Button>
                    <Button size="small" color="primary">
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }
  onClickShowId = postId => {
    this.props.postIdWithRedux(postId);
  };
}

function mapStateToProps(state) {
  return {
    data: state.dataReducer.data,
    // id: state.dataReducer.id,
  };
}
export default connect(mapStateToProps, {
  fetchDatasWithRedux,
  postIdWithRedux,
})(ListCourse);
