import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import isEmail from 'validator/lib/isEmail';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import {
  faBullseye,
  faComments,
  faCodeBranch,
  faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';
import withRoot from '../src/withRoot';
import {
  Newsletter,
  HeroCarousel,
  Navbar,
  Footer,
  Block,
  Title,
  IconCard,
} from '../components';

const styles = () => ({
  container: {
    fontFamily: "'Lato', sans-serif",
    textAlign: 'justify',
  },
  block1: {
    padding: '80px 10px',
  },
  block2: {
    padding: '80px 10px',
  },
  image1: {
    margin: '50px 50px 0 0',
  },
  image2: {
    margin: '50px 0 30px 50px',
  },
  iconCard1: {
    marginTop: 80,
  },
});

class Index extends React.Component {
  state = {
    newsletterEmail: '',
    isNewsletterValid: true,
    isDone: false,
    isLoading: false,
    isSuccess: false,
  };

  onNewsletterInputChange = e => {
    const { value: newsletterEmail } = e.target;
    const isNewsletterValid = isEmail(newsletterEmail);
    this.setState({ newsletterEmail, isNewsletterValid });
  };

  onNewsletterButtonClick = () => {
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.setState({ isLoading: false, isSuccess: true });
    }, 5000);
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Navbar />
        <HeroCarousel />
        <Block className={classes.block1}>
          <Grid container spacing={16}>
            <Grid item xs={12} sm={6}>
              <div className={classes.image1}>
                <img src="/static/images/coding.jpg" alt="" />
              </div>
              <div className={classes.image2}>
                <img src="/static/images/group.jpg" alt="" />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Title>What Is Deep Learning Tribe</Title>
              <p>
                We are a group of deep learning enthusiasts. We help each other
                learn, use and teach deep learning topics.
              </p>
              <p>Join our tribe to:</p>
              <ul />
              <li>
                Get a job as a deep learning engineer Lean how to use deep
              </li>
              <li>
                learning in your current job Start a new business based on deep
              </li>
              <li>learning Study deep learning, because it is fun</li>
            </Grid>
          </Grid>
        </Block>
        <Block className={classes.block2}>
          <Grid container spacing={40}>
            <Grid item xs={12} sm={5}>
              <Title>What We Do</Title>
              <br />
              <Typography variant="subheading">
                Deep Learning Tribe is here to help you learn.
              </Typography>
              <br />
              <Typography variant="body1">
                Our main focus is to help you learn deep learning skills while
                at the same time building your portfolio. We rely on the members
                to write blog posts, organize events, create tutorials and
                provide value for the community in other ways.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={7}>
              <Grid container spacing={40}>
                <Grid item xs={12} sm={6}>
                  <IconCard
                    title="Slack discussions"
                    icon={faComments}
                    className={classes.iconCard1}
                  >
                    If you need help or just want to chat, while your model is
                    training, our Slack channel is the place to go.
                  </IconCard>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <IconCard title="Weekly masterminds" icon={faBullseye}>
                    In our mastermind session we discuss our achievements, set
                    deep learning goals and ask for help from the deep learning
                    tribe.
                  </IconCard>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <IconCard
                    className={classes.iconCard1}
                    title="Collaboration on projects"
                    icon={faCodeBranch}
                  >
                    If you need partners for your project (startup, Kaggle
                    competition, etc.) you can always find one in the Deep
                    Learning Tribe.
                  </IconCard>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <IconCard title="Expert instruction" icon={faGraduationCap}>
                    We all have different skills and experience, so if you need
                    some help from the expert you can find it on Deep Learning
                    Tribe.
                  </IconCard>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Block>
        <Newsletter
          value={this.state.newsletterEmail}
          isValid={this.state.isNewsletterValid}
          isDone={this.state.isDone}
          isSuccess={this.state.isSuccess}
          isLoading={this.state.isLoading}
          onChange={this.onNewsletterInputChange}
          onClick={this.onNewsletterButtonClick}
        />
        <Footer />
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.shape({
    classes: PropTypes.shape({
      container: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default withRoot(withStyles(styles)(Index));
