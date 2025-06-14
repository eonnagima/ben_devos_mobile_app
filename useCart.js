import create from 'zustand'; //library that lets you store persistent state data in React Native
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persist } from 'zustand/middleware';

export const useCartStore = create(
  persist(
    (set) => ({
      cartItems: [],

      addToCart: (item) => {
        set((state) => {
          const existingItem = state.cartItems.find(i => i.id === item.id);

          if (existingItem) {
            return {
              cartItems: state.cartItems.map(i =>
                i.id === item.id ? { ...i, amount: i.amount + (item.amount || 1) } : i
              ),
            };
          }

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
a