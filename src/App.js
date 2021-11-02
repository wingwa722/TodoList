import { Provider } from 'react-redux';
import {createStore} from 'redux';
import './App.css';
import TodoList from './components/TodoList';
import todoReducer from './reducers/todoReducer';

function App() {
  const store = createStore(todoReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  return (
    <div className="App">
      <Provider store={store}>
      <TodoList></TodoList>
      </Provider>
    </div>
  );
}

export default App;
