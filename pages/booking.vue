<template>

  <div class="text-center mt-10">
    <div class="flex items-center justify-center mb-4">
      <img src="~/assets/logo.png" alt="Logo" class="h-10 w-10">
      <h1 class="text-2xl font-bold ml-2">{{ companyName }}</h1>
    </div>
    <hr class="border-gray-300 mx-20">
  </div>

  <div class="mt-4 max-w-6xl mx-20 mb-20">
    <h1 class="text-2xl font-bold mb-4">ระบบจอง วันปรึกษาพยาบาล</h1>

    <!-- Day Booking -->
    <fieldset class="border border-gray-300 rounded p-4 mb-4">
      <legend class="text-gray-700 font-semibold mb-2 px-5">ระบุวันจอง</legend>

      <!-- เลือกวันที่ -->
      <div class="mb-4">
        <label for="datepicker" class="mr-2 text-lg font-bold">วันที่:</label>
        <input type="text" id="datepicker" v-model="bookingDate" class="px-2 py-1 border border-gray-300 rounded" readonly>
        จองได้ล่วงก่อน 1 วัน
      </div>

      <!-- เลือกเวลา -->
      <div class="mb-4" v-if="bookingDate">
        <label class="mr-2 text-lg font-bold">กรุณาเลือกช่วงเวลา:</label>

        <!-- มี Time Slot ให้เลือก -->
        <div class="flex justify-left" style="height: 150px;">
          <div
            v-for="time in timeSlots"
            :key="time.value"
            class="p-2 flex-shrink-0 relative"
            :class="{
              'bg-gray-200': !time.selectable || (selectedTimeSlot !== time.value && time.selectable),
              'bg-blue-500 text-white': selectedTimeSlot === time.value && time.selectable
            }"
            style="width: 150px; margin: 20px; cursor: pointer;"
            @click="selectTimeSlot(time.value)"
          >
            <div class="flex flex-col items-center justify-center h-full">
              <div class="w-full text-center">
                {{ time.value }}
              </div>
              <div
                v-if="!time.selectable"
                class="text-red-500 mt-auto px-2 py-1 rounded-lg"
              >
                เต็มแล้ว
              </div>
              <div
                v-else-if="selectedTimeSlot === time.value && time.selectable"
                class="text-black bg-white mt-auto px-2 py-1 rounded-lg"
              >
                เลือก
              </div>
            </div>
          </div>
        </div>
      </div>

    </fieldset>

    <!-- Customer Data -->
    <fieldset class="border border-gray-300 rounded p-4 mb-4">
      <legend class="text-gray-700 font-semibold mb-2 px-5">ข้อมูลผู้ใช้บริการ</legend>

      <!-- Customer Name -->
      <div class="mb-4">
        <label for="name" class="mr-2 text-lg font-bold">ชื่อผู้ใช้บริการ:</label>
        <input type="text" v-model="customerName" class="px-2 py-1 border border-gray-300 rounded">
      </div>

      <!-- Customer ID Number -->
      <div class="mb-4">
        <label for="id_number" class="mr-2 text-lg font-bold">บัตรประชาชน:</label>
        <input type="text" v-model="customerIdNumber" class="px-2 py-1 border border-gray-300 rounded">
      </div>

      <!-- Customer Phone Number -->
      <div class="mb-4">
        <label for="name" class="mr-2 text-lg font-bold">เบอร์โทรติดต่อ:</label>
        <input type="text" v-model="customerPhoneNumber" class="px-2 py-1 border border-gray-300 rounded">
      </div>

      <!-- Email -->
      <div class="mb-4">
        <label for="emaiol" class="mr-2 text-lg font-bold">Email:</label>
        <input type="email" v-model="customerEmail" class="px-2 py-1 border border-gray-300 rounded">
      </div>

       <!-- Customer Hospital -->
      <div class="mb-4">
        <label for="hmMember" class="mr-2 text-lg font-bold">ประเภทผู้ใช้บริการ:</label>
        <div class="flex flex-col">
          <label class="inline-flex items-center">
            <input type="radio" v-model="hnMember" value="registered_customer" class="form-radio text-blue-500">
            <span class="ml-2">เคยมีประวัติกับโรงพบาบาลแล้ว</span>
          </label>
          <label class="inline-flex items-center">
            <input type="radio" v-model="hnMember" value="new_customer" class="form-radio text-blue-500">
            <span class="ml-2">ยังไม่เคยได้รับบริการกับทางโรงพยาบ</span>
          </label>
        </div>
      </div>

      <!-- Consult Type -->
      <div class="mb-4">
        <label for="consult_type" class="mr-2 text-lg font-bold">รูปแบบการปรึกษา:</label>
        <div class="flex flex-col">
          <label class="inline-flex items-center">
            <input type="radio" v-model="consultTypeSelected" value="phone_call" class="form-radio text-blue-500">
            <span class="ml-2">Phone Call</span>
          </label>
          <label class="inline-flex items-center">
            <input type="radio" v-model="consultTypeSelected" value="vdo_call" class="form-radio text-blue-500">
            <span class="ml-2">VDO Call</span>
          </label>
          <label class="inline-flex items-center">
            <input type="radio" v-model="consultTypeSelected" value="onsite" class="form-radio text-blue-500">
            <span class="ml-2">On-Site</span>
          </label>
        </div>
      </div>

    </fieldset>

    <!-- Consult Issues -->
    <fieldset class="border border-gray-300 rounded p-4 mb-4">
      <legend class="text-gray-700 font-semibold mb-2 px-5">หัวข้อปรึกษา</legend>

      <!-- Customer Phone Number -->
      <div class="mb-4">
        <label class="block text-gray-700 font-semibold mb-2">Topics</label>
        <div class="flex flex-col">
          <label v-for="(topic, index) in consultTopics" :key="index" class="inline-flex items-center mb-2">
            <input type="checkbox" :name="'topic' + (index + 1)" :value="topic" v-model="consultTopicSelected" class="form-checkbox text-green-500">
            <span class="ml-2">{{ topic }}</span>
          </label>
        </div>
      </div>
      <div v-if="consultTopicSelected.includes(consultTopics[consultTopics.length - 1])" class="mb-4">
        <label for="otherTopic" class="block text-gray-700 font-semibold">Other Topic</label>
        <textarea id="otherTopic" v-model="otherTopic" class="w-full border border-gray-300 rounded px-3 py-2"></textarea>
      </div>
    </fieldset>

    <!-- บันทึกการจอง -->
    <div class="text-center">
      <div class="mb-4">
        <label>
          <input type="checkbox" v-model="consentChecked">
          I agree to the terms and conditions.
        </label>
        <span
          class="ml-2 text-blue-500 cursor-pointer"
          @click="openModal"
        >
          Read more
        </span>
      </div>
      <div>
        <nuxt-link
          :to="{
            path: '/success',
            query: {
              // Booking
              bookingDate: this.bookingDate,
              selectedTimeSlot: this.selectedTimeSlot,

              // Customer Data
              customerName: this.customerName,
              customerIdNumber: this.customerIdNumber,
              customerPhoneNumber: this.customerPhoneNumber,
              customerEmail: this.customerEmail,
              hnMember: this.hnMember,

              // Consult Type
              consultTopicSelected: this.consultTopicSelected,
              consultTypeSelected: this.consultTypeSelected
            }
          }"
          :disabled="!consentChecked"
          :class="{ 'opacity-50 cursor-not-allowed': !consentChecked }"
          class="bg-blue-500 text-white px-4 py-2 rounded"
        >
          บันทึกการจอง
        </nuxt-link>
      </div>
    </div>

  </div>

  <consent-modal v-if="showModal" @close-modal="closeModal" />
