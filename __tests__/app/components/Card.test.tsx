import { render, fireEvent } from '@testing-library/react';
import Card from '../../../app/components/Card';

const mockItem = {
  id: '1',
  name: 'Sample Room',
  avatars: ['/image1.jpg', '/image2.jpg'],
  ratings: 4.5,
  location: 'Sample Location',
  availability: 'Available',
  price: 100,
};

describe('Card Component', () => {
  it('renders the card with the provided data', () => {
    const { getByText } = render(<Card item={mockItem} />);
    expect(getByText('Sample Room')).toBeTruthy();
    expect(getByText('⭐️ 4.5')).toBeTruthy();
    expect(getByText('Sample Location')).toBeTruthy();
    expect(getByText('Available')).toBeTruthy();
    expect(getByText('$ 100')).toBeTruthy();
  });

  it('calls the handleClick function when the card is clicked', () => {
    const mockHandleClick = jest.fn();
    const { container } = render(
      <Card
        item={mockItem}
        handleClick={mockHandleClick}
      />
    );
    const card = container.querySelector('.card');
    fireEvent.click(card as Element);
    expect(mockHandleClick).toHaveBeenCalled();
  });
});
