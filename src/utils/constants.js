const ROUTS = {
  mainPath: "/",
  moviesPath: "/movies",
  savedMoviesPath: "/saved-movies",
  loginPath: "/signin",
  registerPath: "/signup",
  logoutPath: "/signout",
  profilePath: "/profile",
  userPath: "/users/me",
  otherPath: "*",
};

export default ROUTS;

export const PARAMS = {
  base: {
    width: 1280,
    cards: {
      current: 12,
      more: 3,
    },
  },
  desktop: {
    width: 1024,
    cards: {
      current: 8,
      more: 2,
    },
  },
  tablet: {
    width: 768,
    cards: {
      current: 8,
      more: 2,
    },
  },
  mobile: {
    width: 320,
    cards: {
      current: 5,
      more: 2,
    },
  },
};
