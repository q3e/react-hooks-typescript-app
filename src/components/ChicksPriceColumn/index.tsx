import React, { useState } from 'react';

type ChicksObject = {
  count: string;
  price:  string;
}

const ChicksPriceColumn: React.FC = () => {
  const [chicks, setChicks] = useState<ChicksObject>({
		count: '',
		price: '',
	});

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setChicks({
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
									name="count"
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
			<div className="column">
				{
					new Intl.NumberFormat('en-US', { style: 'currency', currency: 'KES' })
						.format(Number(chicks.count) * Number(chicks.price))
				}
			</div>
    </div>
  );
};

export default ChicksPriceColumn;
