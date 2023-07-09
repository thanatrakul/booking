<template>
  <div class="text-center mt-20">
    <h1>Thank You! {{ $route.query.customerName }}</h1>
    <p>Thank you for your booking.</p>
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
</template>
