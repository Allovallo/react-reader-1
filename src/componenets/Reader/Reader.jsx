import React, { Component } from "react";
import { Controls } from "./Controls";

export class Reader extends Component {
  state = {
    index: 0,
  };

  changeIndex = (value) => {
    this.setState((state) => ({ index: state.index + value }));
  };

  render() {
    const { index } = this.state;
    const { items } = this.props;
    const totalItems = items.length;
    const currentItem = items[index];

    return (
      <div>
        <Controls
          current={index + 1}
          total={totalItems}
          onChange={this.changeIndex}
        />

        <p>
          {this.state.index + 1}/{this.props.items.length}
        </p>

        <article>
          <h2>{currentItem.title}</h2>
          <p>{currentItem.text}</p>
        </article>
      </div>
    );
  }
}
