import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'nuka-carousel';
import IconButton from 'material-ui/IconButton';
import ChevronRight from '@material-ui/icons/ChevronRight';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = {
  slide: {
    height: '800px',
    position: 'relative',
    backgroundPosition: 'center',
    textAlign: 'left',
    padding: 100,
    color: 'white',
  },
  slideImage: {
    position: 'absolute',
    left: 0,
  },
  slideText: {
    marginTop: '100px',
  },
  slide1: {
    background: `linear-gradient(rgba(0, 0, 80, 0.5), rgba(0, 0, 180, 0.5)),
      url("/static/images/coding.jpg") no-repeat center center`,
    backgroundSize: 'cover',
  },
  slide2: {
    background: `linear-gradient(rgba(0, 0, 80, 0.5), rgba(0, 0, 180, 0.5)),
      url("/static/images/group_coding.jpg") no-repeat center center`,
    backgroundSize: 'cover',
  },
  slide3: {
    background: `linear-gradient(rgba(0, 0, 80, 0.5), rgba(0, 0, 180, 0.5)),
      url("/static/images/group.jpg") no-repeat center center`,
    backgroundSize: 'cover',
  },
  slide4: {
    background: `linear-gradient(rgba(0, 0, 80, 0.5), rgba(0, 0, 180, 0.5)),
      url("/static/images/whiteboard.jpg") no-repeat center center`,
    backgroundSize: 'cover',
  },
};

class HeroCarousel extends React.Component {
  state = {};

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Carousel
          renderCenterLeftControls={({ previousSlide }) => (
            <IconButton
              className={classes.button}
              onClick={previousSlide}
              aria-label="Left"
            >
              <ChevronLeft />
            </IconButton>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <IconButton
              className={classes.button}
              onClick={nextSlide}
              aria-label="Right"
            >
              <ChevronRight />
            </IconButton>
          )}
        >
          <div className={`${classes.slide} ${classes.slide1}`}>
            <h1>Join us and start learning deep learning</h1>
            <p>jasfdl;kaslkdfjl</p>
            <Button variant="raised" color="secondary" size="large">
              Join Us Now!
            </Button>
          </div>
          <div className={`${classes.slide} ${classes.slide2}`}>
            <h1>We are here to help each other learn deep learning</h1>
            <p>some text</p>
          </div>
          <div className={`${classes.slide} ${classes.slide3}`}>
            <h1>Let&apos;s learn deep learning together!</h1>
            <p>some text</p>
          </div>
          <div className={`${classes.slide} ${classes.slide4}`}>
            <h1>We are the deep learning community</h1>
            <p>some text</p>
          </div>
        </Carousel>
      </div>
    );
  }
}

HeroCarousel.propTypes = {
  classes: PropTypes.shape({
    slide: PropTypes.string.isRequired,
    slideImage: PropTypes.string.isRequired,
    slideText: PropTypes.string.isRequired,
    slide1: PropTypes.string.isRequired,
    slide2: PropTypes.string.isRequired,
    slide3: PropTypes.string.isRequired,
    slide4: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(HeroCarousel);
