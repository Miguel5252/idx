import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import user from '@testing-library/user-event'
import Filter from './Filter'


describe('Filter Suite', ()=>{

  it('renders one input field and and filtered number', () => {
    const onChangeMock = vi.fn()
    render(<Filter inputText="abc" onChange={onChangeMock} filteredNumber={5}/>)

    const input = screen.getByRole('textbox')
    const filteredNumber = screen.getByText(5)
    
    expect(input).toBeDefined()
    expect(filteredNumber).toBeDefined()
  })

  // it('shows input text when typing', async () => {
  //   const onChangeMock = vi.fn()
  //   render(<Filter inputText="" onChange={onChangeMock} filteredNumber={5}/>)
  //   const input = screen.getByRole('textbox')
  //   await user.click(input)
  //   await user.keyboard('abc')
  //   screen.debug()
  //   expect(input.value).toBe('abc')
  // })
})