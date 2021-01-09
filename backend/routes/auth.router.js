const {Router} = require('express');
const User = require('../models/User');
const router = Router();


router.post('/reg', async (req, res) =>{
    
    const {login, password} = req.body;

    const candidate = await User.findOne({ login })
    console.log('a')
    if (candidate) {
      return res.status(400).json({ message: 'Такой пользователь уже существует' })
    }
    const logan = new User({ login, password })
    
    await logan.save()

    res.status(201).json({ message: 'Пользователь создан' })
})

router.get('/data', (req, res) => {
    User.find({  })
    .then((data) => {
        console.log('Data:', data);
        res.json(data);
    })
})

module.exports = router;