import { render } from '@testing-library/react';
import Badge from '../../../app/components/Badge';

describe('Badge Component', () => {
  it('renders the badge with the provided children', () => {
    const { getByText } = render(<Badge>Example Badge</Badge>);
    expect(getByText('Example Badge')).toBeTruthy();
  });

  it('applies the provided classes to the badge', () => {
    const { container } = render(
      <Badge classes='custom-class'>Example Badge</Badge>
    );
    const badge = container.querySelector('.badge');
    expect(badge).toBeTruthy();
  });
});
