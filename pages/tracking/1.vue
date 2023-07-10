<template>
  <div class="text-center mt-20">
    <h1>Booking Date {{ $route.params.id }}</h1>
    <h2>Days Remaining: {{ calculateDaysRemaining() }}</h2>
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


<script>
export default {

  // http://localhost:3000/tracking?bookingDate=2023-07-11
  // http://localhost:3000/tracking?bookingID=1
  data() {
    return {
      customer: {
        bookingDate: '2023-07-11'
      }
    }
  },
  methods: {
    calculateDaysRemaining() {
      // Get the current date and the booking date from the query parameters
      const currentDate = new Date();
      const bookingDate = new Date(this.customer.bookingDate);

      // Calculate the difference in milliseconds between the two dates
      const timeDiff = bookingDate.getTime() - currentDate.getTime();

      // Convert the difference to days
      const daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24));

      return daysRemaining;
    },
  },
};
</script>
