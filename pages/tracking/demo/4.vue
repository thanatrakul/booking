<template>
  <div class="text-center mt-10">
    <div class="flex items-center justify-center mb-4">
      <img src="~/assets/logo.png" alt="Logo" class="h-10 w-10">
      <h1 class="text-2xl font-bold ml-2">ใบจองนัด</h1>
    </div>
    <hr class="border-gray-300 mx-20">
  </div>

  <!-- component -->
  <div class="max-w-xl py-4 px-8 bg-white shadow-lg rounded-lg my-20 mx-auto">
    <div>
      <h2 class="text-gray-800 text-3xl font-semibold">{{ customer.customerName }}</h2>

      <table class="mx-auto mt-5 mb-5">
        <tbody>

          <tr>
            <td class="p-2 text-left font-bold w-1/3">จองวันที่</td>
            <td class="p-2 text-left w-1/3">{{ customer.bookingDate }}</td>
          </tr>

          <tr>
            <td class="p-2 text-left font-bold w-1/3">เวลา</td>
            <td class="p-2 text-left w-1/3">{{ customer.selectedTimeSlot }}</td>
          </tr>

          <tr>
            <td class="p-2 text-left font-bold w-1/3">เบอร์ติดต่อ</td>
            <td class="p-2 text-left w-1/3">{{ customer.customerPhoneNumber }}</td>
          </tr>

          <tr>
            <td class="p-2 text-left font-bold w-1/3">Email</td>
            <td class="p-2 text-left w-1/3">{{ customer.customerEmail }}</td>
          </tr>

          <tr>
            <td class="p-2 text-left font-bold w-1/3 align-top">เรื่องที่ปรึกษา</td>
            <td class="p-2 text-left w-1/3">
              <ul class="list-disc">
                <li
                  v-for="topic in customer.consultTopicSelected"
                  :key="topic"
                >
                  {{ topic }}
                </li>
              </ul>
          </td>
          </tr>

          <tr>
            <td class="p-2 text-left font-bold w-1/3">รูปการรับบริการ</td>
            <td class="p-2 text-left w-1/3">{{ customer.consultTypeSelected }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <hr class="border-gray-300 mx-20">
    <div class="text-center mt-10 mb-5 grap-4">
      <nuxt-link
        :to="{
          path: '/admin',
        }"
        class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
      >
        กลับสู่หน้า Admin
      </nuxt-link>
      <nuxt-link
        :to="{
          path: '/tracking',
        }"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
      >
        เปลี่ยนวันเวลานัดหมาย
      </nuxt-link>
      <nuxt-link
        :to="{
          path: '/tracking',
        }"
        class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
      >
        ยกเลิกการนัดหมาย
      </nuxt-link>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      customer: {
        bookingDate: "2023-07-11",
        selectedTimeSlot: "07.00 - 08.00",
        customerName: " พัชราภา ไชยเชื้อ",
        customerIdNumber: "1-4588-22402-16-7",
        customerPhoneNumber: "099-222-3434",
        customerEmail: "mohasum@mailinator.com",
        hnMember: "registered_customer",
        consultTopicSelected: [
          "ปัญหาด้านน้ำนม",
          "ทารกร้องกวน",
        ],
        consultTypeSelected: "ทางโทรศัทพ์"
      }
    }
  },
};
</script>
