import React from 'react'
import ReactDOM from 'react-dom'
import styled, { injectGlobal } from 'styled-components'
import Layout from '../src/styled'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Lato:400,700');

  html {
    font-size: 16px;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  body {
    margin: 12px;
    padding: 0;
    border: 6px solid rgb(218, 97, 85);
    font-family: Lato, Helvetica, sans-serif;
    font-size: 1rem;
    line-height: 1.5;
    color: rgb(62, 61, 56);
    background: rgb(228, 215, 192);

    @media (max-width: 768px) {
      max-width: 100vw;
      margin: 0;
    }
  }

  a:link,
  a:hover,
  a:active,
  a:visited {
    color: rgb(4, 121, 125);
    text-decoration: none;
    border-bottom: 1px solid rgba(0, 116, 120, 0.7);
  }

  code,
  pre {
    font-family: Menlo, Inconsolata, Monaco, Consolas, 'Source Code Pro', 'DejaVu Sans Mono', monospace;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  ol,
  li {
    margin: 0;
    padding: 0;
  }
`

const DocsContainer = styled(Layout)`
  max-width: 75rem;
  margin: 0 auto;
  padding: 2rem 1rem;
  grid-template-rows:
    [title] auto
    1rem
    [subtitle] auto
    2rem
    [features] auto
    3rem
    [demo] auto;

  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`

const Title = styled.h1`
  text-align: center;
  color: rgb(29, 29, 29);

  &:before {
    content: '🏀';
    margin-right: 0.6rem;
    vertical-align: -0.1rem;
  }

  a:link,
  a:hover,
  a:active,
  a:visited {
    color: inherit;
    border: inherit;
  }
`

const Subtitle = styled.h2`
  font-weight: normal;
  text-align: center;
`

const FeatureList = styled.ul`
  display: grid;
  grid-auto-flow: row;
  grid-gap: 0.5rem;
  list-style: none;
  max-width: 50rem;
  margin: 0 auto;
  padding: 1.5rem 2rem;
  border-radius: 10px;
  font-size: ${18 / 16}rem;
  background: rgba(255, 255, 255, 0.9);

  @media (max-width: 768px) {
    border-radius: 0;
  }
`

const Feature = styled.li`
  position: relative;
  padding-left: 2rem;

  &:before {
    display: inline-block;
    position: absolute;
    left: 0;
    min-width: 1.25em;
    text-align: center;
    content: '${props => props.icon || '✔︎'}';
    color: rgb(14, 135, 84);
  }
`

const StyledComponents = styled.a.attrs({
  href: 'https://www.styled-components.com/',
  children: 'styled-components'
})``

const Glamor = styled.a.attrs({
  href: 'https://github.com/threepointone/glamor',
  children: 'glamor'
})``

const Emotion = styled.a.attrs({
  href: 'https://emotion.sh/',
  children: 'Emotion'
})``

const DemoLayout = styled(Layout)`
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 2rem;

  @media (min-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const Food = styled.div`
  padding: 10px;
  font-size: 32px;
  text-align: center;
`

const Pizza = styled(Food).attrs({
  children: '🍕'
})`
  background: #ffd1a8;
`

const Tacos = styled(Food).attrs({
  children: '🌮'
})`
  background: #ffe2a8;
`

const Ramen = styled(Food).attrs({
  children: '🍜'
})`
  background: #ffefd1;
`

const areasCode = `const FoodLayout = styled(Layout)\`
  grid-template-areas:
    'pizza .     .    '
    '.     tacos .    '
    '.     .     ramen';
  background: white;
\`

render(
  <FoodLayout areas={{
    pizza: <Pizza />,
    tacos: <Tacos />,
    ramen: <Ramen />
  }} />
)
`

const rowsCode = `const FoodLayout = styled(Layout)\`
  grid-template-rows:
    0.5rem
    [pizza] auto
    1rem
    [tacos] auto
    2.5rem
    [ramen] auto
    4rem;
  background: white;
\`

render(
  <FoodLayout rows={{
    pizza: <Pizza />,
    tacos: <Tacos />,
    ramen: <Ramen />
  }} />
)
`

const scope = {
  Layout,
  Pizza,
  Tacos,
  Ramen,
  styled
}

class App extends React.Component {
  render() {
    return (
      <DocsContainer rows={['title', 'subtitle', 'features', 'demo']}>
        <Title>
          <a href="https://github.com/exogen/layup">layup</a>
        </Title>
        <Subtitle>CSS Grid Layout made easy</Subtitle>
        <FeatureList>
          <Feature>Adaptable to any React styling solution</Feature>
          <Feature>
            Built-in adapters for <StyledComponents />, <Emotion />, <Glamor />,
            and inline styles
          </Feature>
          <Feature>
            Uses{' '}
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines">
              named lines and areas
            </a>{' '}
            from CSS Grid Layout
          </Feature>
          <Feature>
            Say goodbye to{' '}
            <a href="https://github.com/exogen/layup#whats-wrong-with-margin">
              arbitrary margin overrides
            </a>
          </Feature>
          <Feature icon="👉">
            See the <a href="https://github.com/exogen/layup">README</a> for
            documentation.
          </Feature>
          <Feature icon="👇">
            The demos below are editable, try them out!
          </Feature>
        </FeatureList>
        <DemoLayout>
          <LiveProvider code={areasCode} scope={scope} noInline>
            <LiveEditor />
            <LiveError />
            <LivePreview />
          </LiveProvider>
          <LiveProvider code={rowsCode} scope={scope} noInline>
            <LiveEditor />
            <LiveError />
            <LivePreview />
          </LiveProvider>
        </DemoLayout>
      </DocsContainer>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
