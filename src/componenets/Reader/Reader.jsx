import React, { Component } from "react";

export class Reader extends Component {
  state = {
    index: 0,
  };

  changeIndex = (value) => {
    this.setState((state) => ({ index: state.index + value }));
  };

  render() {
    const currentItem = this.props.items[this.state.index];

    return (
      <div>
        <section>
          <button type="button" onClick={() => this.changeIndex(-1)}>
            Назад
          </button>
          <button type="button" onClick={() => this.changeIndex(1)}>
            Вперед
          </button>
        </section>

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
