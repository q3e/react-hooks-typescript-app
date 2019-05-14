import React, { useState } from 'react';

const ChicksPriceColumn = () => {
  const [chicks, setChicks] = useState({
		count: '',
		price: '',
	});

  const onChange = (e) => setChicks({
		...chicks,
		[e.target.name]: e.target.value,
	});

  return (
    <div className="columns is-mobile">
      <div className="column">
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Chicks</label>
          </div>
          <div className="field-body">
            <div className="field">
              <p className="control">
                <input
                  className="input is-rounded"
                  type="number"
									placeholder="Number of chicks"
									name="chicks"
                  onChange={onChange}
                  value={chicks.count}
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
									name="price"
                  onChange={onChange}
                  value={chicks.price}
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
