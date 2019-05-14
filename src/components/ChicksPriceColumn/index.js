import React from "react";

const ChicksPriceColumn = () => {
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
