const  jwt = require("jsonwebtoken")

const sign = (data)=> jwt.sign({data},process.env.SECRET_KEY,{expiresIn: '72h'})
const verify = (data) => jwt.verify(data,process.env.SECRET_KEY)

module.exports = {sign, verify}