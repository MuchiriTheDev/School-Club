async function getAllPublishedArticles(req, res) {
    try {
        const { pool } = req;
        if (pool.connected) {
            const request = pool.request();
            const result = await request.execute('GetAllPublishedArticles');
            const articles = result.recordset;
            res.status(200).json({ success: true, articles });
        } else {
            throw new Error("Database connection error");
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
}

async function readArticle(req, res) {
    try {
        const article_id = req.params.id;
        if (!article_id) {
            throw new Error("Missing article_id");
        }

        const { pool } = req;
        if (pool.connected) {
            const request = pool.request();
            request.input("article_id", article_id);
            const result = await request.execute('GetSingleArticle');
            const article = result.recordset[0];

            if (article) {
                res.status(200).json({ success: true, article });
            } else {
                res.status(404).json({ success: false, message: "Article not found" });
            }
        } else {
            throw new Error("Database connection error");
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

async function getArticlesByUser(req, res) {
    try {
        const user_id = req.params.user_id;
        if (!user_id) {
            throw new Error("Missing user_id");
        }

        const { pool } = req;
        if (pool.connected) {
            const request = pool.request();
            request.input("user_id", user_id);

            const result = await request.execute('GetArticlesByUser');
            const articles = result.recordset;
            res.status(200).json({ success: true, articles });
        } else {
            throw new Error("Database connection error");
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

async function createArticle(req, res) {
    try {
        const { user_id, title, content, img_urls, status } = req.body;
        // Input validation
        if (!user_id || !title || !content || !img_urls || !status) {
            throw new Error("Missing required fields");
        }
        // Convert the img_urls array to a JSON string
        const imgUrlsJson = JSON.stringify(img_urls);
        
        const { pool } = req;
        let user = req.session.user;
        if (pool.connected) {
            const request = pool.request();
            request.input("user_id", user.user_id);
            request.input("title", title);
            request.input("content", content);
            request.input("img_urls", imgUrlsJson);
            request.input("status", status);

            const result = await request.execute('CreateArticle');

            // Check for SQL errors
            if (result.rowsAffected[0] === 1) {
                res.status(201).json({ success: true, message: "Article created successfully" });
            } else {
                throw new Error("Failed to create article");
            }
        } else {
            throw new Error("Internal server error");
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

async function updateArticle(req, res) {
    try {
        const article_id = req.params.id;
        const { title, content, img_urls, status } = req.body;
        const user = req.session.user;
        if (!user) {
            throw new Error("User is not authenticated");
        }

        // Input validation
        if (!title || !content || !img_urls || !status) {
            throw new Error("Missing required fields");
        }

        const imgUrlsJson = JSON.stringify(img_urls);

        const { pool } = req;
        if (pool.connected) {
            // Check if the user is the owner of the article
            const ownershipCheckQuery = `
                SELECT user_id FROM Articles WHERE article_id = @article_id;
            `;

            const ownershipResult = await pool
                .request()
                .input("article_id", article_id)
                .query(ownershipCheckQuery);

            if (!ownershipResult.recordset[0] || ownershipResult.recordset[0].user_id !== user.user_id) {
                throw new Error("Unauthorized: You are not the owner of this article");
            }

            // If the user is the owner, proceed with the update
            const request = pool.request();
            request.input("article_id", article_id);
            request.input("title", title);
            request.input("content", content);
            request.input("img_urls", imgUrlsJson);
            request.input("status", status);

            const result = await request.execute('UpdateArticle');

            // Check for SQL errors
            if (result.rowsAffected[0] === 1) {
                res.status(200).json({ success: true, message: "Article updated successfully" });
            } else {
                throw new Error("Failed to update article");
            }
        } else {
            throw new Error("Internal server error");
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

async function deleteArticle(req, res) {
    try {
        const article_id = req.params.id;
        if (!article_id) {
            throw new Error("Missing article_id");
        }

        const user = req.session.user;
        if (!user) {
            throw new Error("User is not authenticated");
        }

        const { pool } = req;
        if (pool.connected) {
            const ownershipCheckQuery = `
                SELECT user_id FROM Articles WHERE article_id = @article_id;
            `;

            const ownershipResult = await pool
                .request()
                .input("article_id", article_id)
                .query(ownershipCheckQuery);

            if (!ownershipResult.recordset[0] || ownershipResult.recordset[0].user_id !== user.user_id) {
                throw new Error("Unauthorized: You are not the owner of this article");
            }
            const request = pool.request();
            request.input("article_id", article_id);

            const result = await request.execute('DeleteArticle');
            
            if (result.returnValue === 0) {
                res.status(200).json({ success: true, message: "Article deleted successfully" });
            } else {
                throw new Error("Failed to delete article");
            }
        } else {
            throw new Error("Internal server error");
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

module.exports = {getAllPublishedArticles, readArticle, getArticlesByUser, createArticle, updateArticle, deleteArticle };