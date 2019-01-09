import React, { Component } from 'react';
import styles from './routeAnimate.module'
import { TransitionGroup, CSSTransition } from "react-transition-group";
function classNames(prefix = "my") {
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
          {/* 这里必须加一个容器来包裹，否则在使用Card进行页面布局的时候动画效果会有问题 */}
          <div className={styles.animateWrapper}>
            {this.props.children}
          </div>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default RouteAnimate;