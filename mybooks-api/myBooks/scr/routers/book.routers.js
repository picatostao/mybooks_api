const {Router} = require ("express");
const router = Router();
const bookCtrl = require("../controller/book.controller");
const bookscrtl=require('../controller/books.controller')

router.get("/book", bookCtrl.getBook);

router.post("/book", bookCtrl.postBook);

router.delete("/book", bookCtrl.deleteBook);

router.put("/book", bookCtrl.putBook)

router.get("/books/:id_user", bookscrtl.getUserBooks)

router.get("/books/:id_user/:id_book", bookscrtl.getBookUser)

router.post("/books/:id_user", bookscrtl.addUserBook)

router.put("/books/:id_user/:id_book", bookscrtl.updateUserBook)

router.delete("/books/:id_user/:id_book", bookscrtl.deleteUserBook)


module.exports=router
