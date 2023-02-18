import { render, screen } from "@testing-library/react"
import { Board } from "."

describe('<Board>', ()=> {
  function mount(){
    return render(
      <Board />
    )
  }

  it('renders nine initial positions', () => {
    const { container } = mount()

    expect(container.querySelectorAll('.square')).toHaveLength(9)
  })
})
