import React from 'react'
import PropTypes from 'prop-types'
/**
 * A function that will return a Layout component given Grid and Cell components
 * that have been adapted to work with any styling library.
 *
 * @param {Function} Grid Container component to pass `children` to. The
 * component should apply `display: grid` to itself somehow.
 * @param {Function} Cell Component to pass each child to (via a `child` prop).
 * The component should use the `area`, `column`, or `row` prop to set the
 * `grid-area`, `grid-column`, or `grid-row` CSS property.
 */
export default function createLayout(Grid, Cell) {
  function Layout({ areas, columns, rows, children, ...props }) {
    children = mapPropsToChildren(Cell, { areas, columns, rows, children })
    return React.createElement(Grid, props, children)
  }
  Layout.propTypes = {
    areas: PropTypes.oneOfType([
      PropTypes.objectOf(PropTypes.element),
      PropTypes.arrayOf(PropTypes.string)
    ]),
    columns: PropTypes.oneOfType([
      PropTypes.objectOf(PropTypes.element),
      PropTypes.arrayOf(PropTypes.string)
    ]),
    rows: PropTypes.oneOfType([
      PropTypes.objectOf(PropTypes.element),
      PropTypes.arrayOf(PropTypes.string)
    ])
  }
  return Layout
}

function mapPropsToChildren(Cell, { areas, columns, rows, children }) {
  let names
  let nameToProps
  // Determine which prop (out of `area`, `column`, or `row`) to pass to `Cell`
  // depending on which of `areas`, `columns`, or `rows` was passed to `Layout`.
  if (areas) {
    names = areas
    nameToProps = name => ({ area: name })
  } else if (columns) {
    names = columns
    nameToProps = name => ({ column: name })
  } else if (rows) {
    names = rows
    nameToProps = name => ({ row: name })
  } else {
    // None of the above supplied? Don't wrap `children` in Cells.
    return children
  }
  const renderCell = (child, name) => {
    // Only wrap React elements, because Cell calls `React.cloneElement`.
    return React.isValidElement(child) ? (
      <Cell key={name} child={child} {...nameToProps(name)} />
    ) : (
      child
    )
  }
  return Array.isArray(names)
    ? React.Children.map(children, (child, i) => renderCell(child, names[i]))
    : Object.keys(names).map(name => renderCell(names[name], name))
}
