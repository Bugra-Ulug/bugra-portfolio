<template>
    <div class="image-content">
      <img :src="imgSrc" alt="My Image" class="my-image" />
    </div>
    <div class="cards">
      <div class="card" @click="changeImage('img1.jpg')" :class="{ selected: selectedCard === 'img1.jpg' }">
        <h3>Fotoğraf 1</h3>
        <p>Tıklayarak Değiştiriniz.</p>
      </div>
      <div class="card" @click="changeImage('img2.jpg')" :class="{ selected: selectedCard === 'img2.jpg' }">
        <h3>Fotoğraf 2</h3>
        <p>Tıklayarak Değiştiriniz.</p>
      </div>
      <div class="card" @click="changeImage('img3.jpg')" :class="{ selected: selectedCard === 'img3.jpg' }">
        <h3>Fotoğraf 3</h3>
        <p>Tıklayarak Değiştiriniz.</p>
      </div>
      <div class="card" @click="changeImage('img4.jpg')" :class="{ selected: selectedCard === 'img4.jpg' }">
        <h3>Fotoğraf 4</h3>
        <p>Tıklayarak Değiştiriniz.</p>
      </div>
      <div class="card" @click="changeImage('img5.jpg')" :class="{ selected: selectedCard === 'img5.jpg' }">
        <h3>Fotoğraf 5</h3>
        <p>Tıklayarak Değiştiriniz.</p>
      </div>      
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useCustomImage from '@/composables/useCustomImage'

const { imgSrc, setImage } = useCustomImage()
const selectedCard = ref<string>('img3.jpg') // Başlangıç Resmi ve Seçili Kart

const initializeImage = async () => {
  await setImage(selectedCard.value)
}
initializeImage()

const changeImage = async (imageName: string) => {
  await setImage(imageName)
  selectedCard.value = imageName
}
</script>