import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { loadItems, clearItems } from "./actions";

class App extends Component {
  state = {
    clickCount: 0
  };
  render() {
    const { loadItems, clearItems, items = [] } = this.props;
    const wrapperMethod = () => {
      this.setState(
        {
          clickCount: this.state.clickCount + 1
        },
        () => {
          loadItems();
        }
      );
    };
    return (
      <div className="App">
        <p>Hello App {this.state.clickCount}</p>
        <ul>
          {items.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div>
          <button onClick={wrapperMethod}>Load items</button>
          <button onClick={clearItems}>Clear</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { items: state.items };
};

const mapDispatch = dispatch => {
  return bindActionCreators({ loadItems, clearItems }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatch
)(App);
