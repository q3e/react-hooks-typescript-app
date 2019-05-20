import React, { useState } from 'react';


const OtherCost: React.FC = () => {
	const [cost, setCost] = useState('');

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCost(e.target.value);
	}

	return (
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
									onChange={onChange}
									value={cost}
								/>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default OtherCost;
