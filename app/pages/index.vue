<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
    <!-- Header -->
    <header class="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 dark:bg-gray-900/80 dark:border-gray-700">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <div class="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Icon name="lucide:code" class="text-white text-xl" />
            </div>
            <h1 class="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Salapao Dev
            </h1>
          </div>
          <nav class="hidden md:flex items-center space-x-8">
             <NuxtLink to="#home" class="text-gray-700 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400">หน้าแรก</NuxtLink>
             <NuxtLink to="#products" class="text-gray-700 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400">สินค้า</NuxtLink>
             <NuxtLink to="#about" class="text-gray-700 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400">เกี่ยวกับ</NuxtLink>
             <NuxtLink to="#contact" class="text-gray-700 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400">ติดต่อ</NuxtLink>
          </nav>
          <div class="flex items-center space-x-4">
            <ColorModeButton />
            <button class="md:hidden">
              <Icon name="lucide:menu" class="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section id="home" class="py-20 px-4">
      <div class="container mx-auto text-center">
        <div class="max-w-4xl mx-auto">
                     <h1 class="text-5xl md:text-7xl font-bold mb-6">
             <span class="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
               Template & ระบบ
             </span>
             <br />
             <span class="text-gray-800 dark:text-gray-200">คุณภาพสูง</span>
           </h1>
           <p class="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            ค้นพบ Template และระบบที่ทันสมัย พร้อมใช้งานได้ทันที 
            มาพร้อมกับเทคโนโลยีล่าสุดและดีไซน์ที่สวยงาม
          </p>
          
          <!-- Search Bar -->
          <div class="max-w-2xl mx-auto mb-8">
            <div class="relative">
                             <input
                 v-model="searchQuery"
                 type="text"
                 placeholder="ค้นหาสินค้า..."
                 class="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-full focus:border-blue-500 focus:outline-none shadow-lg dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
               />
              <button class="absolute right-2 top-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all">
                <Icon name="lucide:search" class="text-xl" />
              </button>
            </div>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div class="text-center">
              <div class="text-3xl font-bold text-blue-600 mb-2">{{ filteredProductsCount }}</div>
              <div class="text-gray-600 dark:text-gray-300">สินค้าทั้งหมด</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-purple-600 mb-2">5</div>
              <div class="text-gray-600 dark:text-gray-300">หมวดหมู่</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-pink-600 mb-2">100%</div>
              <div class="text-gray-600 dark:text-gray-300">ความพึงพอใจ</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Popular Categories -->
    <section class="py-16 px-4 bg-white dark:bg-gray-800">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">หมวดหมู่ยอดนิยม</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="category in popularCategories"
            :key="category.name"
            class="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer group dark:from-gray-700 dark:to-gray-600 dark:border-gray-600"
          >
            <div class="flex items-center space-x-4 mb-4">
              <div class="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon :name="category.icon" class="text-white text-xl" />
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200">{{ category.name }}</h3>
                <p class="text-sm text-gray-500 dark:text-gray-400">{{ category.count }} สินค้า</p>
              </div>
            </div>
            <p class="text-gray-600 dark:text-gray-300">{{ category.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Products Section -->
    <section id="products" class="py-16 px-4">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">สินค้าแนะนำ</h2>
        
        <!-- Filters -->
        <div class="max-w-4xl mx-auto mb-8">
          <div class="flex flex-wrap gap-4 justify-center">
            <select
              v-model="selectedCategory"
              class="px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            >
              <option value="">หมวดหมู่ทั้งหมด</option>
              <option
                v-for="category in categories"
                :key="category.value"
                :value="category.value"
              >
                {{ category.label }}
              </option>
            </select>
            
            <select
              v-model="selectedPriceRange"
              class="px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            >
              <option value="">ราคาทั้งหมด</option>
              <option
                v-for="range in priceRanges"
                :key="range.value"
                :value="range.value"
              >
                {{ range.label }}
              </option>
            </select>
            
            <button
              @click="clearFilters"
              class="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
            >
              ล้างตัวกรอง
            </button>
          </div>
        </div>

                 <!-- Products Grid -->
         <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           <div
             v-for="product in filteredProducts"
             :key="product.id"
             class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 overflow-hidden group dark:bg-gray-800 dark:border-gray-700"
           >
             <!-- Product Image -->
              <div class="relative h-48 overflow-hidden">
               <NuxtImg
                 :src="product.thumbnail"
                 :alt="product.title"
                 class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                 format="webp"
                 :placeholder="10"
                 :sizes="'(max-width: 768px) 100vw, 33vw'"
                 :modifiers="{ fit: 'cover' }"
               />
               <div class="absolute top-4 left-4">
                 <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium dark:bg-blue-900 dark:text-blue-200">
                   {{ product.category }}
                 </span>
               </div>
               <div class="absolute top-4 right-4">
                 <div class="flex items-center space-x-1">
                    <Icon name="lucide:star" class="text-yellow-400 text-sm" />
                    <span class="text-sm font-medium text-white">{{ product.rating }}</span>
                 </div>
               </div>
             </div>
             
             <div class="p-6">
               <div class="flex items-center justify-between mb-4">
                 <span class="text-2xl font-bold text-gray-800 dark:text-gray-200">฿{{ product.price.toLocaleString() }}</span>
                 <span class="text-sm text-gray-500 dark:text-gray-400">{{ product.sold }} ขายแล้ว</span>
               </div>
               
               <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 group-hover:text-blue-600 transition-colors">
                 {{ product.title }}
               </h3>
               
               <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{{ product.description }}</p>
               
               <!-- Features -->
               <div class="mb-4">
                 <h4 class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">คุณสมบัติหลัก:</h4>
                 <ul class="space-y-1">
                   <li
                     v-for="feature in product.features.slice(0, 3)"
                     :key="feature"
                     class="text-xs text-gray-600 dark:text-gray-400 flex items-center"
                   >
                     <Icon name="lucide:check" class="text-green-500 mr-1 text-xs" />
                     {{ feature }}
                   </li>
                   <li v-if="product.features.length > 3" class="text-xs text-gray-500 dark:text-gray-500">
                     +{{ product.features.length - 3 }} คุณสมบัติเพิ่มเติม
                   </li>
                 </ul>
               </div>
               
               <!-- Technologies -->
               <div class="flex flex-wrap gap-2 mb-4">
                 <span
                   v-for="tech in product.technologies.slice(0, 3)"
                   :key="tech"
                   class="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs dark:bg-gray-700 dark:text-gray-300"
                 >
                   {{ tech }}
                 </span>
                 <span v-if="product.technologies.length > 3" class="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs dark:bg-gray-700 dark:text-gray-300">
                   +{{ product.technologies.length - 3 }}
                 </span>
               </div>
               
               <!-- Action Buttons -->
               <div class="flex items-center justify-between">
                 <NuxtLink 
                   :to="`/product/${product.id}`"
                   class="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all text-sm"
                 >
                   ดูรายละเอียด
                 </NuxtLink>
                 <button 
                   @click="openDemo(product.demo_url)"
                   class="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all text-sm dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                 >
                   Demo
                 </button>
               </div>
             </div>
           </div>
         </div>

        <!-- Load More Button -->
        <div v-if="hasMoreProducts" class="text-center mt-12">
          <button
            @click="loadMoreProducts"
            :disabled="loadingMore"
            class="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all disabled:opacity-50"
          >
            <span v-if="loadingMore">กำลังโหลด...</span>
            <span v-else>โหลดเพิ่มเติม</span>
          </button>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700">
      <div class="container mx-auto">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-200">เกี่ยวกับเรา</h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Salapao Dev เป็นทีมพัฒนาเว็บไซต์และแอปพลิเคชันที่มีประสบการณ์มากกว่า 5 ปี 
            เรามุ่งมั่นในการสร้าง Template และระบบที่มีคุณภาพสูง ใช้งานง่าย และทันสมัย
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="lucide:code" class="text-white text-2xl" />
              </div>
                             <h3 class="text-xl font-semibold mb-2 dark:text-gray-200">โค้ดคุณภาพสูง</h3>
               <p class="text-gray-600 dark:text-gray-300">เขียนด้วยเทคโนโลยีล่าสุด ปลอดภัยและมีประสิทธิภาพ</p>
             </div>
             
             <div class="text-center">
               <div class="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                 <Icon name="lucide:palette" class="text-white text-2xl" />
               </div>
               <h3 class="text-xl font-semibold mb-2 dark:text-gray-200">ดีไซน์สวยงาม</h3>
               <p class="text-gray-600 dark:text-gray-300">ออกแบบด้วย UI/UX ที่ทันสมัยและใช้งานง่าย</p>
             </div>
             
             <div class="text-center">
               <div class="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                 <Icon name="lucide:headphones" class="text-white text-2xl" />
               </div>
               <h3 class="text-xl font-semibold mb-2 dark:text-gray-200">บริการหลังการขาย</h3>
               <p class="text-gray-600 dark:text-gray-300">ให้คำปรึกษาและสนับสนุนตลอดการใช้งาน</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-16 px-4 bg-white dark:bg-gray-800">
      <div class="container mx-auto">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">ติดต่อเรา</h2>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                         <!-- Contact Form -->
             <div class="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl dark:from-gray-700 dark:to-gray-600">
               <h3 class="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">ส่งข้อความถึงเรา</h3>
              
              <form @submit.prevent="submitForm" class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                                         <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">ชื่อ-นามสกุล *</label>
                     <input
                       v-model="form.name"
                       type="text"
                       required
                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                     />
                  </div>
                                     <div>
                     <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">อีเมล *</label>
                     <input
                       v-model="form.email"
                       type="email"
                       required
                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                     />
                   </div>
                 </div>
                 
                 <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div>
                     <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">เบอร์โทรศัพท์</label>
                     <input
                       v-model="form.phone"
                       type="tel"
                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                     />
                   </div>
                   <div>
                     <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">เว็บไซต์</label>
                     <input
                       v-model="form.website"
                       type="url"
                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                     />
                   </div>
                 </div>
                 
                 <div>
                   <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">หัวข้อ *</label>
                   <input
                     v-model="form.subject"
                     type="text"
                     required
                     class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                   />
                 </div>
                 
                 <div>
                   <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">ข้อความ *</label>
                   <textarea
                     v-model="form.message"
                     rows="4"
                     required
                     class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none resize-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                   ></textarea>
                </div>
                
                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all disabled:opacity-50"
                >
                  <span v-if="isSubmitting">กำลังส่ง...</span>
                  <span v-else>ส่งข้อความ</span>
                </button>
              </form>
            </div>
            
                         <!-- Contact Info -->
             <div class="space-y-8">
               <div>
                 <h3 class="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">ข้อมูลติดต่อ</h3>
                <div class="space-y-4">
                  <div class="flex items-center space-x-4">
                    <div class="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <Icon name="lucide:mail" class="text-white" />
                    </div>
                                         <div>
                       <p class="font-medium text-gray-800 dark:text-gray-200">อีเมล</p>
                       <p class="text-gray-600 dark:text-gray-300">contact@salapao.dev</p>
                     </div>
                   </div>
                   
                   <div class="flex items-center space-x-4">
                     <div class="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                       <Icon name="lucide:phone" class="text-white" />
                     </div>
                     <div>
                       <p class="font-medium text-gray-800 dark:text-gray-200">เบอร์โทรศัพท์</p>
                       <p class="text-gray-600 dark:text-gray-300">+66 89-XXX-XXXX</p>
                     </div>
                   </div>
                   
                   <div class="flex items-center space-x-4">
                     <div class="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                       <Icon name="lucide:map-pin" class="text-white" />
                     </div>
                     <div>
                       <p class="font-medium text-gray-800 dark:text-gray-200">ที่อยู่</p>
                       <p class="text-gray-600 dark:text-gray-300">กรุงเทพมหานคร, ประเทศไทย</p>
                     </div>
                  </div>
                </div>
              </div>
              
                             <div>
                 <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">ติดตามเรา</h3>
                <div class="flex space-x-4">
                  <a href="#" class="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                    <Icon name="lucide:facebook" class="text-white" />
                  </a>
                  <a href="#" class="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                    <Icon name="lucide:twitter" class="text-white" />
                  </a>
                  <a href="#" class="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                    <Icon name="lucide:instagram" class="text-white" />
                  </a>
                  <a href="#" class="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                    <Icon name="lucide:github" class="text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 dark:bg-gray-950 text-white py-12 px-4">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div class="flex items-center space-x-2 mb-4">
              <div class="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Icon name="lucide:code" class="text-white text-xl" />
              </div>
              <h3 class="text-xl font-bold">Salapao Dev</h3>
            </div>
            <p class="text-gray-400 mb-4">
              พัฒนาเว็บไซต์และแอปพลิเคชันด้วยเทคโนโลยีล่าสุด 
              ให้บริการ Template และระบบคุณภาพสูง
            </p>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold mb-4">สินค้า</h4>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#" class="hover:text-white transition-colors">Forms</a></li>
              <li><a href="#" class="hover:text-white transition-colors">ระบบจองห้องพัก</a></li>
              <li><a href="#" class="hover:text-white transition-colors">ร้านค้าออนไลน์</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Presentations</a></li>
            </ul>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold mb-4">บริการ</h4>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#" class="hover:text-white transition-colors">พัฒนาเว็บไซต์</a></li>
              <li><a href="#" class="hover:text-white transition-colors">ออกแบบ UI/UX</a></li>
              <li><a href="#" class="hover:text-white transition-colors">ระบบจัดการ</a></li>
              <li><a href="#" class="hover:text-white transition-colors">ให้คำปรึกษา</a></li>
            </ul>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold mb-4">ติดต่อ</h4>
            <ul class="space-y-2 text-gray-400">
              <li>contact@salapao.dev</li>
              <li>+66 89-XXX-XXXX</li>
              <li>กรุงเทพมหานคร, ประเทศไทย</li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Salapao Dev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
  // Import data
  import { categories, popularCategories, priceRanges } from '../data'
  import { NuxtImg } from '#components'

// Use composables
const { productsData, hasMoreProducts, loadingMore, loadMoreProducts } = useProducts()
const { searchQuery, selectedCategory, selectedPriceRange, filteredProducts, filteredProductsCount, clearFilters } = useSearch(productsData)
const { isSubmitting, form, submitForm } = useContact()

// Functions
const openDemo = (demoUrl) => {
  if (demoUrl) {
    window.open(demoUrl, '_blank')
  }
}
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
