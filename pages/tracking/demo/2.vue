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
        นัดหมายสำหรับวันที่ {{ customer.bookingDate }} เวลา {{ customer.selectedTimeSlot }}
      </h5>
      <hr class="border-gray-300 mx-20">

      <p class="font-normal text-2xl text-center mt-10 text-gray-700">
          คุณได้เลยวันนัดหมายแล้ว
      </p>
      <p class="font-normal text-lg mt-5 text-gray-700 text-center">
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
      class="bg-gray-500 text-white px-4 py-2 rounded"
    >
      กลับสู่หน้า Tracking Demo
    </nuxt-link>
  </div>

</template>


<script>
export default {
  data() {
    return {
      customer: {
        bookingDate: "10/07/2566",
        selectedTimeSlot: "07.00 - 08.00",
        customerName: "สายสมร มาเรื่อย",
      }
    }
  },
};
</script>
