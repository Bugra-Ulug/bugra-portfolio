import { ref } from 'vue'

export default function useCustomImage() {
  const imgSrc = ref('')

  const images = import.meta.glob('@/assets/img/*.jpg')

  const setImage = async (imageName) => {
    const imagePath = images[`/assets/img/${imageName}`]
    if (imagePath) {
      const module = await imagePath()
      imgSrc.value = module.default
    } else {
      console.error('Resim bulunamadı:', imageName)
    }
  }

  return {
    imgSrc,
    setImage
  }
}
