import { render, screen } from "@testing-library/react"
import { Position } from "."
import { Square } from "../../entities/square"
import { Team } from "../../entities/team"

describe('<Position>', ()=> {
  const onClick = jest.fn()
  const defaultSquare = {id: 1}

  function mount(square?: Square){
    return render(
      <Position square={square || defaultSquare} onClick={onClick} />
    )
  }

  it('renders a square', () => {
    const { container } = mount()

    expect(container.querySelector('.square')).toBeInTheDocument()
  })

  it('renders a square with a "square-ID" class depending on id prop', () => {
    const { container } = mount({id: 2})

    expect(container.querySelector('.square-2')).toBeInTheDocument()
  })

  describe('when recieves a square team prop', () => {
    it('renders a square with a team class', () => {
      const { container } = mount({...defaultSquare, team: Team.O})

      expect(container.querySelector(`.img-${Team.O}`)).toBeInTheDocument()
    })

    it('does not render a square with a cursor-pointer class', () => {
      const { container } = mount({...defaultSquare, team: Team.O})

      expect(container.querySelector(`.cursor-pointer`)).not.toBeInTheDocument()
    })
  })

  describe('when does not recieve a square team prop', () => {
    it('renders a square with a cursor-pointer class', () => {
      const { container } = mount()

      expect(container.querySelector(`.cursor-pointer`)).toBeInTheDocument()
    })

    it('does not render a square with a team class', () => {
      const { container } = mount()

      expect(container.querySelector(`.img-${Team.O}`)).not.toBeInTheDocument()
    })
  })

  describe('when clicked', () => {
    it('calls onClick prop with the square', () => {
      const { container } = mount()

      const square = container.querySelector('.square') as HTMLElement
      square.click()

      expect(onClick).toHaveBeenCalledWith(defaultSquare)
    })
  })
})
