import jwt from 'jsonwebtoken';
const jwtAuth = (req, res, next)=>{
    // 1.read token

    const token = req.headers["authorization"];

    if(!token){
        return res.status(401).send('Unauthorized');
    }

    // 2. if no token return error

      try {
        const payload = jwt.verify(token,"secretkey");
        console.log(payload);
      } catch (error) {
        return res.status(401).send('Unauthorized');
      }

    // 3. check if token valid.

    // 4.call  next middleware


    // 5.return error

    next();
}

export default jwtAuth;