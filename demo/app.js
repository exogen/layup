import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import Layout from '../src/styled'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'

const FoodLayout = styled(Layout)`
  grid-template-areas:
    'pizza .     .    '
    '.     tacos .    '
    '.     .     ramen';
`

const Pizza = styled.div.attrs({
  children: '🍕'
})`
  padding: 10px;
  font-size: 32px;
  text-align: center;
  background: #ffd1a8;
`

const Tacos = styled.div.attrs({
  children: '🌮'
})`
  padding: 10px;
  font-size: 32px;
  text-align: center;
  background: #ffe2a8;
`

const Ramen = styled.div.attrs({
  children: '🍜'
})`
  padding: 10px;
  font-size: 32px;
  text-align: center;
  background: #ffefd1;
`

class App extends React.Component {
  render() {
    return (
      <FoodLayout
        areas={{
          pizza: <Pizza />,
          tacos: <Tacos />,
          ramen: <Ramen />
        }}
      />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
