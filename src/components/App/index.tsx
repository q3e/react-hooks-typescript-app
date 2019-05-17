import React from 'react';

import FeedsPriceColumn from '../FeedsPriceColumn';
import ChicksPriceColumn from '../ChicksPriceColumn';
import TotalCost from '../TotalCost';
import OtherCost from '../OtherCost';

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

				<OtherCost />

        <FeedsPriceColumn />

				<TotalCost totalCost=""/>
      </header>
    </div>
  );
};

export default App;
