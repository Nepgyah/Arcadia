import { create } from 'zustand';
import breadcrumbReducer from '@/slices/breadcrumbSlice';

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
