import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Filter from '../Filter'

describe('Filter Suite', ()=>{

  it('renders one input field and a filtered number', () => {
    const onChangeMock = vi.fn()
    render(<Filter inputText="" onChange={onChangeMock} filteredNumber={5}/>)

    const input = screen.getByRole('textbox')
    const filteredNumber = screen.getByText(5)
    
    expect(input).toBeDefined()
    expect(filteredNumber).toBeDefined()
  })

})