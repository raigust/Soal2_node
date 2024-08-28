
exports.celcius = (req, res) => {
    let celcius = parseFloat(req.params.celcius);

    let response = {
        celcius: celcius,
        result: {
            reamur: (4 * celcius / 5).toFixed(2),
            fahrenheit: ((9 * celcius / 5) + 32).toFixed(2),
            kelvin: (celcius + 273.15).toFixed(2)
        }
    };

    return res.json(response);
};

exports.reamur = (req, res) => {
    let reamur = parseFloat(req.params.reamur);

    let response = {
        reamur: reamur,
        result: {
            celcius: (5 * reamur / 4).toFixed(2),
            fahrenheit: (9 * reamur / 4 + 32).toFixed(2),
            kelvin: (5 * reamur / 4 + 273.15).toFixed(2)
        }
    };

    return res.json(response);
};

exports.kelvin = (req, res) => {
    let kelvin = parseFloat(req.params.kelvin);

    let response = {
        kelvin: kelvin,
        result: {
            celcius: (kelvin - 273.15).toFixed(2),
            fahrenheit: (9 * (kelvin - 273.15) / 5 + 32).toFixed(2),
            reamur: (4 * (kelvin - 273.15) / 5).toFixed(2),
        }
    };

    return res.json(response);
};

exports.fahrenheit = (req, res) => {
    let fahrenheit = parseFloat(req.params.fahrenheit);

    let response = {
        fahrenheit: fahrenheit,
        result: {
            celcius: (5 * (fahrenheit - 32) / 9).toFixed(2),
            reamur: (4 * (fahrenheit - 32) / 9).toFixed(2),
            kelvin: ((5 * (fahrenheit - 32) / 9) + 273.15).toFixed(2),
        }
    };

    return res.json(response);
};


