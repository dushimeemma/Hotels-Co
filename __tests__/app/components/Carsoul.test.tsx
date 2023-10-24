import { render, fireEvent } from '@testing-library/react';
import Carsoul from '../../../app/components/Carsoul';

describe('Carsoul Component', () => {
  const imagesArr = ['/image1.jpg', '/image2.jpg', '/image3.jpg'];
  it('displays the first image initially', () => {
    const { container } = render(<Carsoul imagesArr={imagesArr} />);
    const images = container.querySelectorAll('img');
    expect(images).toHaveLength(1);
  });

  it('displays the next image when the next button is clicked', () => {
    const { getByText, container } = render(<Carsoul imagesArr={imagesArr} />);
    const nextButton = getByText('❯');
    fireEvent.click(nextButton);
    const images = container.querySelectorAll('img');
    expect(images).toHaveLength(1);
  });

  it('displays the previous image when the previous button is clicked', () => {
    const { getByText, container } = render(<Carsoul imagesArr={imagesArr} />);
    const prevButton = getByText('❮');
    fireEvent.click(prevButton);
    const images = container.querySelectorAll('img');
    expect(images).toHaveLength(1);
  });

  it('displays the first image when the previous button is clicked on the first image', () => {
    const { getByText, container } = render(<Carsoul imagesArr={imagesArr} />);
    const prevButton = getByText('❮');
    fireEvent.click(prevButton);
    fireEvent.click(prevButton);
    const images = container.querySelectorAll('img');
    expect(images).toHaveLength(1);
  });

  it('displays the last image when the next button is clicked on the last image', () => {
    const { getByText, container } = render(<Carsoul imagesArr={imagesArr} />);
    const nextButton = getByText('❯');
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    const images = container.querySelectorAll('img');
    expect(images).toHaveLength(1);
  });
});
