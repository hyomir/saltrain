<template>
  <div id="event_wrap">
    <v-container>
      <v-row>
        <v-col
          v-for="item in filteredAndSortedItems"
          :key="item.id"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <v-card @click="openDialog(item)">
            <v-img :src="getImageUrl(item.image)" height="200px"></v-img>
            <v-card-title>{{ item.title }}</v-card-title>
            <v-card-subtitle class="mb-3">{{ item.event_period }}</v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>

      <v-dialog v-model="dialog" class="dialog_box" max-width="60%">
        <v-card>
          <v-card-title class="d-flex align-center justify-between">
            <span>{{ selectedItem.title }}</span>
            <v-spacer></v-spacer>
            <v-btn icon @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-subtitle class="mb-2">이벤트 기간 : {{ selectedItem.event_period }}</v-card-subtitle>
          <v-card-text class="dialog_content">
            <v-img
              :src="getImageUrl2(selectedItem.image2)"
              class="dialog_image"
            ></v-img>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  data() {
    return {
      items: [
        { id: 1, image: 'event1.jpg', image2: 'event1.png', title: 'COOL VACATION', event_period: '2024-07-18 ~ 2024-07-31' },
        { id: 1, image: 'event1.jpg', image2: 'event1.png', title: '이벤트 제목 2', event_period: '이벤트 기간 2' },
        { id: 1, image: 'event1.jpg', image2: 'event1.png', title: '이벤트 제목 3', event_period: '이벤트 기간 3' },
      ],
      dialog: false,
      selectedItem: {},
    };
  },
  computed: {
    filteredAndSortedItems() {
      return this.items; 
    }
  },
  methods: {
    openDialog(item) {
      this.selectedItem = item;
      this.dialog = true;
    },
    getImageUrl(imageName) {
      return new URL(`../assets/event_images/${imageName}`, import.meta.url).href;
    },
    getImageUrl2(imageName) {
      return new URL(`../assets/event_read_images/${imageName}`, import.meta.url).href;
    }
  },
};
</script>

<style scoped>
#event_wrap{
  max-width: 1280px;
  margin: 0 auto;
}

.dialog_content {
  max-height: 90vh;
  overflow-y: auto;
}

.dialog_image {
  max-width: 100%;
  height: auto;
}
</style>
