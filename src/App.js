import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { loadItems, clearItems } from "./actions";
import { mapTo } from "rxjs-compat/operator/mapTo";

class App extends Component {
  state = {
    clickCount: 1
  };
   updateCounterAndReload() {
    this.setState(
      {
        clickCount: this.state.clickCount + 1
      },
      () => {
        console.log('loadItems');
        this.props.loadItems(this.state.clickCount);
      }
    );
  };

  componentDidMount(){
   const randomNumber =  Math.ceil(Math.random()*10)
    this.props.loadItems(randomNumber);
  }

updateCounterAndReloadBound = this.updateCounterAndReload.bind(this)
  render() {
    const { loadItems, clearItems, items = [], title } = this.props;
    const {clickCount} = this.state;
    
    return (
      <div className="App">
        <p>Welcome To React {title}</p>
        <ul>
          {items.map((item,index) => (
            <li key={Date.now() + 'r' + index}>{item}</li>
          ))}
        </ul>
        <div>
          <button onClick={this.updateCounterAndReloadBound}>Load items</button>
          <button onClick={clearItems}>Clear</button>
        </div><br/>
        <div>Count:{clickCount}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { items: state.items, title: state.title };
};

const mapDispatch = dispatch => {
  return bindActionCreators({ loadItems, clearItems }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatch
)(App);
