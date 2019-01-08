import React, { Component } from 'react';
import styles from './routeAnimate.module'
import { TransitionGroup, CSSTransition } from "react-transition-group";
function classNames(prefix) {
  return {
    enter: styles[`${prefix}Enter`],
    enterActive: styles[`${prefix}EnterActive`],
    enterDone: styles[`${prefix}EnterDone`],
    exit: styles[`${prefix}Exit`],
    exitActive: styles[`${prefix}ExitActive`],
    exitDone: styles[`${prefix}ExitDone`]
  }

}
class RouteAnimate extends Component {
  render() {
    const { location, timeout, prefix } = this.props
    return (
      <TransitionGroup className={styles.contents}>
        <CSSTransition
          key={location.key}
          timeout={timeout}
          classNames={classNames.call(this, prefix)}
        >
          {this.props.children}
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default RouteAnimate;