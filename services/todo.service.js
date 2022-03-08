const {
  models: { todo },
} = require("../config/sequelize.config");

exports._findAll = async (params) => {
  try {
    let search = params || {};
    let data = await todo.findAll(search);

    if (!data) throw new Error("No Data");

    return { status: 1, data };
  } catch (error) {
    return { status: 0, data: error };
  }
};

exports._find = async (params) => {
  try {
    if (!params) throw new Error("No Condition Provided");

    let data = await todo.findOne(params);

    if (!data) throw new Error("No Data");

    return { status: 1, data };
  } catch (error) {
    return { status: 0, data: error };
  }
};

exports._create = async (params) => {
  try {
    if (!params) throw new Error("No Data Provided");

    let data = await todo.create(params);

    return { status: 1, data };
  } catch (error) {
    return { status: 0, data: error };
  }
};

exports._update = async (params) => {
  try {
    if (!params) throw new Error("No Data Provided");

    let data = await todo.update(params);

    return { status: 1, data };
  } catch (error) {
    return { status: 0, data: error };
  }
};

exports._delete = async (params) => {
  try {
    if (!params) throw new Error("No Data Provided");

    await todo.destroy(params);

    return { status: 1, data: "Data Deleted" };
  } catch (error) {
    return { status: 1, data: error };
  }
};
