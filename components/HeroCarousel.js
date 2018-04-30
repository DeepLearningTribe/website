import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'nuka-carousel';
import IconButton from 'material-ui/IconButton';
import ChevronRight from '@material-ui/icons/ChevronRight';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = {
  container: {
    height: '80vh',
    background: `linear-gradient(rgba(0, 0, 80, 0.5), rgba(0, 0, 180, 0.5)),
      url("/static/images/coding.jpg") no-repeat center center`,
    backgroundSize: 'cover',
  },
  slide: {
    height: '80vh',
    position: 'relative',
    backgroundPosition: 'center',
    textAlign: 'left',
    padding: '4rem 40% 1rem 10%',
    color: 'white',
    fontSize: '2.2rem',
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
    textAlign: 'right',
    padding: '4rem 5% 1rem 50%',
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
    textAlign: 'right',
    padding: '4rem 5% 1rem 40%',
  },
  ctaButton: {
    fontSize: '2rem',
    padding: '1rem 4rem',
  },
};

class HeroCarousel extends React.Component {
  state = {};

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
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
            <h1>Join us and start your deep learning journey</h1>
            <p>
              Our free membership provides access to all our tutorials, slack
              channel and events for free!
            </p>
            <Button
              className={classes.ctaButton}
              variant="raised"
              color="secondary"
              size="large"
            >
              Join Us Now For Free!
            </Button>
          </div>
          <div className={`${classes.slide} ${classes.slide2}`}>
            <h1>We are here to help each other learn deep learning</h1>
            <p>
              Become a premium member and get your own custom portfolio page!
            </p>
            <Button
              className={classes.ctaButton}
              variant="raised"
              color="secondary"
              size="large"
            >
              Join Us Now!
            </Button>
          </div>
          <div className={`${classes.slide} ${classes.slide3}`}>
            <h1>Let&apos;s learn deep learning together!</h1>
            <p>Participate in our weekly masterminds!</p>
            <Button
              className={classes.ctaButton}
              variant="raised"
              color="secondary"
              size="large"
            >
              Join Us Now!
            </Button>
          </div>
          <div className={`${classes.slide} ${classes.slide4}`}>
            <h1>We are the deep learning community</h1>
            <p>Get expert help from other members!</p>
            <Button
              className={classes.ctaButton}
              variant="raised"
              color="secondary"
              size="large"
            >
              Join Us Now!
            </Button>
          </div>
        </Carousel>
      </div>
    );
  }
}

HeroCarousel.propTypes = {
  classes: PropTypes.shape({
    container: PropTypes.string.isRequired,
    slide: PropTypes.string.isRequired,
    slideImage: PropTypes.string.isRequired,
    slideText: PropTypes.string.isRequired,
    slide1: PropTypes.string.isRequired,
    slide2: PropTypes.string.isRequired,
    slide3: PropTypes.string.isRequired,
    slide4: PropTypes.string.isRequired,
    ctaButton: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(HeroCarousel);
