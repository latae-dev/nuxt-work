import { ref, computed } from 'vue'

export const useSearch = (productsData) => {
  // Search and Filter State
  const searchQuery = ref('')
  const selectedCategory = ref('')
  const selectedLanguage = ref('')
  const selectedPriceRange = ref('')
  const isSearching = ref(false)

  // Computed Properties
  const filteredProducts = computed(() => {
    const query = searchQuery.value.trim().toLowerCase()
    const category = selectedCategory.value
    const language = selectedLanguage.value.trim().toLowerCase()
    const price = selectedPriceRange.value

    let filtered = productsData.value

    if (query) {
      filtered = filtered.filter((product) => {
        const title = product.title.toLowerCase()
        const desc = product.description.toLowerCase()
        const cat = String(product.category).toLowerCase()
        return (
          title.includes(query) ||
          desc.includes(query) ||
          cat.includes(query)
        )
      })
    }

    if (category) {
      filtered = filtered.filter((product) => String(product.category) === category)
    }

    if (language) {
      filtered = filtered.filter((product) =>
        Array.isArray(product.technologies) &&
        product.technologies.some((tech) => String(tech).toLowerCase().includes(language))
      )
    }

    if (price) {
      let min = 0
      let max = Number.POSITIVE_INFINITY

      if (price.includes('+')) {
        // e.g. '5000+' => min 5000, no max
        min = Number(price.replace('+', '')) || 0
      } else if (price.includes('-')) {
        const [minStr, maxStr] = price.split('-')
        min = Number(minStr) || 0
        max = Number(maxStr)
        if (!Number.isFinite(max)) max = Number.POSITIVE_INFINITY
      } else {
        const only = Number(price)
        if (Number.isFinite(only)) min = only
      }

      filtered = filtered.filter((product) => product.price >= min && product.price <= max)
    }

    return filtered
  })

  const filteredProductsCount = computed(() => filteredProducts.value.length)

  // Methods
  const clearFilters = () => {
    searchQuery.value = ''
    selectedCategory.value = ''
    selectedLanguage.value = ''
    selectedPriceRange.value = ''
  }

  return {
    searchQuery,
    selectedCategory,
    selectedLanguage,
    selectedPriceRange,
    isSearching,
    filteredProducts,
    filteredProductsCount,
    clearFilters
  }
} 