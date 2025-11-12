import express from 'express'
import con from '../utils/db.js'
import jwt from 'jsonwebtoken'

const router = express.Router()

router.post('/adminlogin', (req, res) => {
    const sql = 'SELECT * FROM admin WHERE email = ? AND password = ?'
    con.query(sql, [req.body.email, req.body.password], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Database query error' })
        }
        if (result.length > 0) {
            const email = result[0].email
            const token = jwt.sign({ role: 'admin', email: email }, "jwt_secret_key", { expiresIn: '1d' })
            res.cookie('token', token)
            return res.json({ message: 'Login successful', token: token })
        } else {
            return res.status(401).json({ error: 'Invalid email or password' })
        }
    })
})

export { router as adminRouter }