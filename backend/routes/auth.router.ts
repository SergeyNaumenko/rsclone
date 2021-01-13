import {Router, Request, Response} from 'express';
import User from '../models/User';
const router = Router();


router.post('/reg', async (req:Request, res:Response) =>{
    console.log(req.body);
    const {login, password} = req.body;

    const candidate = await User.findOne({ login })
    
    if (candidate) {
      return res.status(400).json({ message: 'Такой пользователь уже существует' })
    }
    const logan = new User({ login, password })
    
    await logan.save()

    res.status(201).json({ message: 'Пользователь создан' })
})

router.get('/data', (req:Request, res:Response) => {
    User.find({  })
    .then((data) => {
        console.log('Data:', data);
        res.json(data);
    })
})

module.exports = router;