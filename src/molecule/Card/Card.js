import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';
import omit from 'lodash/omit';
import classnames from 'classnames';
import Button from 'atom/Button/Button';
import styles from './Card.scss';

export class Card extends PureComponent {
  renderCtaButton() {
    const {
      ctaurl,
      ctatext,
      fromstring,
    } = this.props;

    return ctatext
      ? (
        <Button
          data-testid="ctaButton"
          className={styles.ctaButton}
          theme="primary"
          href={ctaurl}
          fromstring={fromstring}
        >
          {ctatext}
        </Button>
      )
      : null;
  }

  renderHeader() {
    const {
      title,
      header,
      cardHeaderClass,
    } = this.props;

    if (header) return header;

    return title ? (
      <header data-testid="HeaderTitle" className={classnames(styles.cardHeader, cardHeaderClass)}>
        <h2 className={styles.cardHeading}>
          {title}
        </h2>
      </header>
    ) : null;
  }

  renderFooter() {
    const { ctatext, footer } = this.props;

    if (footer) return footer;

    return ctatext ? (
      <footer data-testid="CardFooter" className={styles.cardFooter}>
        {this.renderCtaButton()}
      </footer>
    ) : null;
  }

  render() {
    const {
      children,
      className,
      regionName,
      title,
      ...other
    } = this.props;

    const otherProps = omit({ ...other }, ['cardHeaderClass']);

    return (
      <section className={`${styles.card} ${className}`} {...otherProps} aria-label={regionName || title}>
        {this.renderHeader()}
        {children}
        {this.renderFooter()}
      </section>
    );
  }
}

Card.propTypes = {
  /**
   * Contents of the Card
   */
  children: PropTypes.node.isRequired,
  /**
   * Pass through CSS class for outer Card wrapper
   */
  className: PropTypes.string,
  /**
   * Heading Text of the Card
   */
  title: PropTypes.string,
  /**
   * Pass through CSS class for the Card header
   */
  cardHeaderClass: PropTypes.string,
  /**
   * Call to Action message
   */
  ctatext: PropTypes.string,
  /**
   * Call to Action URL
   */
  ctaurl: PropTypes.string,
  /**
   * Specify from string
   */
  fromstring: PropTypes.string,
  /**
   * Optional header component
   */
  header: PropTypes.node,
  /**
   * Optional footer component
   */
  footer: PropTypes.node,
};

export default withStyles(styles)(Card);