</template>

<script>
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.css';
import ConsentModal from '@/components/ConsentModal.vue';


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
  components: {
    ConsentModal
  },
  data() {
    return {
      companyName: 'คลินิกนมแม่ กลุ่มที่ 4',

      // modal
      modal: {
        title: 'BIG',
        message: 'BIG',
      },

      // Datepicker
      selectedDate: null,

      // Time Slots
      timeSlots: [
        { value: "07.00 - 08.00", selectable: true },
        { value: "08.00 - 09.00", selectable: false },
        { value: "09.00 - 10.00", selectable: true },
        { value: "10.00 - 11.00", selectable: true },
        { value: "11.00 - 12.00", selectable: false },
        { value: "13.00 - 14.00", selectable: true },
        { value: "14.00 - 15.00", selectable: true },
      ],

      // Consult Topics
      consultTopics: [
        'Topic 1',
        'Topic 2',
        'Topic 3',
        'อื่นๆ'
      ],
      otherTopic: '',

      // Consent
      consentChecked: false,
      showModal: false,

      // v-model
      // Booking
      bookingDate: '',
      selectedTimeSlot: '',

      // Customer Data
      customerName: '',
      customerIdNumber: '',
      customerPhoneNumber: '',
      customerEmail: '',
      hnMember: '',

      // Consult Type
      consultTopicSelected: [],
      consultTypeSelected: 'phone_call'
    };
  },
  mounted() {
    this.initDatepicker();
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    selectTimeSlot(time) {
      if (this.bookingDate) {
        const selectedSlot = this.timeSlots.find(slot => slot.value === time);
        if (selectedSlot.selectable) {
          this.selectedTimeSlot = time;
        }
      }
    },
    initDatepicker() {
      const today = new Date();
      const oneDaysAhead = new Date();
      oneDaysAhead.setDate(today.getDate() + 1);

      flatpickr("#datepicker", {
        locale: ThaiLocale, // Set the Thai locale data
        disable: [
          function(date) {
            // Disable dates that are not Monday to Friday
            return date.getDay() === 0 || date.getDay() === 6;
          }
        ],
        minDate: oneDaysAhead,
        onChange: (selectedDates, dateStr) => {
          const selectedDay = new Date(dateStr).getDay();
        }
      });
    }
  }
}
</script>
