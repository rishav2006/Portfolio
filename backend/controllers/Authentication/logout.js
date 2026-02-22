const logoutFunc = (req, res) => {
  res.cookie("token", "", {
  httpOnly: true,
  expires: new Date(0),
});
}
module.exports = logoutFunc;