import { render, fireEvent } from '@testing-library/react';
import ActionButton from '../../../app/components/ActionButton';

describe('ActionButton Component', () => {
  it('renders the button with the provided children', () => {
    const { getByText } = render(
      <ActionButton handleAction={() => {}}>Click Me</ActionButton>
    );
    expect(getByText('Click Me')).toBeTruthy();
  });

  it('calls the handleAction function when the button is clicked', () => {
    const mockHandleAction = jest.fn();
    const { getByText } = render(
      <ActionButton handleAction={mockHandleAction}>Click Me</ActionButton>
    );
    const button = getByText('Click Me');
    fireEvent.click(button);
    expect(mockHandleAction).toHaveBeenCalled();
  });
});
