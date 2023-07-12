<template>

  <!-- Modal Content -->
  <div class="fixed z-10 inset-0 overflow-y-auto">
    <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div class="fixed inset-0 transition-opacity" aria-hidden="true">
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>

      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

      <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 class="text-lg leading-6 font-medium text-gray-900">ข้อกำหนด/เงื่อนไขในการให้บริการผ่านการจองคิวออนไลน์</h3>
              <div class="mt-2 text-left">
                <p class="text-sm text-gray-500">
                  1. สามารถจองคิวล่วงหน้าได้ 1 วันทำการ(ยกเว้นวันเสาร์-อาทิตย์ และวันหยุดนักขัตฤกษ์)
                </p>
                <p class="text-sm text-gray-500">
                  2. จองล่วงหน้าได้ 1 คิว/ 1 คน
                </p>
                <p class="text-sm text-gray-500">
                  3. ให้บริการ 1 คิว ต่อ 1 ราย
                </p>
                <p class="text-sm text-gray-500">
                  4. การเลื่อนคิวหรือยกเลิกคิวต้องทำก่อนวันที่ขอรับบริการล่วงหน้าย่างน้อย 3 วัน(หากทำการเลื่อนหรือยกเลิกแล้ว คุณจะไม่สามารถใช้คิวเดิมได้)
                </p>
                <p class="text-sm text-gray-500">
                  5. ผู้รับบริการต้องมาก่อนเวลาที่จองคิวไว้ 10 นาที หากมาสายผู้รับบริการจะสามารถรับบริการได้ตามเวลาคงเหลือตามจริงเท่านั้น
                </p>
                <p class="text-sm text-gray-500">
                  6. ขอสงวนสิทธิให้บริการที่ไม่เป็นไปตามข้อกำหนด ดังนี้
                    <br>
                    <span class="pl-5">6.1 ให้บริการเฉพาะบุคคลที่มีชื่อตรงตามที่จองมาเท่านั้น ไม่สามารถมอบอำนาจหรือให้ผู้อื่นมาใช้บริการแทนได้</span>

                    <br>
                    <span class="pl-5">6.2 กำหนดระยะเวลาใช้การบริการ คิวละ 60 นาที เป็นการประมาณระยะเวลาในเบื้องต้น อาจมีควาคลาดเคลื่อนได้บางกรณีหรือเหตุสุดวิสัย</span>

                    <br>
                    <span class="pl-5">6.3 เจ้าหน้าที่มีสิทธิที่จะพิจารณายกเลิกการให้บริการและให้ผู้รับบริการจองคิวใหม่ได้</span>
                </p>
                <p class="text-sm text-gray-500">
                  7. ในวันที่มาติดต่อรับบริการโปรดแสดงหลักฐานจองคิวเพื่อยืนยันตัวตนกับเจ้าหน้าที่
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button @click="closeModal" type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
            ปิด
          </button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  methods: {
    closeModal() {
      this.$emit('close-modal');
    }
  }
};
</script>
