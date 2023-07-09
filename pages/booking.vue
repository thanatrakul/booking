<template>

  <div class="text-center mt-10">
    <div class="flex items-center justify-center mb-4">
      <img src="~/assets/logo.png" alt="Logo" class="h-10 w-10">
      <h1 class="text-2xl font-bold ml-2">{{ companyName }}</h1>
    </div>
    <hr class="border-gray-300 mx-20">
  </div>

  <div class="mt-4 max-w-6xl mx-20">

    <h1 class="text-2xl font-bold mb-4">ระบบจอง วันปรึกษาพยาบาล</h1>
    <form>

      <!-- Day Booking -->
      <fieldset class="border border-gray-300 rounded p-4 mb-4">
        <legend class="text-gray-700 font-semibold mb-2 px-5">ระบุวันจอง</legend>

        <!-- เลือกวันที่ -->
        <div class="mb-4">
          <label for="datepicker" class="mr-2 text-lg font-bold">วันที่:</label>
          <input type="text" id="datepicker" class="px-2 py-1 border border-gray-300 rounded" readonly>
        </div>

        <!-- หลังจากเลือกวันที่แล้ว -->
        <div class="mb-4">
          <label class="mr-2 text-lg font-bold">กรุณาเลือกช่วงเวลา:</label>

          <!-- มี Time Slot ให้เลือก -->
          <div v-if="timeSlots.length > 0" class="flex justify-left" style="height: 150px;">
            <div v-for="day in timeSlots" :key="day" class="bg-gray-200 p-2 flex-shrink-0" style="width: 150px; margin: 20px;">
              <div class="flex items-center justify-center" style="height: 100%;">
                {{ day }}
              </div>
            </div>
          </div>

          <!-- เต็มแล้ว -->
          <div v-if="timeSlotEmpty" class="mt-4 mx-20">
            <label class="mr-2 text-lg font-bold">เต็ม</label>
          </div>

        </div>
      </fieldset>

      <!-- Customer Data -->
      <fieldset class="border border-gray-300 rounded p-4 mb-4">
        <legend class="text-gray-700 font-semibold mb-2 px-5">ข้อมูลผู้ใช้บริการ</legend>

        <!-- Customer Name -->
        <div class="mb-4">
          <label for="name" class="mr-2 text-lg font-bold">ชื่อผู้ใช้บริการ:</label>
          <input type="text" class="px-2 py-1 border border-gray-300 rounded">
        </div>

        <!-- Customer Phone Number -->
        <div class="mb-4">
          <label for="name" class="mr-2 text-lg font-bold">เบอร์โทรติดต่อ:</label>
          <input type="text" class="px-2 py-1 border border-gray-300 rounded">
        </div>

        <!-- Consult Type -->
        <div class="mb-4">
          <label for="consult_type" class="mr-2 text-lg font-bold">รูปแบบการปรึกษา:</label>
          <div class="flex flex-col">
            <label class="inline-flex items-center">
              <input type="radio" v-model="selectedOption" value="phone_call" class="form-radio text-blue-500">
              <span class="ml-2">Phone Call</span>
            </label>
            <label class="inline-flex items-center">
              <input type="radio" v-model="selectedOption" value="vdo_call" class="form-radio text-blue-500">
              <span class="ml-2">VDO Call</span>
            </label>
            <label class="inline-flex items-center">
              <input type="radio" v-model="selectedOption" value="onsite" class="form-radio text-blue-500">
              <span class="ml-2">On-Site</span>
            </label>
          </div>
        </div>

      </fieldset>

      <!-- บันทึกการจอง -->
      <div class="text-center">
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
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


// Available Time Slot
const availableTimeSlots = [
  "07.00 - 08.00",
  "08.00 - 09.00",
  "09.00 - 10.00",
  "10.00 - 11.00",
  "11.00 - 12.00",
  "13.00 - 14.00",
  "14.00 - 15.00"
]


export default {
  name: 'LogoText',
  data() {
    return {
      companyName: 'คลินิกนมแม่ กลุ่มที่ 4',
      selectedDate: null,
      timeSlots: [],
      timeSlotEmpty: false,
      selectedOption: 'phone_call'
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
        ],
        onChange: (selectedDates, dateStr) => {
          const selectedDay = new Date(dateStr).getDay();
          this.selectedDate = selectedDay % availableTimeSlots.length;

          // Clear slots
          this.timeSlots = [];

          if (this.selectedDate > 0) {
            this.randomTimeSlots();
          }

          // Check Empty
          this.timeSlotEmpty = false;
          if (this.timeSlots.length == 0) {
            this.timeSlotEmpty = true;
          }
        }
      });
    },
    randomTimeSlots() {
      const pickup = Math.floor(Math.random() * this.selectedDate) + 1;; // Number of elements to randomly pick
      const shuffledTimeSlots = this.shuffleArray(availableTimeSlots.slice());
      this.timeSlots = shuffledTimeSlots.slice(0, pickup);
      this.timeSlots.sort();
    },
    shuffleArray(array) {
      const shuffledArray = [...array];
      let currentIndex = shuffledArray.length;
      let temporaryValue, randomIndex;

      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = shuffledArray[currentIndex];
        shuffledArray[currentIndex] = shuffledArray[randomIndex];
        shuffledArray[randomIndex] = temporaryValue;
      }

      return shuffledArray;
    }
  }
}
</script>
