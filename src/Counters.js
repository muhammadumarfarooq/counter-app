import React from "react";

import Counter from "./Counter";

class Counters extends React.Component {
  state = {
    counters: [{ id: 1, count: 0 }, { id: 2, count: 0 }, { id: 3, count: 0 }],
    totalCount: 0
  };

  handleReset = () => {
    this.state.counters.map((counter, index) => {
      const counters = [...this.state.counters];
      counters[index].count = 0;
      this.setState({ counters });
    });
  };

  incrementCount = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].count++;
    this.setState({ counters });
  };

  decrementCount = counter => {
    if (counter.count >= 1) {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = { ...counter };
      counters[index].count--;
      this.setState({ counters });
    }
  };

  deleteCount = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].count = 0;
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <nav className='navbar bg-light'>
          <h2>
            Counter{" "}
            <span className='badge badge-dark'>
              {this.state.counters.filter(c => c.count >= 1).length}
            </span>
          </h2>
        </nav>
        <div className='container all-center'>
          <span
            href='#'
            className='btn btn-secondary'
            onClick={this.handleReset}
          >
            Reset
          </span>

          {this.state.counters.map(counter => (
            <Counter
              key={counter.id}
              counter={counter}
              incrementCount={this.incrementCount}
              decrementCount={this.decrementCount}
              deleteCount={this.deleteCount}
            />
          ))}
          {/*       
          <Counter
            totalCount={this.totalCount}
            decreTotalCount={this.decreTotalCount}
            deleteTotalCount={this.deleteTotalCount}
            count={this.state.count}
            increCount={this.increCount}
            decreCount={this.decreCount}
            deleteCount={this.deleteCount}
          /> */}
          {/* 
          <Counter
            totalCount={this.totalCount}
            decreTotalCount={this.decreTotalCount}
            deleteTotalCount={this.deleteTotalCount}
          /> */}
        </div>
      </div>
    );
  }
}

export default Counters;
