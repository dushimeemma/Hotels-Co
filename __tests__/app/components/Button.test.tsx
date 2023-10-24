import { render, fireEvent } from '@testing-library/react';
import Button from '../../../app/components/Button';

describe('Button Component', () => {
  it('renders the button with the provided children', () => {
    const { getByText } = render(<Button>Click Me</Button>);
    expect(getByText('Click Me')).toBeTruthy();
  });

  it('calls the handleClick function when the button is clicked', () => {
    const mockHandleClick = jest.fn();
    const { getByText } = render(
      <Button handleClick={mockHandleClick}>Click Me</Button>
    );
    const button = getByText('Click Me');
    fireEvent.click(button);
    expect(mockHandleClick).toHaveBeenCalled();
  });
});
