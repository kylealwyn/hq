import Actions from '../actions';

export function companies(state = [], {type, data, error}) {
  switch(type) {
    case Actions.Companies.Load:
      return data;
    default:
      return state
  }
}
