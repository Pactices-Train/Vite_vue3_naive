<template>
  <footer id="contact-us" class="inline-flex w-full">
    <div class="bg-[#0B5985] w-full">
      <div class="mx-auto max-w-7xl px-4 pt-16 pb-8 2xl:px-0 lg:pt-18">
        <div class="xl:grid xl:grid-cols-2 xl:gap-8">
          <div>
            <div class="flex gap-4 text-lg text-white">
              <img
                src="../../assets/img/tmd.svg"
                class="w-auto h-16"
                alt=""
              />
              <div class="my-auto">
                <p>ระบบบริการสารสนเทศ</p>
                <p>อุตุนิยมวิทยาเพื่อการบริการ</p>
              </div>
            </div>
            <div class="text-white flex space-x-6 md:order-2 mt-7">
              <div>
                <h1 class="text-2xl font-semibold mb-4">สถานที่ติดต่อ</h1>
                <p>
                  กลุ่มบริการสารสนเทศอุตุนิยมวิทยา (บส.) ชั้น 1
                  อาคารศูนย์เทคโนโลยีสารสนเทศ
                </p>
                <p>
                  เลขที่ 4353 กรมอุตุนิยมวิทยา ถนนสุขุมวิท แขวงบางนา เขตบางนา
                  กรุงเทพฯ 10260
                </p>
                <p class="flex gap-2 mt-9">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 512 512"
                    width="24"
                    height="24"
                  >
                    <path
                      d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
                      fill="currentColor"
                    ></path></svg
                  >Tel : 0-2399-3031
                </p>
                <p class="flex gap-2 my-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-printer"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2"
                    ></path>
                    <path
                      d="M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4"
                    ></path>
                    <rect x="7" y="13" width="10" height="8" rx="2"></rect></svg
                  >Fax : 0-2399-1422
                </p>
                <p class="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-mail"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                    <polyline points="3 7 12 13 21 7"></polyline></svg
                  >Email : info_service@tmd.mail.go.th
                </p>
              </div>
            </div>
          </div>
          <div class="justify-end mt-9 xl:mt-0 justify-self-end">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.834876255841!2d100.6032634151323!3d13.667802602916078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a01106372d9f%3A0x557fa516d8be1f96!2z4LiB4Lij4Lih4Lit4Li44LiV4Li44LiZ4Li04Lii4Lih4Lin4Li04LiX4Lii4Liy!5e0!3m2!1sth!2sth!4v1664876705347!5m2!1sth!2sth"
              height="350"
              style="border: 0"
              class="shadow-2xl rounded-2xl w-full lg:w-[600px]"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div
          class="mt-12 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between lg:mt-16"
        >
          <p class="mt-8 text-base text-white md:mt-0">
            Copyright &copy; {{ new Date().getFullYear() }} Thai Meteorological
            Department. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup></script>
<style scoped></style>
