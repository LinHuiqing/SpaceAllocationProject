<template>
    <div>
      <section class="hero is-dark is-bold">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Capstone Space Allocation Project
            </h1>
            <h2 class="subtitle">
              Map
            </h2>
          </div>
        </div>
      </section>
      <nav class="navbar is-light" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://github.com/LinHuiqing/SpaceAllocationProject">
            <img src="./assets/logo_transparent2.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="80" height="100">
          </a>
          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="false"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      </nav>
      <section>
        <div class="tile is-ancestor">
          <div class="tile is-vertical">
            <div class="tile">
              <div class="tile is-parent is-3">
                <article class="tile is-child notification is-dark">
                  <!-- <p class="title">Random Info?</p> -->
                  <!-- <p class="subtitle">Maybe Navigation</p> -->
                    <b-menu>
                      <b-menu-list label="Menu">
                          <b-menu-item icon="information-outline" label="Info"></b-menu-item>
                          <b-menu-item
                              icon="settings"
                              :active="isActive">
                              <template slot="label" slot-scope="props">
                                  Administrator
                                  <b-icon
                                      class="is-pulled-right"
                                      :icon="props.expanded ? 'menu-down' : 'menu-up'">
                                  </b-icon>
                              </template>
                              <b-menu-item icon="account" label="Users"></b-menu-item>
                              <b-menu-item icon="cellphone-link">
                                  <template slot="label">
                                      Devices
                                      <b-dropdown aria-role="list" class="is-pulled-right" position="is-bottom-left">
                                      <b-icon icon="dots-vertical" slot="trigger"></b-icon>
                                          <b-dropdown-item aria-role="listitem">Action</b-dropdown-item>
                                          <b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>
                                          <b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>
                                      </b-dropdown>
                                  </template>
                              </b-menu-item>
                              <b-menu-item icon="cash-multiple" label="Payments" disabled></b-menu-item>
                          </b-menu-item>
                          <b-menu-item icon="account" label="My Account">
                              <b-menu-item label="Account data"></b-menu-item>
                              <b-menu-item label="Addresses"></b-menu-item>
                          </b-menu-item>
                      </b-menu-list>
                      <b-menu-list>
                          <b-menu-item
                              label="Expo"
                              icon="link"
                              tag="router-link"
                              target="_blank"
                              to="/expo">
                          </b-menu-item>
                      </b-menu-list>
                      <b-menu-list label="Actions">
                          <b-menu-item label="Logout"></b-menu-item>
                      </b-menu-list>
                  </b-menu>
                  <!-- <figure class="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/640x480.png">
                  </figure> -->
                </article>
              </div>
              <div class="tile is-parent is-vertical">
                  <p class="title">Request for space</p>
                  <p class="subtitle">Use this form to request for space.</p>

                  <SizeSelectionRow></SizeSelectionRow>

                  <PowerAVRow></PowerAVRow>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer class="footer">
        <div class="content has-text-centered">
          <p>
            <strong>Capstone Space Allocation Project</strong> by <a href="https://github.com/LinHuiqing/SpaceAllocationProject">Cohort 3 Group 11</a>. The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
            is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
          </p>
        </div>
      </footer>
    </div>
</template>

<script>
import SizeSelectionRow from './components/space_form/SizeSelectionRow.vue';
import PowerAVRow from './components/space_form/PowerAVRow.vue';

export default {
  name: "SpaceForm",
  components: {
    SizeSelectionRow, PowerAVRow
  }
}
</script>
