// Import react
import React from 'react';
// Incorporate the React Testing Library
import { render, cleanup } from '@testing-library/react';
// Import the jest-dom Package
import '@testing-library/jest-dom/extend-expect';
// Import the About Component, which is the component we will be testing
import About from '..';

// Configure the Testing Environment by calling the afterEach global function from jest
afterEach(cleanup); // ensures there are no leftover memeory after each test that could result in false results

// use describe function to declare the component we are testing
// then we would create some tests in the describe function body
describe('About component', () => {
    // first test to verify that the component is rendering
    it('renders', () => {
        render(<About />);
    });

    it('matches snapshot DOM node structure', () => {
        // render About
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    }); 
})