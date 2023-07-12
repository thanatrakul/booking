<template>

  <div class="text-center mt-10">
    <div class="flex items-center justify-center mb-4">
      <img src="~/assets/logo.png" alt="Logo" class="h-10 w-10">
      <h1 class="text-2xl font-bold ml-2">{{ companyName }}</h1>
    </div>
    <hr class="border-gray-300 mx-20">
  </div>

  <div class="mt-4 max-w-full mx-20 mb-20">
    <h1 class="text-2xl font-bold mb-4">ระบบจองนัดปรึกษาพยาบาล</h1>

    <!-- Day Booking -->
    <fieldset class="border border-gray-300 rounded p-4 mb-4">
      <legend class="text-gray-700 font-semibold mb-2 px-5">ระบุวันจอง</legend>

      <!-- เลือกวันที่ -->
      <div class="mb-4" :class="{ 'input-error': formErrors.bookingDate }">
        <span class="text-red-500">*</span>
        <label for="datepicker" class="mr-2 text-lg font-bold">วันที่:</label>
        <input type="text" id="datepicker" v-model="bookingDate" class="px-2 py-1 border border-gray-300 rounded" readonly required>
        จองได้ล่วงหน้าก่อน 1 วัน
        <div v-if="formErrors.bookingDate" class="error-message">{{ formErrors.bookingDate }}</div>
      </div>

      <!-- เลือกเวลา -->
      <div class="mb-4" v-if="bookingDate">
        <label class="mr-2 text-lg font-bold">กรุณาเลือกช่วงเวลา:</label>

        <!-- มี Time Slot ให้เลือก -->
        <div class="flex justify-left" style="height: 150px;" :class="{ 'input-error': formErrors.selectedTimeSlot }">
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
        <div v-if="formErrors.selectedTimeSlot" class="error-message">{{ formErrors.selectedTimeSlot }}</div>

      </div>

    </fieldset>

    <!-- Customer Data -->
    <fieldset class="border border-gray-300 rounded p-4 mb-4">
      <legend class="text-gray-700 font-semibold mb-2 px-5">ข้อมูลผู้ใช้บริการ</legend>

      <!-- Customer Name -->
      <div class="mb-4" :class="{ 'input-error': formErrors.customerName }">
        <span class="text-red-500">*</span>
        <label for="name" class="mr-2 text-lg font-bold">ชื่อผู้ใช้บริการ:</label>
        <input type="text" v-model="customerName" class="px-2 py-1 border border-gray-300 rounded" required>
        <div v-if="formErrors.customerName" class="error-message">{{ formErrors.customerName }}</div>
      </div>

      <!-- Customer ID Number -->
      <div class="mb-4" :class="{ 'input-error': formErrors.customerIdNumber }">
        <span class="text-red-500">*</span>
        <label for="id_number" class="mr-2 text-lg font-bold">บัตรประชาชน:</label>
        <input type="text" v-model="customerIdNumber" class="px-2 py-1 border border-gray-300 rounded" required>
        <div v-if="formErrors.customerIdNumber" class="error-message">{{ formErrors.customerIdNumber }}</div>
      </div>

      <!-- Customer Phone Number -->
      <div class="mb-4" :class="{ 'input-error': formErrors.customerPhoneNumber }">
        <span class="text-red-500">*</span>
        <label for="name" class="mr-2 text-lg font-bold">เบอร์โทรติดต่อ:</label>
        <input type="text" v-model="customerPhoneNumber" class="px-2 py-1 border border-gray-300 rounded" required>
        <div v-if="formErrors.customerPhoneNumber" class="error-message">{{ formErrors.customerPhoneNumber }}</div>
      </div>

      <!-- Email -->
      <div class="mb-4">
        <label for="email" class="mr-2 text-lg font-bold">Email:</label>
        <input type="email" v-model="customerEmail" class="px-2 py-1 border border-gray-300 rounded">
      </div>

      <!-- Customer Hospital -->
      <div class="mb-4" :class="{ 'input-error': formErrors.hnMember }">
        <span class="text-red-500">*</span>
        <label for="hmMember" class="mr-2 text-lg font-bold">ประเภทผู้ใช้บริการ:</label>
        <div class="flex flex-col">
          <label class="inline-flex items-center">
            <input type="radio" v-model="hnMember" value="registered_customer" class="form-radio text-blue-500">
            <span class="ml-2">เคยมีประวัติกับโรงพบาบาลแล้ว</span>
          </label>
          <label class="inline-flex items-center">
            <input type="radio" v-model="hnMember" value="new_customer" class="form-radio text-blue-500">
            <span class="ml-2">ยังไม่เคยได้รับบริการกับทางโรงพยาบาล</span>
          </label>
        </div>
        <div v-if="formErrors.hnMember" class="error-message">{{ formErrors.hnMember }}</div>
      </div>

      <!-- Consult Type -->
      <div class="mb-4">
        <span class="text-red-500">*</span>
        <label for="consult_type" class="mr-2 text-lg font-bold">รูปแบบการปรึกษา:</label>
        <div class="flex flex-col">
          <label class="inline-flex items-center">
            <input type="radio" v-model="consultTypeSelected" value="phone_call" class="form-radio text-blue-500">
            <span class="ml-2">ทางโทรศัพท์</span>
          </label>
          <label class="inline-flex items-center">
            <input type="radio" v-model="consultTypeSelected" value="vdo_call" class="form-radio text-blue-500">
            <span class="ml-2">ทางวีดีโอคอล</span>
          </label>
          <label class="inline-flex items-center">
            <input type="radio" v-model="consultTypeSelected" value="onsite" class="form-radio text-blue-500">
            <span class="ml-2">Walk-in</span>
          </label>
        </div>
      </div>

    </fieldset>

    <!-- Consult Issues -->
    <fieldset class="border border-gray-300 rounded p-4 mb-4" :class="{ 'input-error': formErrors.consultTopicSelected }">
      <legend class="text-gray-700 font-semibold mb-2 px-5">ปัญหาที่พบ</legend>

      <!-- Customer Phone Number -->
      <div class="mb-4">
        <div class="flex flex-col">
          <label v-for="(topic, index) in consultTopics" :key="index" class="inline-flex items-center mb-2">
            <input type="checkbox" :name="'topic' + (index + 1)" :value="topic" v-model="consultTopicSelected" class="form-checkbox text-green-500">
            <span class="ml-2">{{ topic }}</span>
          </label>
        </div>
      </div>

      <!-- Other Topic -->
      <div v-if="consultTopicSelected.includes(consultTopics[consultTopics.length - 1])" class="mb-4" :class="{ 'input-error': formErrors.otherTopic }">
        <label for="otherTopic" class="block text-gray-700 font-semibold">ระบุปัญหา</label>
        <textarea id="otherTopic" v-model="otherTopic" class="w-full border border-gray-300 rounded px-3 py-2"></textarea>
        <div v-if="formErrors.otherTopic" class="error-message">{{ formErrors.otherTopic }}</div>
      </div>

      <div v-if="formErrors.consultTopicSelected" class="error-message">{{ formErrors.consultTopicSelected }}</div>
    </fieldset>

    <!-- Consent -->
    <div class="text-center" :class="{ 'input-error': formErrors.consentChecked }">
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
        <button
          @click="navigateToSuccess"
          :disabled="!consentChecked"
          :class="{ 'opacity-50 cursor-not-allowed': !consentChecked }"
          class="bg-blue-500 text-white px-4 py-2 rounded"
        >
          บันทึกการจอง
        </button>
        <div v-if="formErrors.consentChecked" class="error-message">{{ formErrors.consentChecked }}</div>
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
  name: 'BookingPage',
  components: {
    ConsentModal
  },
  data() {
    return {
      // เพิ่มตัวแปร disableSubmit
      disableSubmit: true,
      formErrors: {},

      companyName: 'คลินิกนมแม่ กลุ่มที่ 4',

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
        'ปัญหาด้านน้ำนม',
        'ปัญหาการให้นม',
        'ทารกร้องกวน',
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
  computed: {
    isFormValid() {
      // ตรวจสอบความถูกต้องของฟิลด์ทั้งหมด
      return (
        this.bookingDate &&
        this.selectedTimeSlot &&
        this.customerName &&
        this.customerIdNumber &&
        this.customerPhoneNumber &&
        this.customerEmail &&
        this.hnMember &&
        this.consultTopicSelected.length > 0 &&
        (this.consultTopicSelected.includes(this.consultTopics[this.consultTopics.length - 1]) ? this.otherTopic : true) &&
        this.consentChecked
      );
    }
  },
  mounted() {
    this.initDatepicker();
  },
  methods: {
    navigateToSuccess() {
      // ตรวจสอบความถูกต้องของฟอร์มก่อน
      if (this.isFormValid) {

        // Construct the query parameters
        const queryParams = {
          bookingDate: this.bookingDate,
          selectedTimeSlot: this.selectedTimeSlot,
          customerName: this.customerName,
          customerIdNumber: this.customerIdNumber,
          customerPhoneNumber: this.customerPhoneNumber,
          customerEmail: this.customerEmail,
          hnMember: this.hnMember,
          consultTopicSelected: this.consultTopicSelected,
          consultTypeSelected: this.consultTypeSelected
        };

        this.$router.push({
          path: '/success',
          query: queryParams
        });
      } else {
        // แสดงข้อความแจ้งเตือนว่าต้องกรอกข้อมูลให้ครบก่อน
        this.showFormErrors();
      }
    },
    showFormErrors() {
      // ตรวจสอบฟิลด์ที่ไม่ถูกรับข้อมูลที่จำเป็น
      this.formErrors = {};

      if (!this.bookingDate) {
        this.formErrors.bookingDate = 'กรุณาเลือกวันที่';
      }

      if (!this.selectedTimeSlot) {
        this.formErrors.selectedTimeSlot = 'กรุณาช่วงเวลา';
      }

      if (!this.customerName) {
        this.formErrors.customerName = 'กรุณากรอกชื่อผู้ใช้บริการ';
      }

      if (!this.customerIdNumber) {
        this.formErrors.customerIdNumber = 'กรุณากรอกบัตรประชาชน';
      }

      if (!this.customerPhoneNumber) {
        this.formErrors.customerPhoneNumber = 'กรุณากรอกเบอร์โทรติดต่อ';
      }

      if (!this.customerEmail) {
        this.formErrors.customerEmail = 'กรุณากรอกอีเมล';
      }

      if (!this.hnMember) {
        this.formErrors.hnMember = 'กรุณาเลือกประเภทผู้ใช้บริการ';
      }

      if (this.consultTopicSelected.length === 0) {
        this.formErrors.consultTopicSelected = 'กรุณาเลือกปัญหาที่พบ';
      }

      if (this.consultTopicSelected.includes(this.consultTopics[this.consultTopics.length - 1]) && !this.otherTopic) {
        this.formErrors.otherTopic = 'กรุณาระบุปัญหา';
      }

      if (!this.consentChecked) {
        this.formErrors.consentChecked = 'กรุณายอมรับเงื่อนไขและข้อตกลง';
      }
    },
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

<style scoped>
.required {
  color: #e3342f;
}
.error-message {
  color: #e3342f;
  font-size: 14px;
  margin-top: 4px;
}
.input-error input,
.input-error textarea {
  border-color: #e3342f;
}

.input-error .error-message {
  color: #e3342f;
  font-size: 14px;
  margin-top: 4px;
}

.cursor-not-allowed {
  cursor: not-allowed;
}
</style>
