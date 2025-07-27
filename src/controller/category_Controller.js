import { getAllCategoryService, getCategoryByIdService, createCategoryService, updateCategoryService, deleteCategoryService } from "../services/category_Services.js";
import { validationResult } from "express-validator";


export const getAllCategoryController = async (req, res) => {
    try {
        const categories = await getAllCategoryService();
        res.status(200).json(categories);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getCategoryByIdController = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const category = await getCategoryByIdService(req.params.id);
        res.status(200).json(category);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const createCategoryController = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const category = await createCategoryService(req.body);
        res.status(201).json(category);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const updateCategoryController = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const category = await updateCategoryService(req.params.id, req.body);
        res.status(200).json(category);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deleteCategoryController = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const category = await deleteCategoryService(req.params.id);
        res.status(200).json(category);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}