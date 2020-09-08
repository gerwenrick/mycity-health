<template>
  <header>
    <section>
      <h3>MyCity - Healthcare</h3>
    </section>
    <section class="nav-section">
      <ul class="nav-ul">
        <li>
          <router-link to="/">
            <icon-base class="link-icon" icon-name="home">
              <icon-home />
            </icon-base>Home
          </router-link>
        </li>
        <li>
          <router-link to="/ziekenhuizen">
            <icon-base class="link-icon" icon-name="dashboard">
              <icon-dashboard />
            </icon-base>Ziekenhuizen
          </router-link>
        </li>
        <li>
          <router-link to="/situatie">
            <icon-base class="link-icon" icon-name="situatie">
              <icon-situatie />
            </icon-base>Situatie
          </router-link>
        </li>
        <li>
          <router-link to="/inbox">
            <icon-base class="link-icon" icon-name="inbox">
              <icon-inbox />
            </icon-base>Inbox
          </router-link>
        </li>
        <li>
          <router-link to="/kalender">
            <icon-base class="link-icon" icon-name="calendar">
              <icon-calendar />
            </icon-base>Kalender
          </router-link>
        </li>
        <li>
          <router-link to="/settings">
            <icon-base class="link-icon" icon-name="settings">
              <icon-settings />
            </icon-base>Settings
          </router-link>
        </li>
        <!-- <li id="logout">
          <a @click="logout()">
            <icon-base class="link-icon" icon-name="logout">
              <icon-logout />
            </icon-base>Logout
          </a>
        </li>-->
      </ul>
    </section>
    <section id="copyright">
      <small>2020 © Rick van Gerwen</small>
    </section>
  </header>
</template>

<script>
import IconBase from "../components/IconBase";
import IconHome from "../components/Icons/IconHome";
import IconCalendar from "../components/Icons/IconCalendar";
import IconDashboard from "../components/Icons/IconDashboard";
import IconInbox from "../components/Icons/IconInbox";
import IconSettings from "../components/Icons/IconSettings";
import IconSituatie from "../components/Icons/IconSituatie";
// import IconLogout from "../components/Icons/IconLogout";

export default {
  components: {
    IconBase,
    IconHome,
    IconCalendar,
    IconDashboard,
    IconInbox,
    IconSettings,
    IconSituatie
    // IconLogout
  },
  data() {
    return {
      IconBase,
      IconHome,
      IconCalendar,
      IconDashboard,
      IconInbox,
      IconSettings,
      IconSituatie
      // IconLogout
    };
  },
  methods: {
    // logout() {
    //   this.$store.dispatch("logout");
    // }
  }
};
</script>

<style lang="scss" scoped></style>
