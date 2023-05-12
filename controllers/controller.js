const User = require('../models/user.model');
 
module.exports.create = (req, res) => {
    User.create(req.body)
        .then( user => {
            res.json({ user })
        })
        .catch((err) => {
            res.json({ message: 'Error', error: err })
        });}
 
module.exports.getAll = (req, res) => {
    User.find()
        .then( users => {
            res.json({ users })
        })
        .catch((err) => {
            res.json({ message: 'Error', error: err })
        });
}
 
module.exports.getOne = (req, res) => {
    User.findOne({ _id: req.params.id })
        .then( user => {
            res.json({ user })
        })
        .catch((err) => {
            res.json({ message: 'Error', error: err })
        });}
 
module.exports.update = (req, res) => {
    User.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then( user => {
            res.json({ user })
        })
        .catch((err) => {
            res.json({ message: 'Unable to Update', error: err })
        });}
 
module.exports.delete = (req, res) => {
    User.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Unable to delete', error: err })
        });}
