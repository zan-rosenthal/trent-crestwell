import {
  assocPath,
  merge
} from 'ramda'
import { SET_STATE, REPLACE_STATE} from './constants'

const reducer = (state, { type, paylod }) => {
  const { statePath, value } = payload

  if (type === SET_STATE) return merge(state, assocPath(statePath, value, {}))

  if(type === REPLACE_STATE) return assocPath(statePath, value, state)
}
