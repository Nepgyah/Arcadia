import { create } from 'zustand';

type MiruDetailStore = {
    currentTab: string
    changeTab: (newTab: string) => void
}

export const UseMiruDetailStore = create<MiruDetailStore>((set) => ({
    currentTab: 'overview',
    changeTab: (newTab: string) => {
        set(() => ( { currentTab: newTab}))
    }
}))