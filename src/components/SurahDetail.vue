<template>
  <div>
    <div class="text-center my-4">
      <div class="card">
        <div class="card-body">
          {{ surahDetail.name.transliteration.en }}
        </div>
      </div>
    </div>
    <div class="container">
      <div>
        <div
          class="row"
          v-for="srh in surahDetail.verses"
          :key="srh.number.inSurah"
        >
          <div class="col-2 btn btn-success numberOfAyat">
            {{ srh.number.inSurah }}
          </div>
          <div class="col">
            <div class="arabic-text m-1">
              <small>{{ srh.text.arab }}</small>
            </div>
          </div>
          <div class="translate mt-1">
            <div class="ejaan m-1">
              <small>
                {{ srh.text.transliteration.en }}
              </small>
            </div>
            <div class="indonesia m-1">
              <small>
                {{ srh.translation.id }}
              </small>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      surahDetail: {},
    };
  },

  mounted() {
    axios
      .get("https://api.quran.sutanlab.id/surah/" + this.$route.params.id)
      .then((resp) => {
        if (resp.status === 200) {
          this.surahDetail = resp.data.data;
        } else {
          console.log("gagal fetch surah");
        }
      });
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700&display=swap");

.arabic-text {
  font-family: "Amiri", serif;
  text-align: right;
  font-size: 20pt;
}

.translate {
  text-align: justify;
}

.ejaan {
  font-style: italic;
}

.numberOfAyat {
  height: fit-content;
  width: fit-content;
}
</style>