module.exports = async (req, res) => {
    console.log(100);
    req.session.destroy(function(){
    //删除cookie
    res.clearCookie('connect.sid');
    //清除模板中的用户信息
    req.app.locals.userInfo=null;
    res.redirect('/admin/login');
    });
}