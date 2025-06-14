import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persist } from 'zustand/middleware';

export const useCartStore = create(
  persist(
    (set) => ({
      cartItems: [],

      addToCart: (item) => {
        if (!item || !item.id) {
          console.error('Invalid item passed to addToCart:', item);
          return;
        }

        set((state) => {
          const existingItem = state.cartItems.find(i => i.id === item.id);

          if (existingItem) {
            // Increment amount
            const updatedCart = state.cartItems.map(i =>
              i.id === item.id
                ? { ...i, amount: (i.amount || 1) + (item.amount || 1) }
                : i
            );
            return { cartItems: updatedCart };
          }

          // Add new item with amount default to 1
          return {
            cartItems: [...state.cartItems, { ...item, amount: item.amount || 1 }],
          };
        });
      },

      removeFromCart: (itemId) => {
        set((state) => ({
          cartItems: state.cartItems.filter(i => i.id !== itemId),
        }));
      },

      clearCart: () => {
        set({ cartItems: [] });
      },
    }),
    {
      name: 'userCart',
      getStorage: () => AsyncStorage,
    }
  )
);
