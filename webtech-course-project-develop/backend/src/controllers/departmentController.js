const Department = require('../models/departmentSchema.js');
require('dotenv').config();

exports.getDepartments = async (req, res) => {
   Department.find()
   .populate('department')
   .exec((error, listDepartments) => {
       if (error) {
           return res.status(500).json({ result: false, message: 'Cannot get department list', error });
       }
       return res.status(200).json({ result: true, departments: listDepartments });
   });
 };

 exports.createDepartment = async (req, res) => {
   const department = new Department({
      categories: req.body.categories,
      iconPath: req.body.iconPath
    });
    department.save().then(
     (createdDepartment) => {
         return res.json({ result: true, department: createdDepartment });
     }
   ).catch(
     (error) => {
         return res.status(400).json({ result: false, message: 'Cannot create this department', error });
     }
  );
};