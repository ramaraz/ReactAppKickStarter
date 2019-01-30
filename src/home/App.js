import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { loadItems, clearItems } from "../actions";
import Counter from "./Counter";
import Items from "./Items";

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
        this.props.loadItems(this.state.clickCount);
      }
    );
  };

  componentDidMount(){
   const randomNumber =  Math.ceil(Math.random()*10);
    this.props.loadItems(randomNumber);
  }

updateCounterAndReloadBound = this.updateCounterAndReload.bind(this)
  render() {
    const {clearItems, items = [], title } = this.props;
    const {clickCount} = this.state;
    
    return (
      <div className="App">
        <p>Welcome To React {title}</p>
        <Items items={items}  />
        <div>
          <button onClick={this.updateCounterAndReloadBound}>Load items</button>
          <button onClick={clearItems}>Clear</button>
        </div><br/>
        <Counter  clickCount={clickCount}/>
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
