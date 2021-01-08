<template>
  <div class="content">
    <h1>Inbox</h1>
    <div id="dashboard">
      <section>
        <div class="col1">
          <div class="profile">
            <h5>Urgentie melding aanmaken</h5>
            <div class="create-post">
              <form @submit.prevent>
                <div id="triageSelect">
                  <span>Triage beoordeling:</span>
                  <select v-model.trim="post.triage" id="selectedTriage">
                    <option disabled value="">Triage</option>
                    <option>U0</option>
                    <option>U1</option>
                    <option>U2</option>
                    <option>U3</option>
                    <option>U4</option>
                    <option>U5</option>
                  </select>
                </div>

                <label>Soort ongeval:</label>
                <textarea
                  v-model.trim="post.ongeval"
                  placeholder="Soort ongeval"
                ></textarea>
                <label> Extra informatie:</label>
                <textarea
                  v-model.trim="post.content"
                  placeholder="Extra informatie"
                ></textarea>
                <button
                  @click="createPost()"
                  :disabled="post.ongeval === '' || post.triage === ''"
                  class="button"
                >
                  Melding verzenden
                </button>
              </form>
            </div>
          </div>
        </div>
        <div class="col2">
          <div v-if="posts.length">
            <div v-for="post in posts" :key="post.id" class="post">
              <span>{{ post.createdOn | formatDate }}</span>
              <h5>{{ post.triage }} - {{ post.ongeval }}</h5>
              <p>{{ post.content | trimLength }}</p>
              <!-- <ul>
                <li>
                  <a @click="toggleCommentModal(post)"
                    >comments {{ post.comments }}</a
                  >
                </li>
                <li>
                  <a @click="likePost(post.id, post.likes)"
                    >likes {{ post.likes }}</a
                  >
                </li>
                <li>
                  <a @click="viewPost(post)">view full post</a>
                </li>
              </ul> -->
            </div>
          </div>
          <div v-else>
            <p class="no-results">There are currently no posts</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import moment from "moment";

export default {
  data() {
    return {
      post: {
        content: "",
        triage: "",
        ongeval: "",
      },
    };
  },
  computed: {
    ...mapState(["userProfile", "posts"]),
  },
  methods: {
    createPost() {
      this.$store.dispatch("createPost", {
        triage: this.post.triage,
        content: this.post.content,
        ongeval: this.post.ongeval,
      });
      this.post.triage = "";
      this.post.content = "";
      this.post.ongeval = "";
    },
  },
  filters: {
    formatDate(val) {
      if (!val) {
        return "-";
      }

      let date = val.toDate();
      return moment(date).format("MMMM Do YYYY, h:mm:ss");
    },
    trimLength(val) {
      if (val.length < 200) {
        return val;
      }
      return `${val.substring(0, 200)}...`;
    },
  },
};
</script>

<style lang="scss" scoped></style>
