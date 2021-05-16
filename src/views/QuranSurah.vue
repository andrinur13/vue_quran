<template>
  <div>
    <navbar />
    <div class="container surah_detail_parent">
      <surah-detail />
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import SurahDetail from "../components/SurahDetail.vue";
export default {
  components: { Navbar, SurahDetail },
};
</script>
<style>
.surah_detail_parent {
  margin-top: 70px;
  margin-bottom: 60px;
}
</style>