const express = require("express");
const articlesRouter = express.Router();
const {getAllPublishedArticles, readArticle, getArticlesByUser, createArticle, updateArticle, deleteArticle} = require("../controllers/articlesController")
const {sessionAuthorization} = require("../middlewares/sessionAuthorization")

articlesRouter.get("/blog", getAllPublishedArticles)
articlesRouter.get("/blog/:id", readArticle)

articlesRouter.use(sessionAuthorization)
articlesRouter.get("/blog/articles/:user_id", getArticlesByUser)
articlesRouter.post("/blog/article", createArticle);
articlesRouter.put("/blog/:id", updateArticle);
articlesRouter.delete("/blog/:id", deleteArticle);


module.exports = articlesRouter;
