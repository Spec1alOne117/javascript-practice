const postTags = ['javascript', 'webdev', 'coding', 'tutorial'];

function myFn (tagsList, specialTag) {
    if (tagsList.indexOf(specialTag) !== -1) {
        return true;
    } else {
        return false;
    }
};

console.log(myFn (postTags, 'coding'))

const comments = [
    { id: 101, text: 'Great post!', status: 'approved' },
    { id: 102, text: 'This is spam.', status: 'pending' },
    { id: 103, text: 'I disagree with this.', status: 'approved' },
    { id: 104, text: 'Awesome!', status: 'approved' }
];

function findPendingCommentIndex (commentsList) {
   return commentsList.findIndex(element => element.status === 'pending')
}

console.log(findPendingCommentIndex (comments))