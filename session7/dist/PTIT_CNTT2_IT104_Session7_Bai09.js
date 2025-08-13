"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Comment {
    id;
    userId;
    content;
    replies = [];
    constructor(id, userId, content) {
        this.content = content;
        this.id = id;
        this.userId = userId;
    }
    addReply(reply) {
        this.replies.push(reply);
    }
}
class Post {
    id;
    likes = [];
    comments = [];
    userId;
    content;
    constructor(id, userId, content) {
        this.id = id;
        this.userId = userId;
        this.content = content;
    }
    addLike(userId) {
        if (!this.likes.includes(userId)) {
            this.likes.push(userId);
        }
    }
    addComment(comment) {
        this.comments.push(comment);
    }
}
class User {
    id;
    posts = [];
    followers = [];
    constructor(id) {
        this.id = id;
    }
    createPost(content) {
        const idRandom = Math.random() * 1000000;
        const newPost = new Post(idRandom, this.id, content);
        this.posts.push(newPost);
        return newPost;
    }
    comment(postId, commentContent, allUser) {
        for (const user of allUser) {
            for (const post of user.posts) {
                if (post.id === postId) {
                    const idRandom = Math.random() * 1000000;
                    const newComment = new Comment(idRandom, this.id, commentContent);
                    post.comments.push(newComment);
                }
            }
        }
    }
    follow(user) {
        if (!this.followers.includes(user)) {
            this.followers.push(user);
        }
    }
    likePost(postId, allUser) {
        for (const user of allUser) {
            for (const post of user.posts) {
                if (post.id === postId) {
                    post.addLike(this.id);
                }
            }
        }
    }
    viewFeed() {
        for (const user of this.followers) {
            for (const post of user.posts) {
                console.log(`Người dùng: ${user.id} - ${post.content}`);
            }
        }
    }
}
const user1 = new User(1);
const user2 = new User(2);
const user3 = new User(3);
const allUser = [user1, user2, user3];
user1.follow(user2);
user1.follow(user3);
const postA = user2.createPost("Hello");
const postB = user3.createPost("Hello m");
user1.likePost(postA.id, allUser);
user1.comment(postA.id, "Chào bạn", allUser);
console.log(postA.likes);
console.log(postA.comments);
user1.viewFeed();
