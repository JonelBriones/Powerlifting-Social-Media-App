const UserController = require('../controllers/user.controller')
const {authenticateUser} = require('../config/jwt.config')

module.exports = (app) => {
    app.post('/api/users/register', UserController.register);
    app.post('/api/users/login', UserController.login);
    app.post('/api/users/logout', UserController.logout);
    app.get('/api/users/user', authenticateUser,UserController.getLoggedInUser);
    app.get('/api/users/:id',UserController.getOneUser);
    app.get('/api/users', UserController.getAllUsers);
    app.put('/api/users/:id', UserController.updateUser);
}
