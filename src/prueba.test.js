import React from 'react';
import {screen, render} from '@testing-library/react';

import App from './App';

test("Renders Priority Label", () => {
    render(<App/>);
    const linkElement = screen.getByText("CRUD Empleado");
    expect(linkElement);
});