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
            <td class="p-2 text-left font-bold w-1/3">บัตรประชาชน / Passport</td>
            <td class="p-2 text-left w-1/3">{{ customer.customerIdNumber }}</td>
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
    <div class="text-center mt-10 mb-5 gap-4 flex flex-wrap justify-center">
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
      <nuxt-link
        :to="{
          path: '/admin',
        }"
        class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
      >
        กลับสู่หน้า Admin
      </nuxt-link>
    </div>
  </div>

  <div v-if="histories.length"  class="max-w-xl py-4 px-8 bg-white shadow-lg rounded-lg my-20 mx-auto">
    <div>
      <h2 class="text-gray-800 text-3xl font-semibold">ประวัติการรักษา</h2>
      <hr class="border-gray-300">

      <div class="w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 mx-auto mt-5">
        <div
          v-for="history in histories"
          :key="index"
          class="shadow p-5 rounded-lg border-t-4 border-green-400 bg-white"
        >
          <p class="mt-4 text-2xl text-gray-700 font-medium">
            {{ history.date }}
          </p>

          <div class="mt-8">
            <ul class="grid grid-cols-1 gap-4">
              <li
                v-for="consult in history.consults"
                :key="consult"
                class="inline-flex items-center text-gray-600"
              >
                <svg class="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                </svg>

                {{ consult }}
              </li>
              <li class="inline-flex items-center text-gray-600">
                <svg class="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                </svg>

                {{ history.consultType }}
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>


<script>
export default {
  data() {
    return {
      customer: {
        bookingDate: "21/07/2566",
        selectedTimeSlot: "09:00 - 10:00",
        customerName: "สมหญิง มาตรง",
        customerIdNumber: "1-4588-22402-16-7",
        customerPhoneNumber: "099-222-3434",
        hnMember: "registered_customer",
        consultTopicSelected: [
          "ปัญหาด้านน้ำนม",
          "ทารกร้องกวน",
        ],
        consultTypeSelected: "ทางโทรศัทพ์"
      },
      histories: [
        {
          date: "14/07/2566 (10.00 - 11.00)",
          consults: [
            "คนไข้มีปัญหาด้านการให้นม แนะนำจัดท่าให้นม",
            "เต้านมคัดตึง แนะนำให้นวด ประคบ บีบระบายน้ำนม"
          ],
          consultType: "วีดีโอคอล"
        },
        {
          date: "7/07/2566 (14.00 - 15.00)",
          consults: [
            "คนไข้มีปัญหาเรื่องทารกดูดนมบ่อย ดูดไปหลับไป แนะนำจัดท่าอุ้ม เทคนิคการปลุกลูกให้ตื่นมากินนม",
            "มีปัญหาบอกว่าน้ำนมน้อย ดูแลเสริมความมั่นใจให้กับมารดา แนะนำให้การให้นมลูกบ่อยขึ้นและนานขึ้น การนวดกระตุ้น การบีบมือ/ปั๊มนมสม่ำเสมอ"
          ],
          consultType: "Walk-in"
        }
      ]
    }
  },
};
</script>
