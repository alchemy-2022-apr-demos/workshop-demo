// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderWorkshop } from '../render-utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="workshop"><h2>Underwater Basket Weaving</h2><ul><li>Buster Bluth: buster@bluthcompany.com</li></ul></div>`;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = renderWorkshop({
        name: 'Underwater Basket Weaving',
        participants: [{ name: 'Buster Bluth', contact_info: 'buster@bluthcompany.com' }],
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
