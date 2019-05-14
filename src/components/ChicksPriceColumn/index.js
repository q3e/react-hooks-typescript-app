import React, { useState } from 'react';

const ChicksPriceColumn = () => {
  const [chicksCount, setChicksCount] = useState();
  const [chickPrice, setChickPrice] = useState();

  const onChange = (e) => setChicksCount(e.target.value);
  const onChangeChickPrice = (e) => setChickPrice(e.target.value);

  return (
    <div class="columns is-mobile">
      <div class="column">
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">No. of chicks</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control">
                <input
                  class="input is-rounded"
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
      <div class="column">
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Price/chick</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control">
                <input
                  class="input is-rounded"
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
