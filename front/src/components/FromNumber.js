import { number } from 'prop-types';
import React, { useState } from 'react'
import { connect } from 'react-redux';
import { fetchRandom } from '../actions';

const From = (props) => {
  const [state, setState] = useState();
  const onSubmit = (e) => {
    e.preventDefault();
    props.dispatch(fetchRandom(state));
  };
  return <div>
    <form onSubmit={onSubmit}>
      <label htmlFor="list">Ingrese primer numero:</label>
      <br />
      <input id="NumberOne" style={{ width: "300px", height: "120px" }} 
        onChange={(e) => setState({...state,number1: e.target.value})}
      ></input>
        <label htmlFor="list">Ingrese segundo numero:</label>
      <input id="NumberTwo" style={{ width: "300px", height: "120px" }} 
        onChange={(e) => setState({...state,number2: e.target.value})}
      ></input>
      <br />
      <button type="submit" disabled={props.loading}>
        Enviar
      </button>
    </form>
  </div>
}


const stateMapToPors = state => {
  return {
    loading: state.view.loading
  }
}


export default connect(stateMapToPors)(From)
