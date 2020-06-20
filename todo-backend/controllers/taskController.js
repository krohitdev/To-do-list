const Task = require("../models/taskModel");


exports.save = (async (req, res) => {
  try {
    const result = await Task(req.body).save(); // save result

    if (result) {
        return res.status(201).json({
          message:"Task Saved",
          status: "Success",
        });
      }
      return res.status(201).json({
        message:"Task Saved",
        status: "Success",
      });
    }
   catch (err) {
    return res.status(200).json({
      message: err.message,
      status: "Failure",
    });
  }
});



exports.update = (async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Task.findByIdAndUpdate(id, req.body, { new: true });

    if (result) {
      return res.status(200).json({
        message: "Task Updated",
        status: "Success",
        data: result,
      });
    }
  } catch (error) {
    return res.status(409).json({
      message: error.message,
      status: "Failure",
    });
  }
});

exports.getAll = (async (req, res) => {
  try {
    const { query } = req;
    const result = await Task.find(query);
    if (result) {
      return res.status(200).json({
        message: "Data Found",
        status: "Success",
        data: result,
      });
    }
  } catch (err) {
    return res.status(404).json({
      message: "No Data Found",
      status: "Failure",
    });
  }
});

