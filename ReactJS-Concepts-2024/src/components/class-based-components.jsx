import { Component } from "react";

class ClassBasedComponent extends Component {
  // state
  state = {
    showText: true,
    changeColor: false,
    count: 0,
    changeCountStyle: false,
  };

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     showText: false,
  //   };
  // }

  // method
  handleClick = () => {
    console.log(this.state);

    const { showText, changeColor } = this.state;

    this.setState(
      {
        showText: !showText,
        changeColor: !changeColor,
        count: count + 1,
      },
      () => console.log(this.state)
    );
  };

  // componentDidMount
  // componentDidUpdate
  // componentWillUnmount

  componentDidMount() {
    console.log("this is called first time on page load");

    this.setState({
      showText: !this.state.showText,
      changeColor: !this.state.changeColor,
    });
  }

  handleCount = () => {
    this.setState({
      ...this.state,
      count: this.state.count + 1,
    });
  };

  componentDidUpdate(prevProps, prevSTate) {
    if (
      prevSTate &&
      prevSTate.count !== this.state.count &&
      this.state.count === 10
    ) {
      this.setState({
        ...this.state,
        changeCountStyle: true,
      });
    }
  }

  componentWillUnmount() {
    console.log("component is getting unmounted");
  }

  render() {
    const { showText, changeColor, count, changeCountStyle } = this.state;

    console.log(changeCountStyle);

    return (
      <div>
        {showText ? (
          <h3 style={{ color: changeColor ? "black" : "red" }}>
            Count: {count} {/* Display Count */}
            Class Based Components
          </h3>
        ) : null}

        <button onClick={this.handleClick}>Toggle Text</button>
        <button onClick={this.handleCount}>Increase Count Value</button>
        <h3
          style={{
            color: changeCountStyle ? "brown" : "green",
            fontSize: changeCountStyle ? "30px" : "12px",
          }}
        >
          Count is {count}
        </h3>
      </div>
    );
  }
}

export default ClassBasedComponent;
