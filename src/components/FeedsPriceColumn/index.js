import React, { useState } from 'react';

const FeedsColumn = () => {
  const [feeds, setFeeds] = useState({
    starterFeed: false,
    growerFeed: false,
    finisherFeed: false,
  })

  const onChange = (e) => setFeeds({
    [e.target.name]: e.target.checked,
  });
  console.log('state: ', feeds)
  return (
    <div className="columns is-mobile">
      <div className="column">
        <h4 className="title is-4">Feeds Cost</h4>
        <div className="container">
          <div className="field">
            <input
              className="is-checkradio"
              id="starterFeed"
              type="checkbox"
              name="starterFeed"
              value={feeds.starterFeed}
              onChange={onChange}
            />
            <label htmlFor="starterFeed">Starter</label>
          </div>
          <div className="field">
            <input
              className="is-checkradio"
              id="growerFeed"
              type="checkbox"
              name="growerFeed"
              value={feeds.growerFeed}
              onChange={onChange}
            />
            <label htmlFor="growerFeed">Grower</label>
          </div>
          <div className="field">
            <input
              className="is-checkradio"
              id="finisherFeed"
              type="checkbox"
              name="finisherFeed"
              value={feeds.finisherFeed}
              onChange={onChange}
            />
            <label htmlFor="finisherFeed">Finisher</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedsColumn;
