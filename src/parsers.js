const parse = (filename, format) => {
    switch (format) {
        case '.json':
            return JSON.parse(filename);
        case '.yaml':
            return load(filename);
        case '.yml':
            return load(filename);
        default:
            throw new Error('Incorrect file format');
    }
};
