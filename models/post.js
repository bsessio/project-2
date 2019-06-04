// Export all of Post
module.exports = function (sequelize, DataTypes) {
    // Define all elements of the Posts table.
    const Shuffle = sequelize.define("Shuffle", {
        entry: {
            type: DataTypes.JSON,
            allowNull: false,
        }
    })
    return Shuffle;
};