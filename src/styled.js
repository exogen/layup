/**
 * Grid and Cell adapters using styled-components.
 * https://www.styled-components.com/
 *
 * Components that make up the grid must support a `className` prop.
 */
import React from 'react'
import styled from 'styled-components'
import createLayout from './createLayout'

export const Grid = styled.div`
  display: grid;
`

export const Cell = styled(({ className, child }) => {
  if (child.props.className) {
    className += ` ${child.props.className}`
  }
  return React.cloneElement(child, { className })
})`
  ${props => (props.area ? `grid-area: ${props.area};` : '')}
  ${props => (props.column ? `grid-column: ${props.column};` : '')}
  ${props => (props.row ? `grid-row: ${props.row};` : '')}
`

export default createLayout(Grid, Cell)
