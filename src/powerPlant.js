const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}
const stateControl = storeState();

const changeState = (prop) => {
  return (value) => {
    return(state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    })
  }
}

const blueFood = changeState("soil")(5);
const greenFood = changeState("soil")(10);
const redFood = changeState("soil")(15);

const fedPlant = stateControl(blueFood);
const fedPlantX2 = stateControl(greenFood);
const fedPlantX3 = stateControl(redFood);

console.log(fedPlant, fedPlantX2, fedPlantX3, stateControl());
