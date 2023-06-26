const {Router} = require ("express");
const router = Router();
const bookCtrl = require("../controller/book.controller");
const bookscrtl=require('../controller/books.controller')
const userCtrl=require("../controller/user.controller");

router.post("/register", userCtrl.register);

router.post("/login", userCtrl.login);

router.put("/user", userCtrl.update)

router.get("/books/:id_user", bookscrtl.getUserBooks)

router.get("/books/:id_user/:id_book", bookscrtl.getBookUser)

router.post("/books/:id_user", bookscrtl.addUserBook)

router.put("/books/:id_user/:id_book", bookscrtl.updateUserBook)

router.delete("/books/:id_user/:id_book", bookscrtl.deleteUserBook)



router.get("/book", bookCtrl.getBook);

router.post("/book", bookCtrl.postBook);

router.delete("/book", bookCtrl.deleteBook);

router.put("/book", bookCtrl.putBook)


module.exports=router
