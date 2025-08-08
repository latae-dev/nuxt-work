<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const progress = ref(0)
let rafId = 0
let needsUpdate = false

const compute = () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop
  const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
  progress.value = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0
  needsUpdate = false
}

const schedule = () => {
  if (needsUpdate) return
  needsUpdate = true
  rafId = window.requestAnimationFrame(compute)
}

onMounted(() => {
  compute()
  window.addEventListener('scroll', schedule, { passive: true })
  window.addEventListener('resize', schedule)
})

onUnmounted(() => {
  window.cancelAnimationFrame(rafId)
  window.removeEventListener('scroll', schedule)
  window.removeEventListener('resize', schedule)
})
</script>

<template>
  <div class="fixed top-0 left-0 right-0 z-[60]">
    <UProgress :model-value="progress" color="primary" size="xs" :ui="{ track: 'h-1.5', rounded: 'rounded-none' }" />
  </div>
</template>