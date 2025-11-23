import express from 'express'
import con from '../utils/db.js'
import jwt from 'jsonwebtoken'

const router = express.Router()

router.post('/adminlogin', (req, res) => {
    const sql = 'SELECT * FROM admin WHERE email = ? AND password = ?'
    con.query(sql, [req.body.email, req.body.password], (err, result) => {
        if (err) {
            return res.status(500).json({loginStatus: false, error: 'Database query error' })
        }
        if (result.length > 0) {
            const email = result[0].email
            const token = jwt.sign({ role: 'admin', email: email }, "jwt_secret_key", { expiresIn: '1d' })
            res.cookie('token', token)
            return res.json({ loginStatus: true, message: 'Login successful', token: token })
        } else {
            return res.status(401).json({ loginStatus: false, error: 'Invalid email or password' })
        }
    })
})

router.get('/category', (req, res) => {
    const sql = "SELECT * FROM catagory"
    con.query(sql, (err, result) => {
        if (err) {
            console.log(err)
            return res.json({ Status: false, error: 'Database insertion error' })
        }
        return res.json({ Status: true, Result: result, message: 'Category added successfully' })
    })
})

router.post('/add_category', (req, res) => {
    const sql = "INSERT INTO catagory (name) VALUES (?)"
    con.query(sql, [req.body.category], (err, result) => {
        if (err) {
            console.log(err)
            return res.json({ Status: false, error: 'Database insertion error' })
        }
        return res.json({ Status: true, message: 'Category added successfully' })
    })
})


export { router as adminRouter }