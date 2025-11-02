const allowedUsers = [101, 152, 110, 204, 119];

function checkAccess (userID) {
   return allowedUsers.includes(userID)
}

console.log(checkAccess(101))