
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