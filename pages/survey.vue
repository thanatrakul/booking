<template>

  <div class="text-center mt-10">
    <div class="flex items-center justify-center mb-4">
      <img src="~/assets/logo.png" alt="Logo" class="h-10 w-10">
      <h1 class="text-2xl font-bold ml-2">{{ companyName }}</h1>
    </div>
    <hr class="border-gray-300 mx-20">
  </div>

  <div class="mt-4 leading-loose max-w-full mx-5 mb-5">

    <fieldset class="border border-gray-300 rounded p-4 mb-4">
      <legend class="text-gray-700 font-semibold mb-2 px-5">
        ท่านมีอาการเหล่านี้หรือไม่ (สามารถเลือกได้มากกว่า 1)
      </legend>

      <!-- Customer Phone Number -->
      <div class="mb-4">
        <div class="flex flex-col">
          <label v-for="(topic, index) in topics" :key="index" class="inline-flex items-center mb-2">
            <input type="checkbox" :name="topic.name" :value="topic.key" v-model="topicsSelected" @change="handleCheckboxChange(topic)" class="form-checkbox text-green-500">
            <span class="ml-2">{{ topic.name }}</span>
          </label>
        </div>
        <div class="flex flex-col">
            <label for="message" class="block mb-2 text-sm font-medium">ปัญหาอื่นๆ</label>
            <textarea id="message" v-model="topicOther" rows="4" class="block p-2.5 w-full text-sm rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="ระบุปัญหาที่พบ"></textarea>
        </div>
      </div>
    </fieldset>

    <div v-if="showMessageHotLine" class="bg-red-300 border border-red-400 text-blue-700 px-4 py-2 rounded mt-4">
        <ul class="list-disc leading-loose p-2">
          <li class="mt-2">ควรมาโรงพยาบาลภายใน 24 ชั่วโมง</li>
          <li class="mt-2">Hot Line: 088-990-9999</li>
        </ul>
    </div>

    <div v-if="showMessageAll" class="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-2 rounded mt-4">
      <ul class="list-disc leading-loose p-2">
        <li class="mt-2">แนะนำระบายน้ำนมให้เกลี้ยงเต้าทุกๆ 2-3 ชั่วโมง</li>
        <li class="mt-4">หากมีอาการเพิ่มเติม เช่น มีไข้ เต้านมปวดบวม แดง ร้อน แนะนำให้มาโรงพยาบาล ภายใน 24 ชั่วโมง</li>
        <li class="mt-4">
          หากต้องการคำปรึกษาเพิ่มเติม
          <NuxtLink
            :to="getBookingLink()"
            class="bg-blue-500 text-white px-4 py-2 rounded"
          >
            คลิกที่นี่
          </NuxtLink>
          (ระบบจองนัดออนไลน์)
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
export default {
  name: 'SurveyPage',
  data() {
    return {
      companyName: 'คลินิกนมแม่ กลุ่มที่ 4',

      topicsSelected: [],
      topicOther: "",
      showMessageHotLine: false, // เพิ่มข้อมูลเพื่อควบคุมการแสดงข้อความ
      showMessageAll: true, // เพิ่มข้อมูลเพื่อควบคุมการแสดงข้อความ

      topics: [
        {
          name: "ไข้",
          key: "1",
        },
        {
          name: "เต้านมบวม แดง ร้อน",
          key: "2"
        },
        {
          name: "คลำพบก้อนบริเวณเต้านม",
          key: "3"
        },
        {
          name: "เจ็บเต้านม",
          key: "4"
        },
        {
          name: "เวลาให้นมหรือปั๊มนมมีอาการเจ็บแสบบริเวณเต้านม หัวนม",
          key: "5"
        }
      ]
    };
  },
  methods: {
    handleCheckboxChange(topic) {

      this.showMessageHotLine = false;
      this.showMessageAll = true;

      if (
        this.topicsSelected.includes("1") &&
        this.topicsSelected.includes("2") &&
        this.topicsSelected.includes("3") &&
        this.topicsSelected.includes("4") &&
        this.topicsSelected.includes("5")
      ) {
        this.showMessageHotLine = true;
        this.showMessageAll = true;
      } else {
        if(
          this.topicsSelected.includes("1") &&
          this.topicsSelected.includes("2")
        ) {
          this.showMessageHotLine = true;
          this.showMessageAll = true;
        }
      }
    },
    getBookingLink() {

      const topicList = [];
      if (this.topicsSelected.includes("1")) {
        topicList.push("ไข้");
      }
      if (this.topicsSelected.includes("2")) {
        topicList.push("เต้านมบวม แดง ร้อน");
      }
      if (this.topicsSelected.includes("3")) {
        topicList.push("คลำพบก้อนบริเวณเต้านม");
      }
      if (this.topicsSelected.includes("4")) {
        topicList.push("เจ็บเต้านม");
      }
      if (this.topicsSelected.includes("5")) {
        topicList.push("เวลาให้นมหรือปั๊มนมมีอาการเจ็บแสบบริเวณเต้านม หัวนม");
      }
      const topicListText = topicList.toString();
      const topicOther = this.topicOther;

      return {
        path: '/booking',
        query: {
          topicListText,
          topicOther
        }
      };
    }
  }
}
</script>

<style scoped>
</style>
