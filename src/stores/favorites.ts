import { defineStore } from "pinia";

export const useFavoritesStore = defineStore('favorites', {
    state: () => ({
        items: [] as number[],
    }),

    getters: {
        count: (state) => state.items.length,
        isFavorite: (state) => (id: number) => state.items.includes(id),
    },

    actions: {
        toggleFavorite(id: number) {
            if (this.items.includes(id)) {
                this.items = this.items.filter((itemId) => itemId !== id)
            } else {
                this.items.push(id)
            }
        },

        removeFavorite(id: number) {
            this.items = this.items.filter((itemId) => itemId !== id)
        },

        clearFavorites() {
            this.items = []
        },
    },
})