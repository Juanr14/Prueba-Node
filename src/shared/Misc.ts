import { logger } from './Logger';

export const paramMissingError = 'One or more of the required parameters was missing.';

export const pErr = (err: Error) => {
    if (err) {
        logger.error(err);
    }
};

export const getRandomInt = () => {
    return Math.floor(Math.random() * 1_000_000_000_000);
};

export const operateArray = (data: number[]) => {

    let suma = 0;
    let resta = 0;
    let division = 0;
    let multiplicacion = 0;

    const allNumbers = data.every ? data.every( (currNumber) => typeof(currNumber) === 'number') : false;

    if (!allNumbers) { return {error: ['invalid_data_format']}; }

    if (data.length && data.length !== 0) {
            suma = data.reduce((a, b) => a + b);
            resta = data.reduce((a, b) => a - b);
            division = data.reduce((a, b) => a / b);
            multiplicacion = data.reduce((a, b) => a * b);
    }

    const result = {
        suma,
        resta,
        division,
        multiplicacion,
        error: undefined,
    };

    return result;
};
