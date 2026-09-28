const express = require('express');
const Student = require('../models/Student');
const router = express.Router();

// Có sẵn: lấy danh sách và _id thật để thực hành.
router.get('/', async (req, res, next) => {
    try {
        const students = await Student.find().sort({ studentCode: 1 });
        res.status(200).json({ success: true, data: students });
    } catch (error) {
        next(error);
    }
});

// PATCH /:id - Cập nhật điểm số
router.patch('/:id', async (req, res, next) => {
    try {
        // TODO: Viết logic xử lý cập nhật điểm số (score) theo đặc tả nghiệp vụ.
        // Hướng dẫn: Sinh viên tự thiết kế việc bắt lỗi và gọi Mongoose phù hợp.
        
        res.status(501).json({
            success: false,
            message: 'Tính năng chưa được cài đặt (TODO)'
        });
    } catch (error) {
        next(error);
    }
});

// DELETE /:id - Xóa sinh viên
router.delete('/:id', async (req, res, next) => {
    try {
        // TODO: Viết logic xử lý xóa sinh viên theo _id.
        // Hướng dẫn: Sinh viên tự thiết kế việc xử lý theo yêu cầu nghiệp vụ.

        res.status(501).json({
            success: false,
            message: 'Tính năng chưa được cài đặt (TODO)'
        });
    } catch (error) {
        next(error);
    }
});

module.exports = router;
