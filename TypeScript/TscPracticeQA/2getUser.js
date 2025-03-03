var agess = 30;
var isActive = false;
function getUserInfo(agess, isActive) {
    return "User is ".concat(agess, " years old and is ").concat(isActive ? "active" : "inactive", ".");
}
console.log(getUserInfo(agess, isActive));
