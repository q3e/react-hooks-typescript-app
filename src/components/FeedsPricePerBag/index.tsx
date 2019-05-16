import React, { useState } from 'react';

const FeedPricePerBag: React.FC = () => {
	const [feed, setFeed] = useState({
		bags: '',
		price: '',
	})

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setFeed({
		...feed,
		[e.target.name]: e.target.value,
	});

	return (
		<div className="columns is-mobile">
			<div className="column is-half">
				<div className="field is-horizontal">
					<div className="field-label is-normal">
						<label className="label">Bags</label>
					</div>
					<div className="field-body">
						<div className="field">
							<p className="control">
								<input
									className="input is-rounded"
									type="number"
									name="bags"
									placeholder="Number of bags consumed per chick e.g 0.112bag"
									value={feed.bags}
									onChange={onChange}
								/>
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="column is-half">
				<div className="field is-horizontal">
					<div className="field-label is-normal">
						<label className="label">Price</label>
					</div>
					<div className="field-body">
						<div className="field">
							<p className="control">
								<input
									className="input is-rounded"
									type="number"
									name="price"
									placeholder="Other costs e.g rent, salary"
									value={feed.price}
									onChange={onChange}
								/>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeedPricePerBag;
