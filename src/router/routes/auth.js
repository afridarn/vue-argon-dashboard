const auth = {
  path: "/auth",
  name: "Auth",
  children: [
    {
      path: "signin",
      name: "Signin",
      component: () => import("@/views/Auth/Signin.vue"),
    },
    {
      path: "signup",
      name: "Signup",
      component: () => import("@/views/Auth/Signup.vue"),
    },
    {
      path: "signout",
      name: "Signout",
    },
  ],
};

export default auth;
