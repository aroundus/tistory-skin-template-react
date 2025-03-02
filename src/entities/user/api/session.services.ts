interface User {
  id: number;
  name: string;
  email: string;
  imageURL: string;
  blogURL: string;
  isAdmin: boolean;
}

type Session =
  | {
      isLoggedIn: true;
      user: User;
    }
  | {
      isLoggedIn: false;
      user: null;
    };

const INITIAL_SESSION: Session = {
  isLoggedIn: false,
  user: null,
};

export function getSession() {
  const session: Session = Object.assign({}, INITIAL_SESSION);
  const user = window.initData?.user;

  if (window.T && user) {
    const { config } = window.T;

    if (config.IS_LOGIN) {
      session.isLoggedIn = true;
      session.user = {
        id: config.USER.id,
        name: config.USER.name,
        email: user.loginId,
        imageURL: config.USER.profileImage,
        blogURL: config.USER.homepage,
        isAdmin: config.ROLE === 'owner',
      };
    }
  }

  return session;
}
