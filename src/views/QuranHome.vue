<template>
  <div>
    <navbar/>
    <div class="surah_home">
      <div class="container">
        <div class="card my-1" v-for="srh in surah" :key="srh.number" @click="gotoSurah(srh.number)">
          <div class="card-body">
            <div class="title">
              {{srh.name.transliteration.en}}
            </div>
            <div class="text">
              <small>{{srh.name.translation.id}}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios';
import Navbar from '../components/Navbar.vue';
export default {
  components: { Navbar },

  data() {
    return {
      surah: {}
    }
  },
  
  mounted() {
    axios.get('https://api.quran.sutanlab.id/surah').then(resp => {
      if(resp.status === 200) {
        this.surah = resp.data.data;
      }
    });
  },

  methods: {
    gotoSurah(id) {
      this.$router.push(`/surah/${id}`)
    }
  }
}
</script>

<style>
.surah_home {
  margin-top: 70px;
  margin-bottom: 60px;
}
</style>