const mongoose = require("mongoose");

const ProjectsSchema = new mongoose.Schema({
    proj_name: String,
    proj_desc: String,
    prod_owner_id: Schema.Types.ObjectId,
    mgr_id: Schema.Types.ObjectId,
    team_id: Schema.Types.ObjectId
});

const User = mongoose.model("ProjectsSchema", ProjectsSchema);

module.exports = Projects;