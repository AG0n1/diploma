import { create } from 'zustand'

interface IBear {
    user: string
}

export interface IUserStore extends IBear{
    increasePopulation: () => void
}

export const useStore = create((set): IUserStore => {
    return {
        user: '0',
        increasePopulation: () => set((state) => ({bears: state.bears + 1})),
    }
})