// models/Category.js

const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
categorySchema.statics.getCategoryById = async function(categoryId) {
    return this.findById(categoryId);
  };
  

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
