import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import Todo from './Todo';

const mockData = [
    "test1",
    "test2",
    "test3"
]

describe("todo tests", () => {
  test('renders the heading', () => {
    render(<Todo todos={mockData}/>);
    const element = screen.getAllByText(/delete/i);
    expect(element.length).toBe(3);
  });

//   test('renders the heading', () => {
//     render(<Todo todos={mockData}/>);
//     const element = screen.getByTestId("test1");
//     expect(element).toBeInTheDocument();
//   });

  test('renders the heading', () => {
    render(<Todo todos={mockData}/>);
    const element = screen.getAllByTestId("todoItem");
    expect(element.length).toBe(3);
  });
  
})
