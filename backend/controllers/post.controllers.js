const PostModels = require('../models/post.models');

module.exports.getPosts = async (req, res) => {
    const posts = await PostModels.find(); // on récupére les post crée
    res.status(200).json(posts)
}

module.exports.setPosts = async (req, res) => { 
    if(!req.body.message){  // gérer si y'a pas de message 
        res.status(400).json({ message: "merci d'ajouter un message"});
    }

    const post = await PostModels.create({ // creer le post dans la base de données quand on envoie un post
        message: req.body.message,
        author: req.body.author
    })
    res.status(200).json(post);
};

module.exports.editPost = async (req, res) => {
    const post = await PostModels.findById(req.params.id) // permet de trouver le post avec son id

    if (!post){
        res.status(400).json( {message: "Ce post n'existe pas"}); // si on trouve pas le poste == erreur
    }
    const updatePost = await PostModels.findByIdAndUpdate( // si on trouve le post on l'update 
        post,
        req.body,
        {new: true}
    )
    res.status(200).json(updatePost)
}


module.exports.deletePost = async (req, res) => {
    const post = await PostModels.findById(req.params.id);

    if (!post){
        res.status(400).json( {message: "Ce post n'existe pas"}); // si on trouve pas le poste == erreur
    }

    await post.deleteOne();
    res.status(200).json("Message supprimé " + req.params.id);

};

module.exports.likePost = async (req, res) => {
    try {
        await PostModels.findByIdAndUpdate(
            req.params.id,
            { $addToSet: { likers: req.body.userId } },
            { new: true }
        ).then((data) => res.status(200).send(data));
        
    } catch (err) {
        res.status(404).json(err)
    }
    
};

module.exports.dislikePost = async (req, res) => {
    try {
        await PostModels.findByIdAndUpdate(
            req.params.id,
            { $pull: { likers: req.body.userId } },
            { new: true }
        ).then((data) => res.status(200).send(data));
        
    } catch (err) {
        res.status(404).json(err)
    }
    
} 