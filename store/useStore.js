// import { create } from "zustand";
// const useStore = create((set) => ({
//     authenticated: false, // initial value of authenticated property
//     user: {}, // initial value of user property

//     setAuthentication: (val) => set((state) => ({ authenticated: val })), // function to set the authentication status
//     setUser: (user) => set({ user }), // function to set user information

//     //     clearUser: () => set({ user: null }),

//     //     isLoading: false,
//     //     setLoading: (loading) => set({ isLoading: loading }),

//     //     error: null,
//     //     setError: (error) => set({ error }),
// }));

// export default useStore;

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

 const useStore = create(
  persist(
    (set) => ({
      authenticated: false,
      user: null,
      setAuthentication: (isAuth) => set({ authenticated: isAuth }),
      setUser: (userData) => set({ user: userData }),
      logout: () => set({ authenticated: false, user: null }),
    }),
    {
      name: 'auth-storage', // unique name for authentication state
      storage: createJSONStorage(() => localStorage), // you can also use sessionStorage
    },
  )
);
export default useStore