import {Router, Request, Response} from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {check, validationResult} from 'express-validator';
import User from '../models/User';
import Films from '../models/Films';
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
        {expiresIn:'7d'});
    res.json({ token, userId: user._id});
})

router.get('/data', (req:Request, res:Response) => {
    User.find({  })
    .then((data) => {
        res.json(data);
    })
})
router.get('/data1', (req:Request, res:Response) => {
    Films.find({  })
    .then((data) => {
        res.json(data);
    })
})

router.post('/watchlistadd', auth, async(req:any, res:Response) => {
    const user:any = await User.findById(req.user.id)
    const film:any = await Films.find({owner:req.user.id,id:req.body.item.id})
    console.log(film);
    if(film.length === 0){
        const film = new Films({owner:req.user.id,ourWatchList:true,...req.body.item});
        await film.save()
    }else{
        const film:any = await Films.find({owner:req.user.id,id:req.body.item.id,ourWatchList:false})
        if(film.length === 0){
            res.status(400).json({ mes:"the movie is already on the watchlist",login:user.login});
        }else{
            const film:any = await Films.update({owner:req.user.id,id:req.body.item.id},{$set: { ourWatchList:true }});
        }
    }
    res.status(200).json({ mes:"complete added",login:user.login});
})

router.get('/watchlist', auth, async(req:any, res:Response) => {
    //const user:any = await User.findById(req.user.id)
    const film:any = await Films.find({owner:req.user.id,ourWatchList:true})
    res.status(200).json({ data: film});
})

router.get('/ratinglist', auth, async(req:any, res:Response) => {
    //const user:any = await User.findById(req.user.id)
    const film:any = await Films.find({owner:req.user.id,ourVote:{ $gt: 0 }})
    res.status(200).json({ data: film});
})

router.get('/getvote:filmId', auth, async(req:any, res:Response) => {
    //const user:any = await User.findById(req.user.id)
    console.log(req.params.filmId.slice(1));
    const film:any = await Films.find({id:req.params.filmId.slice(1),owner:req.user.id})
    console.log(film);
    if(film.length == 0) {
        return res.status(200).json({vote:[{ourVote:0}]});
    }
    res.status(200).json({vote:film});
})

router.post('/voteadd', auth, async(req:any, res:Response) => {
    const user:any = await User.findById(req.user.id)
    const film:any = await Films.find({owner:req.user.id,id:req.body.item.id})
    if(film.length === 0){
        const film = new Films({owner:req.user.id,...req.body.item});
        await film.save()
    }else{
        const film:any = await Films.update({owner:req.user.id,id:req.body.item.id},{$set: { ourVote:req.body.item.ourVote }});
        if(req.body.item.ourVote == 0){
            res.status(200).json({ mes:"remove vote",login:user.login});
        }
    }
    res.status(200).json({ mes:"added vote",login:user.login});
})

module.exports = router;