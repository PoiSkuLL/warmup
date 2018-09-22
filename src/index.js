module.exports = function warmup(temperature) {
    var conversion;
    do {
        conversion = temperature * 1.8 + 32;
        return conversion;
    } while (temperature != null);
};
