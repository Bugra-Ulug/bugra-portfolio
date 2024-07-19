<template>
    <div class="container">
      <div class="con-left">
        <img :src="imgg" class="img-pp" />
      </div>
      <div class="con-right">
        <div class="section" :class="{ expanded: activeSection === 1 }" @click="toggleSection(1)">
          <h2>Okuduğum Okullar</h2>
          <p v-if="activeSection === 1">
            <ul>
                <li>Zeki ŞairOğlu Meslek Lisesi</li>
            </ul>
          </p>
        </div>
        <div class="section" :class="{ expanded: activeSection === 2 }" @click="toggleSection(2)">
          <h2>Üzerinde Çalıştığım Yazılım Dilleri ve Frameworkler</h2>
          <p v-if="activeSection === 2">
            <ul>
                <li><img src="@/assets/logo/csharp.png" alt="C# Logo" class="logo" />C#</li>
                <li><img src="@/assets/logo/python.png" alt="Python" class="logo" />Python</li>
                <li><img src="@/assets/logo/javascript.png" alt="javascript" class="logo" />Javascript</li>
                <li><img src="@/assets/logo/vue.png" alt="Vue" class="logo" />Vue.js</li>
                <li><img src="@/assets/logo/nuxt.png" alt="Nuxt" class="logo" />Nuxt.js</li>
                <li><img src="@/assets/logo/php.png" alt="Php" class="logo" />Php</li>
            </ul>
          </p>
        </div>
        <div class="section" :class="{ expanded: activeSection === 3 }" @click="toggleSection(3)">
          <h2>Hobilerim</h2>
          <p v-if="activeSection === 3">
            <ul><li>Kitap Okumak</li></ul>
            <ul><li>Film ve Diziler İzlemek</li></ul>
            <ul><li>Kendimi Geliştirmek</li></ul>
          </p>
        </div>
        <div class="section" :class="{ expanded: activeSection === 4 }" @click="toggleSection(4)">
          <h2>Geleceğim Hakkında Hedeflerim</h2>
          <p v-if="activeSection === 4">
            <ul>
                <li>> Kendimi Yazılım Konusunda Geliştirip İmza Atılmamış Projelere İsmimi Yazdırmak</li>
                <li>> Kendimi Hazır Hissetiğimde Oyun Programlamada İsmimi Duyurmak</li>
            </ul>
          </p>
        </div>
        <div class="section" :class="{ expanded: activeSection === 5 }" @click="toggleSection(5)">
          <h2>Section 5</h2>
          <p v-if="activeSection === 5">Detailed content for Section 5 goes here. Curabitur ac orci at nisi viverra interdum.</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import img from '@/assets/img/img4.jpg'
  
  const imgg = img
  const activeSection = ref(null)
  
  const toggleSection = (section) => {
    activeSection.value = activeSection.value === section ? null : section
  }
  </script>
  
  <style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    background: rgb(0,31,36);
    background: linear-gradient(90deg, rgba(0,31,36,1) 0%, rgba(108,9,121,1) 100%);
  }
  li{
    font-size: 18px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    content: ">";
  }
.logo {
    width: 40px;
    height: 40px;
    margin-right: 5px;
}
  .container {
    display: flex;
    justify-content: center;
    align-items: flex-start; /* Adjusted alignment */
    height: auto;
    background: rgb(0,31,36);
    background: linear-gradient(90deg, rgba(0,31,36,1) 0%, rgba(108,9,121,1) 100%);
    padding: 20px;
    box-sizing: border-box;
  }
  .con-left {
    flex: 0.2;
    max-width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    color: white;
  }
  .img-pp {
    width: 310px;
    border-radius: 30px;
    box-shadow: rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;
  }
  .con-right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 20px;
    color: white;
  }
  .section {
    flex: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    margin: 10px 0;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    transition: all 0.3s;
    overflow: hidden;
    transition: 1s;
  }
  .section h2 {
    margin-bottom: 10px;
    color: rgb(178, 63, 193);
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
  .section p {
    text-align: justify;
    margin-bottom: 20px;
  }
  .section.expanded {
    flex: 1;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
    margin: 10px;
  }
  </style>
  