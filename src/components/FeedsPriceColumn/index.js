import React from "react";

const FeedsColumn = () => {
  return (
    <div class="columns is-mobile">
      <div class="column">
        <h4 class="title is-4">Feeds Cost</h4>
        <div class="container">
          <div class="field">
            <input
              class="is-checkradio"
              id="starterFeed"
              type="checkbox"
              name="starterFeed"
              checked="checked"
            />
            <label for="starterFeed">Starter</label>
          </div>
          <div class="field">
            <input
              class="is-checkradio"
              id="growerFeed"
              type="checkbox"
              name="growerFeed"
              checked="checked"
            />
            <label for="growerFeed">Grower</label>
          </div>
          <div class="field">
            <input
              class="is-checkradio"
              id="FinisherFeed"
              type="checkbox"
              name="FinisherFeed"
              checked="checked"
            />
            <label for="FinisherFeed">Finisher</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedsColumn;
