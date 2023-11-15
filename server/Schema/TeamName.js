const mongoose = require("mongoose");

const TeamNameSchema = new mongoose.Schema({
    team_name: String,
});

const User = mongoose.model("TeamName", TeamNameSchema);

module.exports = TeamName;