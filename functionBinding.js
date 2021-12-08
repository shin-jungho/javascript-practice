// let user = {
//    firstName: 'John',
//    sayHi() {
//      console.log(`Hello, ${this.firstName}!`);
//    }
// };

// setTimeout(user.sayHi, 1000);

// function askPassword(ok, fail) {
//   let password = prompt('비밀번호를 입력해주세요.', '')
//   if (password == 'rockstar') ok();
//   else fail();
// }

// let user = {
//    name: 'John',

//    loginOk() {
//      console.log(`${this.name}님이 로그인했습니다.`);
//    },

//    loginFail() {
//      console.log(`${this.name}님이 로그인에 실패했습니다.`);
//    },
// };

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));


function askPassword(ok, fail) {
  let password = prompt('비밀번호를 입력해주세요.', '');
  if (password = 'rockstar') {
    ok();
  } else {
    fail();
  }
}

let user = {
  name: 'John',

  login(result) { 
    console.log(this.name + (result ? 'login success' : 'login fail'));
  }
};

askPassword(user.login.bind(user, true), user.login.bind(user, false));
