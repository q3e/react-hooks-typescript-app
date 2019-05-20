import React, { useReducer } from 'react';
import { chicksCostReducer } from '../../reducers';

type ChicksObject = {
  count: string;
  price:  string;
}

const ChicksPriceColumn: React.FC = () => {
  const [state, dispatch] = useReducer(chicksCostReducer, {
		count: '',
		price: '',
	});

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => dispatch({
		type: 'TEXT_INPUT_CHICKS',
		value: {
			...state,
			[e.target.name]: e.target.value,
		},
	})

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
                  value={state.count}
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
                  value={state.price}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
			<div className="column">
				{
					new Intl.NumberFormat('en-US', { style: 'currency', currency: 'KES' })
						.format(Number(state.count) * Number(state.price))
				}
			</div>
    </div>
  );
};

export default ChicksPriceColumn;
