import express from 'express';
import mongoose from 'mongoose';
import Postcomment from '../models/comments.js';

// const router = express.Router();

// export const CommentPost = async (req, res) => {
//     const {id} = req.params;
//     const comment= req.body;
    

//     if (!req.userId) {
//         return res.json({ message: "Unauthenticated" });
//       }

//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
//     const post = await Postcomment.findById(id);
//       post.Comments.push(comment.Comments);
//     const updatedPost = await Postcomment.findByIdAndUpdate(id, post, { new: true });
//     res.status(200).json(updatedPost);
// }

// export default router;