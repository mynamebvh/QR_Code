const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memberSchema = new Schema({
  fullname: {
    type: String,
    minLength: 6,
  },
  email: {
    type: String,
    unique: true,
    validate: {
      validator: function (v) {
        const re =
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(v);
      },
    },
  },
  phone: {
    type: String,
    validate: {
      validator: function (v) {
        const re = /^(84|0[3|5|7|8|9])+([0-9]{8})$/;
        return re.test(v);
      },
    },
  },
  classname: {
    type: String,
  },
  studentcode: {
    type: String,
    validate: {
      validator: function (v) {
        const re = /^[0-9]{10}$/;
        return re.test(v);
      },
    },
  },
});

module.exports = mongoose.model("Member", memberSchema);
