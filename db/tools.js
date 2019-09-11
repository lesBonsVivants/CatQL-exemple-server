const uuidv4 = require('uuid/v4');

function getUuid() {
    return uuidv4();
}

module.exports = {
    getUuid
};

