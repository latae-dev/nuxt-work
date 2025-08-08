<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Header -->
    <header class="bg-white dark:bg-gray-800 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-6">
          <NuxtLink to="/" class="text-2xl font-bold text-gray-900 dark:text-white">
            Digital Products
          </NuxtLink>
          <button
            @click="$router.back()"
            class="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            ← กลับ
          </button>
        </div>
      </div>
    </header>

    <!-- Product Details -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div v-if="product" class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                 <!-- Product Images -->
         <div class="space-y-4">
            <div 
              class="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700 cursor-pointer hover:opacity-90 transition-opacity"
              @click="openImageModal(product.thumbnail, product.title)"
            >
              <img
                :src="product.thumbnail"
                :alt="product.title"
                class="w-full h-full object-cover"
                loading="lazy"
                referrerpolicy="no-referrer"
              />
           </div>
            <div v-if="product.images && product.images.length > 0" class="grid grid-cols-4 gap-2">
              <div
                v-for="(image, index) in product.images"
                :key="index"
                class="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700 cursor-pointer hover:opacity-75 transition-opacity"
                @click="openImageModal(image, `${product.title} - Image ${index + 1}`)"
              >
                <img
                  :src="image"
                  :alt="`${product.title} - Image ${index + 1}`" 
                  class="w-full h-full object-cover"
                  loading="lazy"
                  referrerpolicy="no-referrer"
                />
              </div>
           </div>
         </div>

        <!-- Product Info -->
        <div class="space-y-6">
          <!-- Title and Category -->
          <div>
            <div class="flex items-center space-x-2 mb-2">
              <span class="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-200">
                {{ product.category }}
              </span>
              <span class="px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full dark:bg-green-900 dark:text-green-200">
                {{ product.price }}
              </span>
            </div>
            <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {{ product.title }}
            </h1>
            <p class="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              {{ product.description }}
            </p>
          </div>

          <!-- Stats -->
          <div class="flex items-center space-x-6">
            <div class="flex items-center space-x-1">
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span class="text-gray-700 dark:text-gray-300">{{ product.rating }}</span>
            </div>
            <div class="flex items-center space-x-1">
              <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-700 dark:text-gray-300">{{ product.sold }} ขายแล้ว</span>
            </div>
          </div>

          <!-- Technologies -->
          <div v-if="product.technologies && product.technologies.length > 0">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">เทคโนโลยีที่ใช้</h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in product.technologies"
                :key="tech"
                class="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full dark:bg-gray-700 dark:text-gray-300"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- Features -->
          <div v-if="product.features && product.features.length > 0">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">คุณสมบัติ</h3>
            <ul class="space-y-2">
              <li
                v-for="feature in product.features"
                :key="feature"
                class="flex items-start space-x-2"
              >
                <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-gray-700 dark:text-gray-300">{{ feature }}</span>
              </li>
            </ul>
          </div>

          <!-- Tags -->
          <div v-if="product.tags && product.tags.length > 0">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">แท็ก</h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in product.tags"
                :key="tag"
                class="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-200"
              >
                {{ tag }}
              </span>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex space-x-4 pt-6">
            <button
              v-if="product.demo_url"
              @click="openDemo(product.demo_url)"
              class="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              ดู Demo
            </button>
            <button
              class="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              ติดต่อซื้อ
            </button>
          </div>
        </div>
      </div>

      <!-- Loading State -->
      <div v-else-if="loading" class="flex justify-center items-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>

      <!-- Not Found -->
      <div v-else class="text-center py-12">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">ไม่พบสินค้า</h2>
        <p class="text-gray-600 dark:text-gray-300 mb-6">สินค้าที่คุณค้นหาอาจไม่มีอยู่หรือถูกลบไปแล้ว</p>
          <NuxtLink
            to="/"
            class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
          กลับหน้าหลัก
        </NuxtLink>
             </div>
     </main>

     <!-- Image Modal -->
      <div
        v-if="showImageModal"
        class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
        @click="onOverlayClick"
      >
        <div class="relative max-w-4xl max-h-full" @click.stop>
         <button
           @click="closeImageModal"
           class="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
         >
           <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
           </svg>
         </button>
          <img
            :src="modalImage.src"
            :alt="modalImage.alt"
            class="max-w-full max-h-full object-contain rounded-lg"
            referrerpolicy="no-referrer"
          />
       </div>
     </div>
   </div>
 </template>

<script setup>
import { products } from '~/data/products'
import { ref, onMounted, onUnmounted, watchEffect, nextTick } from 'vue'

// Get route params
const route = useRoute()
const productId = route.params.id

// Reactive state
const loading = ref(true)
const product = ref(null)
const showImageModal = ref(false)
const modalImage = ref({ src: '', alt: '' })

// Functions
const openDemo = (demoUrl) => {
  if (demoUrl) {
    window.open(demoUrl, '_blank')
  }
}

const openImageModal = (src, alt) => {
  modalImage.value = { src, alt }
  showImageModal.value = true
  preventNextOverlayClick.value = true
  nextTick(() => {
    // ป้องกัน click แรกจากการเปิด modal ไปปิด modal ทันที
    setTimeout(() => { preventNextOverlayClick.value = false }, 0)
  })
}

const closeImageModal = () => {
  showImageModal.value = false
  modalImage.value = { src: '', alt: '' }
}

const preventNextOverlayClick = ref(false)
const onOverlayClick = () => {
  if (preventNextOverlayClick.value) {
    preventNextOverlayClick.value = false
    return
  }
  closeImageModal()
}

// Find product by ID (synchronous, ไม่มี delay)
onMounted(() => {
  loading.value = true
  const numericId = parseInt(productId)
  product.value = products.find(p => p.id === numericId) || null
  loading.value = false
})

// Keyboard support for modal
onMounted(() => {
  const handleKeydown = (event) => {
    if (event.key === 'Escape' && showImageModal.value) {
      closeImageModal()
    }
  }
  
  document.addEventListener('keydown', handleKeydown)
  
  onUnmounted(() => {
    document.removeEventListener('keydown', handleKeydown)
  })
})

// Reactive head
watchEffect(() => {
  const title = product.value ? `${product.value.title} - Digital Products` : 'สินค้าไม่พบ - Digital Products'
  const description = product.value ? product.value.description : 'ไม่พบสินค้าที่ค้นหา'
  useHead({ title, meta: [{ name: 'description', content: description }] })
})
</script>

<style scoped>
.aspect-w-16 {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
}

.aspect-w-1 {
  position: relative;
  padding-bottom: 100%; /* 1:1 aspect ratio */
}

.aspect-w-16 > *,
.aspect-w-1 > * {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style> 