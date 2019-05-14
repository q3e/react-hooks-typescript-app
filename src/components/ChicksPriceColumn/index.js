import React, { useState } from 'react';

const ChicksPriceColumn = () => {
  const [chicksCount, setChicksCount] = useState();
  const [chickPrice, setChickPrice] = useState();

  const onChange = (e) => setChicksCount(e.target.value);
  const onChangeChickPrice = (e) => setChickPrice(e.target.value);

  return (
    <div className="columns is-mobile">
      <div className="column">
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">No. of chicks</label>
          </div>
          <div className="field-body">
            <div className="field">
              <p className="control">
                <input
                  className="input is-rounded"
                  type="number"
                  placeholder="Number of chicks"
                  onChange={onChange}
                  value={chicksCount}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Price/chick</label>
          </div>
          <div className="field-body">
            <div className="field">
              <p className="control">
                <input
                  className="input is-rounded"
                  type="number"
                  placeholder="Price per chick"
                  onChange={onChangeChickPrice}
                  value={chickPrice}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChicksPriceColumn;
