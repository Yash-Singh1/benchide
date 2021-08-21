import { SET_IDES } from '../actions';
import IDES from '../data/idesStorageKey';

export default function IDEs(
  state = JSON.parse(localStorage.getItem(IDES)) || [{ v: '', i: Math.random() + Date.now() }],
  action
) {
  let newIDEsValue;

  switch (action.type) {
    case SET_IDES:
      newIDEsValue = action.ides;
      break;

    default:
      newIDEsValue = state;
      break;
  }

  localStorage.setItem(IDES, JSON.stringify(newIDEsValue));
  return newIDEsValue;
}
