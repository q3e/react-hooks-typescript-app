import React from 'react';

type PropsType = {
	totalCost?: string;
}

const TotalCost: React.FC<PropsType> = (props) => {
	return (
		<div>
			{props.totalCost}
		</div>
	);
}

export default TotalCost;