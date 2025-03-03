
let agess: number = 30;
let isActive: boolean = false;


function getUserInfo(agess: number, isActive: boolean): string {
    return `User is ${agess} years old and is ${isActive ? "active" : "inactive"}.`;
}

console.log(getUserInfo(agess, isActive));
