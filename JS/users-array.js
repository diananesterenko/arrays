function User(name, surname, age, isMale, email, isSubscribed) {
  this.firstName = name;
  this.lastName = surname;
  this.age = age;
  this.isMale = isMale;
  this.email = email;
  this.isSubscribed = isSubscribed;
}

const users = [];

const userProto = {};
userProto.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};
User.prototype = userProto;
users.push(user);

for (let i = 0; i < 100; i++) {
  const user = new User(
    `Username${i}`,
    `Usersurname${i}`,
    Math.floor(Math.random() * 90),
    Math.random() > 0.5,
    `useremail${i}@gmail.com`,
    Math.random() > 0.5
  );
}

console.log(users);
console.log(users[2].getFullName());
//Отримати масив користувачів, які не підписані (not subscribed)
console.log("-------------------------1---------------------");
const notSubscribed = users.filter((item) => !item.isSubscribed);
console.log(notSubscribed);

//Отримати масив повних імен осіб жіночої статі шкільного віку (6 – 18 років).
console.log("-------------------------2---------------------");
const schoolNames = users.filter((item) => {
  if (item.age >= 6 && item.age <= 18) {
    return `${item.firstName} ${item.lastName}`;
  }
});
console.log(schoolNames);

//Видалити з масиву користувача з email useremail5@gmail.com
console.log("-------------------------3---------------------");
const foundIndex = users.findIndex(
  (item) => item.email === "useremail99@gmail.com"
);
console.log(foundIndex);
users.splice(foundIndex, 1);
console.log(users);

//Перевірити, чи є серед користувачів користувач з email`ом useremail99@gmail.com
console.log("-------------------------4---------------------");
const isemail = users.some(
  (element) => element.email === "useremail99@gmail.com"
);
console.log(isemail);

//Перевірити, чи всі користувачі підписані (subscribed).
console.log("-------------------------5---------------------");
const isSubscribed = users.every((element) => element.isSubscribed === true);
console.log(isSubscribed);
