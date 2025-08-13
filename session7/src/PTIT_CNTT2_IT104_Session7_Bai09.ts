class Comment {
    id: number;
    userId: number;
    content: string;
    replies: string[] = [];
    constructor(id: number, userId: number, content: string){
        this.content = content;
        this.id = id;
        this.userId = userId;
    }
    addReply(reply: string): void{
        this.replies.push(reply);
    }   
}

class Post {
    id: number;
    likes: number[] = [];
    comments: Comment[] = [];
    userId: number;
    content: string;
    constructor(id: number, userId: number, content: string){
        this.id = id;
        this.userId = userId;
        this.content = content;
    }
    addLike(userId: number): void{
        if(!this.likes.includes(userId)){
            this.likes.push(userId);
        }
    }
    addComment(comment: Comment): void{
        this.comments.push(comment);
    }
}

class User {
    id: number;
    posts: Post[] = [];
    followers: User[] = [];
    constructor(id: number){
        this.id = id;
    }
    createPost(content: string): Post{
        const idRandom = Math.random()*1000000;
        const newPost = new Post(idRandom, this.id, content);
        this.posts.push(newPost);
        return newPost;
    }
    comment(postId: number, commentContent: string, allUser: User[]): void{
        for (const user of allUser) {
            for (const post of user.posts) {
                if(post.id === postId){
                    const idRandom: number = Math.random()*1000000;
                    const newComment = new Comment(idRandom, this.id, commentContent);
                    post.comments.push(newComment);
                }
            }   
        }
    }
    follow(user: User): void{
        if(!this.followers.includes(user)){
            this.followers.push(user);
        }
    }
    likePost(postId: number, allUser: User[]): void{
        for(const user of allUser){
            for(const post of user.posts){
                if(post.id === postId){
                    post.addLike(this.id);
                }
            }
        }
    }
    viewFeed(): void{
        for(const user of this.followers){
            for(const post of user.posts){
                console.log(`Người dùng: ${user.id} - ${post.content}`);
            }
        }
    }
}

const user1 = new User(1);
const user2 = new User(2);
const user3 = new User(3);

const allUser: User[] = [user1, user2, user3];

user1.follow(user2);
user1.follow(user3);

const postA = user2.createPost("Hello");
const postB = user3.createPost("Hello m");

user1.likePost(postA.id, allUser);
user1.comment(postA.id, "Chào bạn", allUser);

console.log(postA.likes);
console.log(postA.comments);

user1.viewFeed();