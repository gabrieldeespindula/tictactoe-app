import { render, screen } from "@testing-library/react"
import { App } from "./App"

describe('<App>', ()=> {
  it('renders without crashing', () => {
    const { container } = render(
      <App />
    )

    expect(container.querySelector('#board')).toBeInTheDocument()
  })
})
