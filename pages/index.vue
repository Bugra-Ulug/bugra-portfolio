<template>
    <NuxtLayout />
    <div class="container" id="home">
      <Welcome></Welcome>
      <imgcom></imgcom>
    </div>
    <h1 class="newpage" id="about">ABOUT ME</h1>
    <About></About>
    <h1 class="newpage" id="proje">Proje's</h1>
    <Proje></Proje>
</template>

<style scoped>
.newpage{
  margin-top: 120px;
  margin-bottom: 120px;
  font-size: 100px;
  color: rgb(160, 18, 215);
  text-align: center;
  font-family: 'Times New Roman', Times, serif;
  letter-spacing: 15px;
}
</style>