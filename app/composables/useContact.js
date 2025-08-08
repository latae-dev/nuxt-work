import { ref } from 'vue'
import { z } from 'zod'

export const useContact = () => {
  const isSubmitting = ref(false)

  // Contact Form Schema & State
  const contactSchema = z.object({
    name: z.string().min(2, 'กรุณากรอกชื่อ-นามสกุล'),
    email: z.string().email('กรุณากรอกอีเมลที่ถูกต้อง'),
    phone: z.string().optional(),
    website: z.string().optional(),
    subject: z.string().min(5, 'กรุณากรอกหัวข้อ'),
    message: z.string().min(10, 'กรุณากรอกข้อความอย่างน้อย 10 ตัวอักษร')
  })

  const form = ref({
    name: '',
    email: '',
    phone: '',
    website: '',
    subject: '',
    message: ''
  })

  // Methods
  const submitForm = async (_event) => {
    isSubmitting.value = true
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Show success notification
      const toast = useToast()
      toast.add({
        title: 'ส่งข้อความสำเร็จ!',
        description: 'ทีมงานจะติดต่อกลับภายใน 24 ชั่วโมง',
        icon: 'i-lucide-check-circle',
        color: 'green'
      })
      
      // Reset form
      form.value = {
        name: '',
        email: '',
        phone: '',
        website: '',
        subject: '',
        message: ''
      }
    } catch (_error) {
      const toast = useToast()
      toast.add({
        title: 'เกิดข้อผิดพลาด',
        description: 'กรุณาลองใหม่อีกครั้ง',
        icon: 'i-lucide-x-circle',
        color: 'red'
      })
    } finally {
      isSubmitting.value = false
    }
  }

  return {
    isSubmitting,
    contactSchema,
    form,
    submitForm
  }
} 