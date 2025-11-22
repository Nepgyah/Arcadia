import { create } from 'zustand';
import breadcrumbReducer from '@/slices/breadcrumbSlice';
import { User } from '@/types/account';

// CSRF Token
type CSRFStore = {
    token: string | null,
    setToken: (token: string) => void
}

export const useCSRFStore = create<CSRFStore>((set) => ({
    token: null,
    setToken: (newToken: string) => {
        set(() => ({ token: newToken}))
    }
}))

// Breadcrumbs
type BreadcrumbStore = {
    crumbs: string[];
    setBreadcrumbs: (crumbs: string[]) => void;
}

export const useBreadcrumbStore = create<BreadcrumbStore>((set) => ({
    crumbs: ['Home'],
    setBreadcrumbs: (newCrumbs: string[]) => {
        set(() => ({ crumbs: newCrumbs}))
    }
}))

// User
type UserStore = {
    user: User | null;
    setUser: (user: User) => void;
    setNull: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
    user: null,
    setUser: (user: User) => {
        set(() => ({ user: user}))
    },
    setNull: () => {
        set((state) => ({ user: null}))
    }
}))