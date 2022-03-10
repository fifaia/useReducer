export const initialState = {
  number: 0,
  text: ""
};

export const reducer = (state, number) => {
  const isEven = number % 2 === 0;
  state = { ...state, text: isEven ? "ლუწია" : "კენტია", number };

  return state;
};
