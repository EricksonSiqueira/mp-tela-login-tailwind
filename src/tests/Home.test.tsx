import { render, screen } from '@testing-library/react';

import Home from '../app/page';
import '@testing-library/jest-dom';

describe(`Home`, () => {
  it(`renders a heading`, () => {
    render(<Home />);

    const heading = screen.getByRole(`heading`, {
      level: 1,
      name: `Tela de login mais bonitona`,
    });

    expect(heading).toBeInTheDocument();
  });
});
