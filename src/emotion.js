/**
 * Grid and Cell adapters using Emotion.
 * https://emotion.sh/
 *
 * Components that make up the grid must support a `className` prop.
 *
 * (In theory this file could be exactly the same as the one for glamor, but I
 * used tagged template literals instead of objects.)
 */
import { css } from 'emotion'
import createLayout from './createLayout'

const grid = css`
  display: grid;
`

function Grid({ className, children, ...props }) {
  className = className ? `${grid} ${className}` : grid
  return (
    <div {...props} className={className}>
      {children}
    </div>
  )
}

function Cell({ area, column, row, child }) {
  let className
  if (area) {
    className = css`
      grid-area: ${area};
    `
  } else if (column) {
    className = css`
      grid-column: ${column};
    `
  } else if (row) {
    className = css`
      grid-row: ${row};
    `
  }
  if (child.props.className) {
    className += ` ${child.props.className}`
  }
  return React.cloneElement(child, { className })
}

export default createLayout(Grid, Cell)
