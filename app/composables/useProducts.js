import { ref, computed } from 'vue'
import { products } from '../data'

export const useProducts = () => {
  // Convert products to reactive ref
  const productsData = ref(products)
  const hasMoreProducts = ref(true)
  const loadingMore = ref(false)

  // Computed Properties
  const filteredProducts = computed(() => {
    return productsData.value
  })

  const filteredProductsCount = computed(() => filteredProducts.value.length)

  // Methods
  const loadMoreProducts = async () => {
    loadingMore.value = true
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    loadingMore.value = false
    hasMoreProducts.value = false
  }

  return {
    productsData,
    hasMoreProducts,
    loadingMore,
    filteredProducts,
    filteredProductsCount,
    loadMoreProducts
  }
} 