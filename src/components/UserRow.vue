<template>
  <div id="userRow">
    <ul class="userBlock">
      <li>
        <div>
          <p>{{ userProfile.name }}</p>
          <icon-base class="link-icon" icon-name="user">
            <icon-user />
          </icon-base>
        </div>
      </li>
      <li>
        <div>
          <a @click="logout()">
            <p>Logout</p>
            <icon-base class="link-icon" icon-name="settings">
              <icon-logout />
            </icon-base>
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import IconBase from "../components/IconBase";
import IconUser from "../components/Icons/IconUser";
import IconLogout from "../components/Icons/IconLogout";

export default {
  components: {
    IconBase,
    IconUser,
    IconLogout
  },
  data() {
    return {
      IconBase,
      IconUser,
      IconLogout
    };
  },
  computed: {
    ...mapState(["userProfile"])
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>
