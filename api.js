var converter = require('./converter');

function convert(req, res, next) {
    if(!req.body.input || req.body.input == '')
        return next(new Error('text field cannot be empty'));
    input = req.body.input;
    num2eng = (req.body.num2eng == 'true')
    output = converter.convert(input, num2eng);
    res.json({
        input: input,
        num2eng: num2eng,
        output: output
    })
}

var api = {
    convert: convert
};

module.exports = api;