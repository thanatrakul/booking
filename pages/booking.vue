<template>
  <div class="text-center mt-10">
    <div class="flex items-center justify-center mb-4">
      <img src="~/assets/logo.png" alt="Logo" class="h-10 w-10">
      <h1 class="text-2xl font-bold ml-2">{{ companyName }}</h1>
    </div>
    <hr class="border-gray-300 mx-20">
  </div>

  <div class="mt-4 mx-20">
    <form class="text-left">
      <h2 class="text-xl font-bold mb-4">ระบบจอง วันปรึกษพยาบาล</h2>
      <div class="flex items-center mx-20">
        <label for="datepicker" class="mr-2 text-lg font-bold">กรุณาเลือกวันที่:</label>
        <input type="text" id="datepicker" class="px-2 py-1 border border-gray-300 rounded" readonly>
      </div>
    </form>
  </div>
</template>

<script>
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.css';

// Thai locale data for flatpickr
const ThaiLocale = {
  weekdays: {
    shorthand: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'],
    longhand: [
      'อาทิตย์',
      'จันทร์',
      'อังคาร',
      'พุธ',
      'พฤหัสบดี',
      'ศุกร์',
      'เสาร์'
    ]
  },
  months: {
    shorthand: [
      'ม.ค.',
      'ก.พ.',
      'มี.ค.',
      'เม.ย.',
      'พ.ค.',
      'มิ.ย.',
      'ก.ค.',
      'ส.ค.',
      'ก.ย.',
      'ต.ค.',
      'พ.ย.',
      'ธ.ค.'
    ],
    longhand: [
      'มกราคม',
      'กุมภาพันธ์',
      'มีนาคม',
      'เมษายน',
      'พฤษภาคม',
      'มิถุนายน',
      'กรกฎาคม',
      'สิงหาคม',
      'กันยายน',
      'ตุลาคม',
      'พฤศจิกายน',
      'ธันวาคม'
    ]
  }
};

export default {
  name: 'LogoText',
  data() {
    return {
      companyName: 'คลินิกนมแม่ กลุ่มที่ 4'
    };
  },
  mounted() {
    this.initDatepicker();
  },
  methods: {
    initDatepicker() {
      flatpickr("#datepicker", {
        // Datepicker options and configurations
        // For example:
        // dateFormat: "Y-m-d",
        // minDate: "today",
        // ...
        locale: ThaiLocale, // Set the Thai locale data
        disable: [
          function(date) {
            // Disable dates that are not Monday to Friday
            return date.getDay() === 0 || date.getDay() === 6;
          }
        ]
      });
    }
  }
}
</script>
