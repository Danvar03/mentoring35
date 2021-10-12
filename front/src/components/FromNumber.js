import { number } from 'prop-types';
import React, { useState } from 'react'
import { connect } from 'react-redux';
import { fetchRandomNumber } from '../actions';

const NumbersForm = (props) => {// component stateless
  const [state, setState] = useState();
  const onSubmit = (e) => {
    e.preventDefault();
    props.dispatch(fetchRandomNumber(state));
  };

  return <div>
    <form onSubmit={onSubmit}>
      <label htmlFor="number1">Ingrese el número mínimo:</label>
      <br />
      <input id="number1" type="number" min="0" max="100"
        onChange={(e) => setState({...state,number1: e.target.value})}>
      </input>
      <br/>
      <label htmlFor="number2">Ingrese el número máximo:</label>
      <br/>
      <input id="number2" type="number" min="0" max="100"
        onChange={(e) => setState({...state,number2: e.target.value})}>
      </input>
      <br />
      <button type="submit" disabled={props.loading}>
        Enviar
      </button>
    </form>
  </div>
}

const stateMapToPros = state => {
  return {
    loading: state.view.loading
  }
}

export default connect(stateMapToPros)(NumbersForm)


