import jwt from 'jsonwebtoken'

// user authentication middleware
const authUser = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.json({ success: false, message: 'Not Authorized user, Login Again' });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // ✅ Correct: use a new property, not req.body
    req.userId = decoded.id;

    next();

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
}

export default authUser;
