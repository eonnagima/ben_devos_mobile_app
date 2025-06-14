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
            const updatedCart = state.cartItems.map(i =>
              i.id === item.id
                ? { ...i, amount: (i.amount || 1) + (item.amount || 1) }
                : i
            );
            return { cartItems: updatedCart };
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

      increaseAmount: (itemId) => {
        set((state) => {
          const updatedCart = state.cartItems.map(item =>
            item.id === itemId
              ? { ...item, amount: item.amount + 1 }
              : item
          );
          return { cartItems: updatedCart };
        });
      },

      decreaseAmount: (itemId) => {
        set((state) => {
          const updatedCart = state.cartItems
            .map(item => {
              if (item.id === itemId) {
                if (item.amount > 1) {
                  return { ...item, amount: item.amount - 1 };
                }
                // else we return null here to signal removal
                return null;
              }
              return item;
            })
            .filter(item => item !== null); // remove items that became null (amount 0)

          return { cartItems: updatedCart };
        });
      },
    }),
    {
      name: 'userCart',
      getStorage: () => AsyncStorage,
    }
  )
);
