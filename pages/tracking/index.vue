<template>
  <div class="flex justify-center items-center mt-20">
    <div class="p-4">
      <h1 class="text-2xl mb-4">ตัวอย่างหน้า Tracking แต่ละความเป็นไปได้</h1>
      <hr>

      <div class="grid grid-cols-3 gap-4 justify-center mt-10">
        <!-- Display Data 1 -->
        <div class="flex flex-col items-center justify-between">
          <div class="bg-blue-100 rounded-lg w-64 h-48 p-4">
            <h2 class="text-lg font-bold mb-2">แบบที่ 1</h2>
            <p class="text-gray-800">หน้า Tracking ที่ยังไม่เลยเวลานัด</p>
          </div>
          <nuxt-link
            to="/tracking/demo/1"
            class="bg-blue-500 text-white px-4 py-2 rounded mt-2"
          >
            Open
          </nuxt-link>
        </div>

        <!-- Display Data 2 -->
        <div class="flex flex-col items-center justify-between">
          <div class="bg-blue-100 rounded-lg w-64 h-48 p-4">
            <h2 class="text-lg font-bold mb-2">แบบที่ 2</h2>
            <p class="text-gray-800">หน้า Tracking ที่เลยเวลานัดแล้ว</p>
          </div>
          <nuxt-link
            to="/tracking/demo/2"
            class="bg-blue-500 text-white px-4 py-2 rounded mt-2"
          >
            Open
          </nuxt-link>
        </div>

        <!-- Display Data 3 -->
        <div class="flex flex-col items-center justify-between">
          <div class="bg-blue-100 rounded-lg w-64 h-48 p-4">
            <h2 class="text-lg font-bold mb-2">แบบที่ 3</h2>
            <p class="text-gray-800">หน้า Tracking ที่</p>
          </div>
          <nuxt-link
            to="/tracking/demo/3"
            class="bg-blue-500 text-white px-4 py-2 rounded mt-2"
          >
            Open
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bg-blue-100 {
  background-color: #E6F3FF;
}
</style>
