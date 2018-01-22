module.exports = function (mongoose) {
    return [{
        isbn: { type: String, required: true },
        name: { type: String }
    }, {
        timestamps: true,
        createdby: true,
        updatedby: true
    }]
};