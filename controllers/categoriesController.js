const Product = require('../models/product');
const Category = require('../models/Category');


module.exports = class categoriesController{
    static createCategory = async (req, res) => {
        const categoryData = req.body;
    
        try {
            const newCategory = await new Category({
                name: categoryData.name,
                image: categoryData.image
            }).save();
            
            return res.status(201).json({
                code: 201,
                message: "Category created successfully",
                data: newCategory,
            });
        } catch (error) {
            console.error('Error creating category:', error);
            return res.status(500).json({ error: 'Internal server error' });
        }
    }

static deleteCategory= async (req, res)=> {
    const categoryId = req.params.id;

    try {
        const deletedCategory = await Category.findByIdAndDelete(categoryId);
        if (!deletedCategory) {
            return res.status(404).json({ error: 'Category not found' });
        }
        res.status(200).json({ message: 'Category deleted successfully' });
    } catch (error) {
        console.error('Error deleting category:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

static updateCategory = async (req, res)=> {
    const categoryId = req.params.id;
    const updateData = req.body;

    try {
        const updatedCategory = await Category.findByIdAndUpdate(categoryId, updateData, { new: true });
        if (!updatedCategory) {
            return res.status(404).json({ error: 'Category not found' });
        }
        res.status(200).json(updatedCategory);
    } catch (error) {
        console.error('Error updating category:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
static getCategoryById= async (req, res)=> {
    const categoryId = req.params.categoryId;
    console.log(categoryId);

    try {
        const category = await Category.findById(categoryId);
        if (!category) {
            return res.status(404).json({ error: 'Category not found' });
        }
        res.status(200).json(category);
    } catch (error) {
        console.error('Error fetching category by ID:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

static getAllCategories= async(req, res)=> {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        console.error('Error fetching all categories:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

static getProductsByCategory= async(req, res)=> {
    const categoryId = req.params.id;

    try {
        const products = await Product.find({ 'category.id': categoryId });
        res.status(200).json(products);
    } catch (error) {
        console.error('Error fetching products by category:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

};