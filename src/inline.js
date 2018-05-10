/**
 * Grid and Cell adapters using inline styles.
 *
 * Components that make up the grid must support a `style` prop.
 */
import React from 'react'
import createLayout from './createLayout'

export function Grid({ style, children, ...props }) {
  style = { display: 'grid', ...style }
  return (
    <div {...props} style={style}>
      {children}
    </div>
  )
}

export function Cell({ area, column, row, child }) {
  const style = { ...child.props.style }
  if (area) {
    style.gridArea = area
  } else if (column) {
    style.gridColumn = column
  } else if (row) {
    style.gridRow = row
  }
  return React.cloneElement(child, { style })
}

export default createLayout(Grid, Cell)
