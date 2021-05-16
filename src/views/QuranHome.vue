<template>
  <div>
    <navbar />
    <div class="surah_home">
      <div class="container">
        <!-- search box -->
        <div class="form-group my-4">
          <input
            type="email"
            class="form-control"
            id="searchSurah"
            placeholder="Cari surat di sini..."
            v-model="valueSearchSurat"
            @input="searchSurat()"
          />
        </div>
        <div v-if="valueSearchSurat === ''">
          <div
            class="card my-1 card-surah"
            v-for="srh in surah"
            :key="srh.number"
            @click="gotoSurah(srh.number)"
          >
            <div class="card-body">
              <div class="title">
                {{ srh.name.transliteration.en }}
              </div>
              <div class="text">
                <small>{{ srh.name.translation.id }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Navbar from "../components/Navbar.vue";
export default {
  components: { Navbar },

  data() {
    return {
      surah: {},
      valueSearchSurat: "",
    };
  },

  mounted() {
    axios.get("https://api.quran.sutanlab.id/surah").then((resp) => {
      if (resp.status === 200) {
        this.surah = resp.data.data;
      }
    });
  },

  methods: {
    gotoSurah(id) {
      this.$router.push(`/surah/${id}`);
    },
    searchSurat() {
      console.log(`isi value search ${this.valueSearchSurat}`);
    },
  },
};
</script>

<style>
.surah_home {
  margin-top: 70px;
  margin-bottom: 60px;
}

.card-surah:hover {
  cursor: pointer;
  background-color: rgb(223, 223, 223);
}
</style>