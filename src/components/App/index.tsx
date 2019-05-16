import React from 'react';
import FeedsPriceColumn from '../FeedsPriceColumn';
import ChicksPriceColumn from '../ChicksPriceColumn';

import '../../styles/App.scss';

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="App-header">
        <div className="columns is-mobile is-centered">
          <div className="column is-full">
            <h3 className="title is-3">
              Poultry Farming Cost and Profit Calculator
            </h3>
          </div>
        </div>

        <ChicksPriceColumn />

        <div className="columns is-mobile">
          <div className="column">
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Other costs</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control">
                    <input
                      className="input is-rounded"
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
