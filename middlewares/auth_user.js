module.exports = function (req, res, next) {
    if (req.originalUrl.includes("sessions")) return next();
    if (req.originalUrl.includes("signup")) return next();
    if (req.session.userId) return next();
    res.redirect('/sessions');
}