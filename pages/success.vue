<template>
  <div class="text-center mt-10">
    <div class="flex items-center justify-center mb-4">
      <img src="~/assets/logo.png" alt="Logo" class="h-10 w-10">
      <h1 class="text-2xl font-bold ml-2">Thank You!</h1>
    </div>
    <hr class="border-gray-300 mx-20">
  </div>

  <div class="text-center mt-20">
    <table class="border-collapse border border-gray-300 mx-auto">
      <tbody>

        <tr>
          <td class="border border-gray-300 p-2 text-left w-1/3">จองวันที่</td>
          <td class="border border-gray-300 p-2 text-left w-1/3">{{ $route.query.bookingDate }}</td>
        </tr>

        <tr>
          <td class="border border-gray-300 p-2 text-left w-1/3">เวลา</td>
          <td class="border border-gray-300 p-2 text-left w-1/3">{{ $route.query.selectedTimeSlot }}</td>
        </tr>

        <tr>
          <td class="border border-gray-300 p-2 text-left w-1/3">ชื่อผู้รับบริการ</td>
          <td class="border border-gray-300 p-2 text-left w-1/3">{{ $route.query.customerName }}</td>
        </tr>

        <tr>
          <td class="border border-gray-300 p-2 text-left w-1/3">เบอร์ติดต่อ</td>
          <td class="border border-gray-300 p-2 text-left w-1/3">{{ $route.query.customerPhoneNumber }}</td>
        </tr>

        <tr>
          <td class="border border-gray-300 p-2 text-left w-1/3">Email</td>
          <td class="border border-gray-300 p-2 text-left w-1/3">{{ $route.query.customerEmail }}</td>
        </tr>

        <tr>
          <td class="border border-gray-300 p-2 text-left w-1/3">เรื่องที่ปรึกษา</td>
          <td class="border border-gray-300 p-2 text-left w-1/3">{{ $route.query.consultTopicSelected }}</td>
        </tr>

        <tr>
          <td class="border border-gray-300 p-2 text-left w-1/3">รูปการรับบริการ</td>
          <td class="border border-gray-300 p-2 text-left w-1/3">{{ $route.query.consultTypeSelected }}</td>
        </tr>
      </tbody>
    </table>
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
