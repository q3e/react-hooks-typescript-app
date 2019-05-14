import React from "react";
import FeedsPriceColumn from "../FeedsPriceColumn";
import ChicksPriceColumn from "../ChicksPriceColumn";

import "../../styles/App.scss";

const App = () => {
  return (
    <div className="app">
      <header className="App-header">
        <div class="columns is-mobile is-centered">
          <div class="column is-full">
            <h3 class="title is-3">
              Poultry Farming Cost and Profit Calculator
            </h3>
          </div>
        </div>

        <ChicksPriceColumn />

        <div class="columns is-mobile">
          <div class="column">
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Other costs</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <p class="control">
                    <input
                      class="input is-rounded"
                      type="number"
                      placeholder="Other costs e.g rent, salary"
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <FeedsPriceColumn />
      </header>
    </div>
  );
};

export default App;
