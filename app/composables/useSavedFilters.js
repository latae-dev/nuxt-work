import { ref, watch } from 'vue'

export const useSavedFilters = ({ searchQuery, selectedCategory, selectedLanguage, selectedPriceRange }) => {
  const STORAGE_KEY = 'nuxt-saved-filters'
  const savedFilters = ref([])

  const load = () => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      savedFilters.value = raw ? JSON.parse(raw) : []
    } catch { savedFilters.value = [] }
  }

  const persist = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedFilters.value))
  }

  const saveCurrent = (name = 'ตัวกรองของฉัน') => {
    const snapshot = {
      id: Date.now(),
      name,
      query: searchQuery.value,
      category: selectedCategory.value,
      language: selectedLanguage.value,
      priceRange: selectedPriceRange.value
    }
    savedFilters.value = [snapshot, ...savedFilters.value].slice(0, 12)
    persist()
  }

  const applyFilter = (filter) => {
    searchQuery.value = filter.query || ''
    selectedCategory.value = filter.category || ''
    selectedLanguage.value = filter.language || ''
    selectedPriceRange.value = filter.priceRange || ''
  }

  const removeFilter = (id) => {
    savedFilters.value = savedFilters.value.filter(f => f.id !== id)
    persist()
  }

  if (process.client) load()

  watch(savedFilters, persist, { deep: true })

  return {
    savedFilters,
    saveCurrent,
    applyFilter,
    removeFilter
  }
}


