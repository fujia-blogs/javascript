function genGetInstance() {
  let instance;

  class LoginModal {}

  return () => {
    if (!instance) {
      return new LoginModal();
    }

    return instance;
  };
}

// 借用模块化
let instance;

class LoginModal {}

export default () => {
  if (!instance) {
    instance = new LoginModal();
  }

  return instance;
};
