import {createStore} from 'redux';
import { tokenReducer } from './Tokens/tokensReducer';

const store = createStore(tokenReducer);

export default store;