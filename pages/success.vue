<template>
  <div class="text-center mt-10">
    <div class="flex items-center justify-center mb-4">
      <img src="~/assets/logo.png" alt="Logo" class="h-10 w-10">
      <h1 class="text-2xl font-bold ml-2">จองนัดสำเร็จ</h1>
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
            <td class="p-2 text-left w-1/3">{{ bookingDate }}</td>
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
                <li v-if="customer.topicOther">
                  {{ customer.topicOther }}
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
    <div class="text-center text-blue-600 mt-10 mb-5 gap-4 flex flex-wrap justify-center">
      <p>ระบบจะทำการส่ง SMS เพื่อส่งลิ้งค์สำหรับตรวจสอบใบจองนัด</p>
    </div>
  </div>
</template>


<script>
import { format } from 'date-fns';

export default {
  data() {
    return {
      // customer: {
      //   bookingDate: "21/07/2566",
      //   selectedTimeSlot: "09:00 - 10:00",
      //   customerName: "สมหญิง มาตรง",
      //   customerIdNumber: "1-4588-22402-16-7",
      //   customerPhoneNumber: "099-222-3434",
      //   hnMember: "registered_customer",
      //   consultTopicSelected: [
      //     "ปัญหาด้านน้ำนม",
      //     "ทารกร้องกวน",
      //   ],
      //   consultTypeSelected: "ทางโทรศัทพ์"
      // }
      customer: {
        selectedTimeSlot: this.$route.query.selectedTimeSlot,
        customerName: this.$route.query.customerName,
        customerIdNumber: this.$route.query.customerIdNumber,
        customerPhoneNumber: this.$route.query.customerPhoneNumber,
        hnMember: this.$route.query.hnMember,
        consultTopicSelected: this.$route.query.topicListText.split(","),
        topicOther: this.$route.query.topicOther,
        consultTypeSelected: this.$route.query.consultTypeSelected
      }
    }
  },
  computed: {
    bookingDate() {
      const date = new Date(this.$route.query.bookingDate);
      return format(date, 'dd/MM/yyyy');
    },
  },
};
</script>
