import React, { Fragment } from "react";

class Counter extends React.Component {
  getCountValue = () => {
    return this.props.counter.count === 0 ? "Zero" : this.props.counter.count;
  };

  getCountStyling = () => {
    return this.props.counter.count >= 1
      ? "badge badge-secondary"
      : "badge badge-dark";
  };

  render() {
    const {
      incrementCount,
      decrementCount,
      counter,
      deleteCount,
      counter: { count }
    } = this.props;
    return (
      <Fragment>
        <div className='card'>
          <div href='#' className={this.getCountStyling()}>
            {this.getCountValue()}
          </div>
          <button
            className='btn btn-dark'
            onClick={() => incrementCount(counter)}
          >
            +
          </button>
          <button
            className={`btn btn-${count >= 1 ? "dark" : "light"}`}
            onClick={() => decrementCount(counter)}
          >
            -
          </button>

          <button
            href='#'
            className='btn btn-primary'
            onClick={() => deleteCount(counter)}
          >
            Delete
          </button>
        </div>
      </Fragment>
    );
  }
}

export default Counter;
