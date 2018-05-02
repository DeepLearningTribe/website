import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui';
import Typography from 'material-ui/Typography';
import { IconCard } from './';

const styles = () => ({
  price: {
    textAlign: 'center',
  },
});

export function PlanCard({ title, icon, price, classes, children }) {
  return (
    <IconCard title={title} icon={icon}>
      <hr />
      <Typography variant="subheading" className={classes.price}>
        {price ? `$ ${price} / month` : 'FREE'}
      </Typography>
      <hr />
      {children}
    </IconCard>
  );
}

PlanCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  price: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(PlanCard);
