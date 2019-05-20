type chicksCostValue = {
	count: string;
	price: string;
};

type chicksCostAction = {
	value: chicksCostValue;
	type: string;
};

export const chicksCostReducer = (state: any, action: chicksCostAction) =>  {
  switch (action.type) {
    case 'TEXT_INPUT_CHICKS':
      return {
				count: action.value.count,
				price: action.value.price,
			};
    default:
      throw new Error();
  }
}

export const feedsCostReducer = (state: any, action: any) =>  {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

export const totalCostReducer = (state: any, action: any) =>  {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}