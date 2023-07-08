<template>
  <div class="text-center mt-10">
    <div class="flex items-center justify-center mb-4">
      <img src="~/assets/logo.png" alt="Logo" class="h-10 w-10">
      <h1 class="text-2xl font-bold ml-2">{{ companyName }}</h1>
    </div>
    <hr class="border-gray-300 mx-20">
  </div>
</template>

<script>
export default {
  name: 'LogoText',
  data() {
    return {
      companyName: 'คลินิกนมแม่ กลุ่มที่ 4'
    };
  }
}
</script>
