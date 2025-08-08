import { ref } from 'vue'

export const useNavigation = () => {
  const isMenuOpen = ref(false)

  return {
    isMenuOpen
  }
} 