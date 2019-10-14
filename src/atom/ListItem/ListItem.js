import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import withStyles from 'isomorphic-style-loader/withStyles';
import { Button } from 'atom/Button/Button';
import styles from './ListItem.scss';

export const ListItem = (props) => {
  const {
    children,
    className,
    href,
    onClick,
    outerBorder,
    ...other
  } = props;
  const classes = classnames(
    styles.listItem,
    className,
    {
      [styles.outerBorder]: outerBorder,
    }
  );

  return (
    (href || onClick) ? (
      <Button
        href={href}
        onClick={onClick}
        className={classes}
        {...other}
      >
        {children}
      </Button>
    )
      : (
        <div
          className={classes}
          {...other}
        >
          {children}
        </div>
      )
  );
};

ListItem.propTypes = {
  /**
   * Pass in content to render inside of the ListGroup
   */
  children: PropTypes.node,
  /**
   * Provide a class for custom style overrides
   */
  className: PropTypes.string,
  /**
   * Use an href for the list item to be wrapped in a link
   */
  href: PropTypes.string,
  /**
   * Adding an onClick handler wraps list elements in a button
   */
  onClick: PropTypes.func,
  /**
   * Adds top and bottom borders to all elements. Useful if the list isn't
   * bounded by another container. Each list which requires bounding borders
   * needs to have its own container.
   */
  outerBorder: PropTypes.bool,
};

export default withStyles(styles)(ListItem);
