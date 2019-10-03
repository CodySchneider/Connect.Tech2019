import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import withStyles from 'isomorphic-style-loader/withStyles';
import get from 'lodash/get';
import styles from './Button.scss';

export class Button extends PureComponent {

  renderButton() {
    const {
      children,
      disabled,
      theme,
      ariaLabel,
      className,
      fromstring,
      buttonRef,
      ...other
    } = this.props;
    const classes = classnames(
      className,
      styles[theme],
      {
        [styles.disabled]: disabled,
        [styles.iconOnly]: get(children, 'props.set', false),
      },
    );

    return (
      <button
        data-testid="ctaButton"
        className={classes}
        {...other}
        type="button"
        disabled={disabled}
        aria-label={ariaLabel}
        data-from-string={fromstring}
        ref={buttonRef}
      >
        {children}
      </button>
    );
  }

  renderLink() {
    const {
      children,
      disabled,
      theme,
      href,
      ariaLabel,
      className,
      fromString,
      buttonRef,
      ...other
    } = this.props;
    const classes = classnames(
      className,
      styles[theme],
      {
        [styles.disabled]: disabled,
        [styles.iconOnly]: get(children, 'props.set', false),
      },
    );

    return (
      <a
        className={classes}
        {...other}
        href={href}
        aria-label={ariaLabel}
        data-from-string={fromString}
        ref={buttonRef}
      >
        {children}
      </a>
    );
  }

  render() {
    const {
      href,
    } = this.props;

    return href ? this.renderLink() : this.renderButton();
  }
}

Button.propTypes = {
  /**
   * Specify the content of your Button
   */
  children: PropTypes.node,

  /**
   * Specify whether the Button should be disabled, or not
   */
  disabled: PropTypes.bool,

  /**
   * Optionally specify an href for your Button to become an <a> element
   */
  href: PropTypes.string,

  /**
   * The ARIA label which describes the button
   * Only use this if the button has no text content
   */
  ariaLabel: PropTypes.string,

  /**
   * Specify the theme of Button you want to create
   */
  theme: PropTypes.oneOf(['primary', 'secondary', 'default']),

  /**
   * Specify from string
   */
  fromstring: PropTypes.string,

  /**
   * Pass through ref for things like handling keyboard focus
   */
  buttonRef: PropTypes.object,
};

Button.defaultProps = {
  disabled: false,
  theme: 'default',
};

export default withStyles(styles)(Button);
