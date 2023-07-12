<template>
  <div class="text-center mt-10">
    <div class="flex items-center justify-center mb-4">
      <img src="~/assets/logo.png" alt="Logo" class="h-10 w-10">
      <h1 class="text-2xl font-bold ml-2">ใบจองนัด</h1>
    </div>
    <hr class="border-gray-300 mx-20">
  </div>

  <!-- component -->
  <div class="block max-w-2xl p-6 bg-white border border-gray-200 rounded-lg shadow mx-auto mt-10">
      <h5 class="mb-4 text-xl tracking-tight text-center">
        ไม่พบการนัดหมายในระบบ
      </h5>
      <p class="font-normal mt-5 text-gray-700 text-center">
          หากต้องการนัดหมายอีกครั้งสามารถทำการนัดหมายได้ที่นี่
      </p>
      <p class="font-normal mt-5 text-gray-700 text-center">
          <nuxt-link
            to="/booking"
            class="bg-blue-500 text-white px-4 py-2 rounded mt-2"
          >
            ทำการนัดหมาย
          </nuxt-link>
      </p>
  </div>

  <div class="text-center mt-96">
    <nuxt-link
      :to="{
        path: '/tracking',
      }"
      class="bg-blue-500 text-white px-4 py-2 rounded"
    >
      กลับสู่หน้า Tracking Demo
    </nuxt-link>
  </div>

</template>
