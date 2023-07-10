<template>
  <div class="text-center mt-10">
    <div class="flex items-center justify-center mb-4">
      <img src="~/assets/logo.png" alt="Logo" class="h-10 w-10">
      <h1 class="text-2xl font-bold ml-2">Booking Date</h1>
    </div>
    <hr class="border-gray-300 mx-20">
  </div>

  <div class="grid grid-cols-3 gap-4 justify-center mt-10">
    <!-- Display Data 1 -->
    <div class="flex flex-col items-center justify-between">
      <div class="bg-blue-100 rounded-lg w-64 h-48 p-4">
        <p class="text-gray-800">เลยวันนัดไปแล้ว</p>
      </div>
    </div>
  </div>

  <div class="text-center mt-20">
    <nuxt-link
      :to="{
        path: '/booking',
      }"
      class="bg-blue-500 text-white px-4 py-2 rounded"
    >
      กลับสู่หน้าหลัก
    </nuxt-link>
  </div>

</template>
