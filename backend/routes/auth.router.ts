import {Router, Request, Response} from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {check, validationResult} from 'express-validator';
import User from '../models/User';
import secret from '../config';
import auth from '../middleware/auth.middle';
const router = Router();


router.post(
    '/reg',
    [
        check('login', 'Некорректный email').isLength({ min: 4 }),
        check('password', 'Минимальная длина пароля 6 символов').isLength({ min: 6 })
    ],    
    async (req:Request, res:Response) =>{
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
            errors: errors.array(),
            message: 'Некорректный данные при регистрации'
            })
        }

        const {login, password} = req.body;
        const candidate = await User.findOne({ login });
        if (candidate) {
            return res.status(400).json({ message: 'Такой пользователь уже существует' })
        }
        const hashedPassword = await bcrypt.hash(password, 7);
        const logan = new User({ login, password: hashedPassword });
        await logan.save()
        res.status(201).json({ message: 'Пользователь создан' })
    } catch (error) {
        
    }
})

router.post('/login', async (req:Request, res:Response) =>{
    const {login, password} = req.body;
    const user:any = await User.findOne({ login })
    if (!user) {
        return res.status(400).json({ message: 'Пользователь не найден' })
    }
    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return res.status(400).json({ message: 'Неверный пароль, попробуйте снова' })
    }

    const token = jwt.sign(
        {id:user._id},
        secret.secret,
        {expiresIn:'24h'});
    res.json({ token, userId: user._id});
})

router.get('/data', (req:Request, res:Response) => {
    User.find({  })
    .then((data) => {
        res.json(data);
    })
})

router.post('/watchlist', auth, async(req:any, res:Response) => {
    console.log(req.user);
    const user:any = await User.findById(req.user.id)
    console.log(user.login);
    res.json({ login:user.login});
})

module.exports = router;