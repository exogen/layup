/**
 * Grid and Cell adapters using glamor.
 * https://github.com/threepointone/glamor
 *
 * Components that make up the grid must support a `className` prop.
 */
import { css } from 'glamor'
import createLayout from './createLayout'

const grid = css({ display: 'grid ' })

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
    className = css({ gridArea: area })
  } else if (column) {
    className = css({ gridColumn: column })
  } else if (row) {
    className = css({ gridRow: row })
  }
  if (child.props.className) {
    className += ` ${child.props.className}`
  }
  return React.cloneElement(child, { className })
}

export default createLayout(Grid, Cell)
