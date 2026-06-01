<template>
  <q-page class="detail-page text-white">
    <header class="topbar">
      <router-link to="/" class="brand">
        <img src="/logo.png" />
        <span>AGR</span>
      </router-link>

      <q-btn flat icon="arrow_back" label="Volver" to="/" class="back-btn" />
    </header>

    <section class="hero-detail fit-bg">
      <div class="content">
        <span class="badge green">Sistema administrativo</span>
        <h1>CarlaFit</h1>
        <p>
          Sistema de administración para gimnasios y centros fitness que automatiza
          inscripciones, pagos, asistencias, grupos y comunicación con usuarios.
        </p>
      </div>
    </section>

    <section class="section">
      <img src="/proyectos/carlafit-dashboard.png" class="main-img" />

      <div class="grid">
        <img src="/proyectos/carlafit-pagos.png" />
        <img src="/proyectos/carlafit-inscripciones.png" />
      </div>
    </section>

    <section class="section info-grid">
      <div class="box">
        <h2>Funciones principales</h2>
        <p>✔ Dashboard administrativo</p>
        <p>✔ Gestión de zumberas</p>
        <p>✔ Inscripciones</p>
        <p>✔ Control de pagos</p>
        <p>✔ Pagos mediante QR</p>
        <p>✔ Control de asistencias</p>
        <p>✔ Centro de mensajes</p>
      </div>

      <div class="box">
        <h2>Tecnologías</h2>
        <div class="chips">
          <q-chip>Laravel</q-chip>
          <q-chip>Quasar</q-chip>
          <q-chip>Vue 3</q-chip>
          <q-chip>MySQL</q-chip>
          <q-chip>Android</q-chip>
        </div>
      </div>
    </section>

    <section class="contact">
      <h2>¿Quieres un sistema parecido?</h2>
      <q-btn
        label="Contactar por WhatsApp"
        icon="chat"
        class="whatsapp-btn"
        href="https://wa.me/59163285735?text=Hola%20AGR,%20quiero%20un%20sistema%20parecido%20a%20CarlaFit."
        target="_blank"
      />
    </section>
  </q-page>
</template>

<script setup>
</script>

<style scoped>
.detail-page {
  min-height: 100vh;
  background: #07070c;
}

.topbar {
  height: 76px;
  padding: 0 8%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(7, 7, 12, 0.9);
  border-bottom: 1px solid rgba(255,255,255,.08);
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  color: white;
  text-decoration: none;
  font-weight: 900;
  letter-spacing: 4px;
}

.brand img {
  width: 42px;
  border-radius: 12px;
}

.back-btn {
  color: white;
}

.hero-detail {
  padding: 100px 8%;
  text-align: center;
}

.fit-bg {
  background:
    radial-gradient(circle at top left, rgba(0,200,120,.32), transparent 35%),
    radial-gradient(circle at bottom right, rgba(138,43,226,.25), transparent 35%);
}

.badge {
  background: rgba(0,170,255,.18);
  color: #70cfff;
  padding: 8px 18px;
  border-radius: 999px;
  font-weight: 800;
}

.badge.green {
  background: rgba(0,200,120,.16);
  color: #3cffaa;
}

h1 {
  font-size: clamp(3rem, 8vw, 6rem);
  margin: 24px 0 16px;
}

.hero-detail p {
  max-width: 850px;
  margin: auto;
  color: #d8d8e8;
  font-size: 1.25rem;
  line-height: 1.7;
}

.section {
  padding: 70px 8%;
}

.main-img,
.grid img {
  width: 100%;
  border-radius: 28px;
  border: 1px solid rgba(255,255,255,.12);
  box-shadow: 0 20px 60px rgba(0,0,0,.35);
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 24px;
}

.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
}

.box {
  padding: 34px;
  border-radius: 28px;
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.1);
}

.box h2 {
  margin-top: 0;
}

.box p {
  color: #e9e9f5;
  font-weight: 700;
}

.chips .q-chip {
  background: rgba(255,255,255,.1);
  color: white;
}

.contact {
  padding: 80px 8%;
  text-align: center;
}

.whatsapp-btn {
  margin-top: 24px;
  background: linear-gradient(90deg, #00c853, #00e676);
  color: #061006;
  font-weight: 900;
  border-radius: 16px;
  padding: 13px 24px;
}

@media (max-width: 800px) {
  .grid,
  .info-grid {
    grid-template-columns: 1fr;
  }
}
</style>