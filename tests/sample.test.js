require('chai').should();
const withDriver = require('../helpers/utils');

const elements = {
    leftTextField: 'leftEditText',
    rightTextField: 'rightEditText',
    addButton: 'addButton',
    resultLabel: 'resultLabel',
};

const sum = async (number1, number2, driver) => {
    const leftTextField = await driver.waitForElementById(elements.leftTextField);
    const rightTextField = await driver.waitForElementById(elements.rightTextField);
    await leftTextField.type(number1);
    await rightTextField.type(number2);

    const sumButton = await driver.waitForElementById(elements.addButton);
    await sumButton.click();

    const resultLabel = await driver.waitForElementById(elements.resultLabel);
    return resultLabel.text();
};

describe('Sample calculator tests', withDriver((driver) => {
    it('Should add two positive integers', async () => {
        const result = await sum(1, 2, driver);
        result.should.be.equal('3');
    });
    it('Should add two positive fractions', async () => {
        const result = await sum(1.5, 2.6, driver);
        result.should.be.equal('4.1');
    });
    it('Should add a positive and a negative integer', async () => {
        const result = await sum(-1, 1, driver);
        result.should.be.equal('0');
    });
}));