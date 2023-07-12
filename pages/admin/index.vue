<template>

  <div class="text-center mt-10">
    <div class="flex items-center justify-center mb-4">
      <img src="~/assets/logo.png" alt="Logo" class="h-10 w-10">
      <h1 class="text-2xl font-bold ml-2">ข้อมูลการจองนัด</h1>
    </div>
    <hr class="border-gray-300 mx-20">
  </div>

  <div class="w-full md:w-2/3 shadow-lg p-5 rounded-lg bg-white border-t-4 border-green-400 mx-auto mt-5">
    <div class="relative">
      <div class="absolute flex items-center ml-2 h-full">
        <svg class="w-4 h-4 fill-current text-primary-gray-dark" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.8898 15.0493L11.8588 11.0182C11.7869 10.9463 11.6932 10.9088 11.5932 10.9088H11.2713C12.3431 9.74952 12.9994 8.20272 12.9994 6.49968C12.9994 2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.20272 12.9994 9.74952 12.3431 10.9088 11.2744V11.5932C10.9088 11.6932 10.9495 11.7869 11.0182 11.8588L15.0493 15.8898C15.1961 16.0367 15.4336 16.0367 15.5805 15.8898L15.8898 15.5805C16.0367 15.4336 16.0367 15.1961 15.8898 15.0493ZM6.49968 11.9994C3.45921 11.9994 0.999951 9.54016 0.999951 6.49968C0.999951 3.45921 3.45921 0.999951 6.49968 0.999951C9.54016 0.999951 11.9994 3.45921 11.9994 6.49968C11.9994 9.54016 9.54016 11.9994 6.49968 11.9994Z"></path>
        </svg>
      </div>

      <input type="text" placeholder="ค้นหา ชื่อผู้ใช้บริการ" class="px-8 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
    </div>

    <div class="flex items-center justify-between mt-4">
      <p class="font-medium">
      ค้นหาขั้นสูง
      </p>

      <button class="px-4 py-2 bg-gray-100 px-30 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md">
      ค้นหา
      </button>
    </div>

    <div>
      <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
        <select class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
          <option value="">ทุกรูปแบบการปรึกษา</option>
          <option value="for-rent">โทรศัพท์</option>
          <option value="for-sale">วิดิโอคอล</option>
          <option value="for-sale">Walk-in</option>
        </select>
      </div>
    </div>
  </div>

  <div class="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto mt-10">
    <div
      v-for="booking in bookings"
      :key="booking.id"
      class="shadow p-5 rounded-lg border-t-4 border-green-400 bg-white"
    >
      <p class="mt-4 text-3xl text-gray-700 font-medium">
        {{ booking.name }}
      </p>

      <div class="mt-8">
        <ul class="grid grid-cols-1 gap-4">
          <li class="inline-flex items-center text-gray-600">
            <svg class="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
            </svg>

            {{ booking.date }}
          </li>

          <li class="inline-flex items-center text-gray-600">
            <svg class="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
            </svg>

            {{ booking.time }}
          </li>

          <li class="inline-flex items-center text-gray-600">
            <svg class="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
            </svg>

            Phone Call
          </li>
        </ul>
      </div>

      <div class="mt-8">
        <NuxtLink to="/tracking/demo/4">
          <button class="bg-gray-400 hover:bg-gray-500 px-3 py-2 rounded-lg w-full text-white">
            ดูรายละเอียด
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      bookings: [
        {
          id: 1,
          name: "John Doe",
          date: "2023-07-10",
          time: "09:00 - 10:00"
        },
        {
          id: 2,
          name: "Jane Smith",
          date: "2023-07-11",
          time: "14:00 - 15:00"
        },
        {
          id: 3,
          name: "Jane Smith",
          date: "2023-07-11",
          time: "14:00 - 15:00"
        },
        {
          id: 4,
          name: "Jane Smith",
          date: "2023-07-11",
          time: "14:00 - 15:00"
        },
        {
          id: 2,
          name: "Jane Smith",
          date: "2023-07-11",
          time: "14:00 - 15:00"
        },
        {
          id: 2,
          name: "Jane Smith",
          date: "2023-07-11",
          time: "14:00 - 15:00"
        },
        {
          id: 2,
          name: "Jane Smith",
          date: "2023-07-11",
          time: "14:00 - 15:00"
        },
        {
          id: 2,
          name: "Jane Smith",
          date: "2023-07-11",
          time: "14:00 - 15:00"
        },
        // เพิ่มรายการจองเพิ่มเติมตรงนี้
      ]
    };
  }
};
</script>

<style>
.container {
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
}
.bg-blue-100 {
  background-color: #E0E7FF; /* เป็นสีฟ้าอ่อนที่คุณต้องการ */
}
</style>
