import './App.css';
import {useReducer} from 'react';

function App() {

  const reducer = (state, action) => {
    switch(action.type){
      case 'INCREMENT':
        return {count: state.count+1, showText: state.showText}
      case 'toggleShowText':
        return {count: state.count, showText: !state.showText}
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, {count: 0, showText: true})


  return (
    <div className="App">
      <div>Count: {state.count}</div>
      {state.showText &&  <div>I am visible now</div>}
      <button onClick= {() => dispatch({type: 'INCREMENT'})}>Count</button>
      <button onClick= {() => dispatch({type: 'toggleShowText'})}>Toggle Text</button>
    </div>
  );
}

export default App;
