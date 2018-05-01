import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui';
import Grid from 'material-ui/Grid';
import {
  faFighterJet,
  faCar,
  faBicycle,
  faGraduationCap,
  faComments,
  faUsers,
  faClipboardList,
  faLightbulb,
  faCommentAlt,
  faSmile,
  faBriefcase,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Button from 'material-ui/Button';
import { PlanCard } from './';

const styles = () => ({});

export function PlanSelector({ className }) {
  return (
    <Grid className={className} container spacing={16}>
      <Grid item xs={12} sm={4}>
        <PlanCard title="Class C" icon={faBicycle} price={0}>
          <List>
            <ListItem>
              <ListItemIcon>
                <FontAwesomeIcon icon={faGraduationCap} size="1x" />
              </ListItemIcon>
              <ListItemText inset primary="Access to all our tutorials" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FontAwesomeIcon icon={faComments} size="1x" />
              </ListItemIcon>
              <ListItemText inset primary="Slack channel" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FontAwesomeIcon icon={faUsers} size="1x" />
              </ListItemIcon>
              <ListItemText inset primary="Online meetups" />
            </ListItem>
          </List>
          <Button variant="raised" color="primary" fullWidth>
            Select Class C
          </Button>
        </PlanCard>
      </Grid>
      <Grid item xs={12} sm={4}>
        <PlanCard title="Class B" icon={faCar} price={49.99}>
          <List>
            <ListItem>
              <ListItemIcon>
                <FontAwesomeIcon icon={faBicycle} size="1x" />
              </ListItemIcon>
              <ListItemText inset primary="Everything from Class C plus..." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FontAwesomeIcon icon={faBriefcase} size="1x" />
              </ListItemIcon>
              <ListItemText inset primary="Portfolio page" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FontAwesomeIcon icon={faClipboardList} size="1x" />
              </ListItemIcon>
              <ListItemText inset primary="Job board" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FontAwesomeIcon icon={faLightbulb} size="1x" />
              </ListItemIcon>
              <ListItemText inset primary="Mastermind sessions" />
            </ListItem>
          </List>
          <Button variant="raised" color="primary" fullWidth>
            Select Class B
          </Button>
        </PlanCard>
      </Grid>
      <Grid item xs={12} sm={4}>
        <PlanCard title="Class A" icon={faFighterJet} price={99.99}>
          <List>
            <ListItem>
              <ListItemIcon>
                <FontAwesomeIcon icon={faCar} size="1x" />
              </ListItemIcon>
              <ListItemText inset primary="Everything from Class B plus..." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FontAwesomeIcon icon={faCommentAlt} size="1x" />
              </ListItemIcon>
              <ListItemText inset primary="Interview preparation" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FontAwesomeIcon icon={faSmile} size="1x" />
              </ListItemIcon>
              <ListItemText inset primary="Mentorship" />
            </ListItem>
          </List>
          <Button variant="raised" color="primary" fullWidth>
            Select Class A
          </Button>
        </PlanCard>
      </Grid>
    </Grid>
  );
}

PlanSelector.propTypes = {
  className: PropTypes.string,
};

PlanSelector.defaultProps = {
  className: '',
};

export default withStyles(styles)(PlanSelector);
