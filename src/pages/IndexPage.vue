<template>
  <q-page class="page text-white">

    <!-- NAVBAR -->
    <header class="navbar">
      <a class="brand" @click.prevent="scrollToSection('inicio')">
        <img src="/logo.png" alt="AGR Logo" />
        <span>AGR</span>
      </a>

      <nav class="nav-links">
        <a @click.prevent="scrollToSection('inicio')">Inicio</a>
        <a @click.prevent="scrollToSection('servicios')">Servicios</a>
        <a @click.prevent="scrollToSection('casos')">Casos</a>
        <a @click.prevent="scrollToSection('sobre')">Sobre AGR</a>
        <a @click.prevent="scrollToSection('tecnologias')">Tecnologías</a>
        <a @click.prevent="scrollToSection('contacto')">Contacto</a>
      </nav>
    </header>

    <!-- HERO -->
    <section id="inicio" class="hero">
      <div class="hero-glow glow-one"></div>
      <div class="hero-glow glow-two"></div>

      <div class="hero-content">
        <div class="logo-frame">
          <img src="/logo.png" alt="AGR Logo" class="hero-logo" />
        </div>

        <h1>AGR</h1>

        <p class="subtitle">
          Transformamos ideas en sistemas.
        </p>

        <p class="description">
          Desarrollo de sistemas web, aplicaciones móviles y soluciones digitales
          para empresas, emprendedores y organizaciones.
        </p>

        <div class="hero-location">
          📍 Trinidad - Beni, Bolivia
        </div>

        <div class="actions">
          <q-btn
            label="Ver casos"
            icon="work"
            class="btn-primary"
            unelevated
            @click="scrollToSection('casos')"
          />

          <q-btn
            label="Contactar"
            icon="chat"
            class="btn-secondary"
            unelevated
            @click="scrollToSection('contacto')"
          />
        </div>
      </div>
    </section>

    <!-- STATS -->
    <section class="stats-section">
      <div class="stat-card">
        <strong>+2</strong>
        <span>Proyectos reales</span>
      </div>

      <div class="stat-card">
        <strong>Web + App</strong>
        <span>Soluciones completas</span>
      </div>

      <div class="stat-card">
        <strong>24/7</strong>
        <span>Presencia digital</span>
      </div>

      <div class="stat-card">
        <strong>100%</strong>
        <span>Personalizado</span>
      </div>
    </section>

    <!-- SERVICIOS -->
    <section id="servicios" class="section">
      <div class="section-title">
        <span>Servicios</span>
        <h2>Soluciones digitales para negocios reales</h2>
      </div>

      <div class="row q-col-gutter-lg">
        <div class="col-12 col-md-4">
          <q-card class="glass-card">
            <q-card-section>
              <q-icon name="language" size="46px" class="icon-blue" />
              <h3>Sistemas Web</h3>
              <p>
                Aplicaciones modernas para administrar clientes, ventas, pagos,
                citas, reportes y procesos internos.
              </p>
            </q-card-section>
          </q-card>
        </div>

        <div class="col-12 col-md-4">
          <q-card class="glass-card">
            <q-card-section>
              <q-icon name="phone_android" size="46px" class="icon-purple" />
              <h3>Apps Móviles</h3>
              <p>
                Aplicaciones Android conectadas a sistemas web, listas para
                negocios, clientes y usuarios reales.
              </p>
            </q-card-section>
          </q-card>
        </div>

        <div class="col-12 col-md-4">
          <q-card class="glass-card">
            <q-card-section>
              <q-icon name="auto_awesome" size="46px" class="icon-cyan" />
              <h3>Automatización</h3>
              <p>
                Notificaciones, paneles administrativos, reportes y herramientas
                para ahorrar tiempo y mejorar el control.
              </p>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </section>

    <!-- CASOS DE EXITO -->
    <section id="casos" class="section cases-section">
      <div class="section-title">
        <span>Casos de éxito</span>
        <h2>Proyectos reales desarrollados</h2>
      </div>

      <!-- AUREA -->
      <q-card class="case-card case-aurea">
        <div class="case-grid">
          <div class="case-info">
            <div class="project-badge">Sistema web + App Android</div>

            <h3>💄 AUREA Beauty Salon</h3>

            <p>
              Plataforma profesional para salones de belleza con gestión de clientes,
              citas, servicios, pagos, calendario, reportes, historial y aplicación móvil.
            </p>

            <div class="feature-list">
              <span>✔ Dashboard administrativo</span>
              <span>✔ Gestión de clientes</span>
              <span>✔ Control de citas</span>
              <span>✔ Registro de pagos</span>
              <span>✔ Calendario inteligente</span>
              <span>✔ Servicios más vendidos</span>
            </div>

            <div class="chips">
              <q-chip>Laravel</q-chip>
              <q-chip>Quasar</q-chip>
              <q-chip>PostgreSQL</q-chip>
              <q-chip>Capacitor</q-chip>
              <q-chip>Vercel</q-chip>
              <q-chip>Render</q-chip>
            </div>

            <div class="q-mt-lg">
              <q-btn
                label="Ver Proyecto"
                icon="visibility"
                class="btn-primary"
                unelevated
                to="/proyecto/aurea"
              />
            </div>
          </div>

          <div class="case-gallery">
            <img src="/proyectos/aurea-dashboard.png" alt="Dashboard AUREA" class="main-shot" />

            <div class="mini-shots">
              <img src="/proyectos/aurea-clientes.png" alt="Clientes AUREA" />
              <img src="/proyectos/aurea-citas.png" alt="Citas AUREA" />
            </div>
          </div>
        </div>
      </q-card>

      <!-- CARLAFIT -->
      <q-card class="case-card case-fit">
        <div class="case-grid reverse">
          <div class="case-gallery">
            <img src="/proyectos/carlafit-dashboard.png" alt="Dashboard CarlaFit" class="main-shot" />

            <div class="mini-shots">
              <img src="/proyectos/carlafit-pagos.png" alt="Pagos CarlaFit" />
              <img src="/proyectos/carlafit-inscripciones.png" alt="Inscripciones CarlaFit" />
            </div>
          </div>

          <div class="case-info">
            <div class="project-badge green">Sistema administrativo</div>

            <h3>🏋️ CarlaFit</h3>

            <p>
              Sistema para gimnasio y centro fitness con control de zumberas,
              pagos, inscripciones, asistencias, grupos, servicios y centro de mensajes.
            </p>

            <div class="feature-list">
              <span>✔ Dashboard de control</span>
              <span>✔ Inscripciones</span>
              <span>✔ Pagos QR</span>
              <span>✔ Asistencias</span>
              <span>✔ Grupos y servicios</span>
              <span>✔ Centro de mensajes</span>
            </div>

            <div class="chips">
              <q-chip>Laravel</q-chip>
              <q-chip>Quasar</q-chip>
              <q-chip>Vue</q-chip>
              <q-chip>MySQL</q-chip>
              <q-chip>Android</q-chip>
            </div>

            <div class="q-mt-lg">
              <q-btn
                label="Ver Proyecto"
                icon="visibility"
                class="btn-secondary"
                unelevated
                to="/proyecto/carlafit"
              />
            </div>
          </div>
        </div>
      </q-card>
    </section>

    <!-- SOBRE AGR -->
    <section id="sobre" class="section about-section">
      <div class="section-title">
        <span>Sobre AGR Studio</span>
        <h2>Desarrollo de sistemas para negocios que quieren crecer</h2>
      </div>

      <div class="about-grid">
        <div class="about-card about-main">
          <div class="about-logo">
            <img src="/logo.png" alt="AGR Studio" />
          </div>

          <h3>AGR Studio</h3>

          <p>
            AGR Studio es una marca enfocada en crear sistemas web, aplicaciones móviles
            y soluciones digitales personalizadas para empresas, emprendimientos y
            organizaciones que buscan modernizar sus procesos.
          </p>

          <p>
            Nuestro objetivo es transformar ideas en herramientas reales, funcionales
            y listas para utilizarse en negocios del mundo real.
          </p>

          <div class="about-contact">
            <span>📍 Trinidad - Beni, Bolivia</span>
            <span>📧 alexby2g@gmail.com</span>
            <span>📱 +591 63285735</span>
          </div>
        </div>

        <div class="about-card">
          <q-icon name="developer_mode" size="46px" class="icon-blue" />
          <h3>Desarrollo a medida</h3>
          <p>
            Cada sistema se adapta a las necesidades del negocio, evitando soluciones
            genéricas que no encajan con la realidad del cliente.
          </p>
        </div>

        <div class="about-card">
          <q-icon name="cloud_done" size="46px" class="icon-purple" />
          <h3>Publicación en internet</h3>
          <p>
            Implementamos sistemas listos para funcionar en la web, con acceso desde
            computadora, tablet o celular.
          </p>
        </div>

        <div class="about-card">
          <q-icon name="support_agent" size="46px" class="icon-cyan" />
          <h3>Acompañamiento</h3>
          <p>
            Acompañamos el proceso desde la idea inicial hasta la implementación,
            ajustes y mejoras del sistema.
          </p>
        </div>
      </div>
    </section>

    <!-- POR QUE AGR -->
    <section class="section why-section">
      <div class="section-title">
        <span>AGR</span>
        <h2>¿Por qué elegirnos?</h2>
      </div>

      <div class="row q-col-gutter-lg">
        <div class="col-12 col-md-3">
          <div class="why-card">
            <q-icon name="bolt" size="38px" />
            <h4>Rápido</h4>
            <p>Desarrollo ágil y enfocado en resultados.</p>
          </div>
        </div>

        <div class="col-12 col-md-3">
          <div class="why-card">
            <q-icon name="devices" size="38px" />
            <h4>Responsive</h4>
            <p>Diseños adaptados a PC, tablet y celular.</p>
          </div>
        </div>

        <div class="col-12 col-md-3">
          <div class="why-card">
            <q-icon name="security" size="38px" />
            <h4>Seguro</h4>
            <p>Sistemas con autenticación, roles y respaldo.</p>
          </div>
        </div>

        <div class="col-12 col-md-3">
          <div class="why-card">
            <q-icon name="rocket_launch" size="38px" />
            <h4>Publicado</h4>
            <p>Tu sistema listo en internet para tus clientes.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- TECNOLOGIAS -->
    <section id="tecnologias" class="section tech-section">
      <div class="section-title">
        <span>Stack</span>
        <h2>Tecnologías utilizadas</h2>
      </div>

      <div class="tech-grid">
        <div class="tech-item">Laravel</div>
        <div class="tech-item">Quasar</div>
        <div class="tech-item">Vue.js</div>
        <div class="tech-item">PostgreSQL</div>
        <div class="tech-item">MySQL</div>
        <div class="tech-item">Capacitor</div>
        <div class="tech-item">Android</div>
        <div class="tech-item">Render</div>
        <div class="tech-item">Vercel</div>
        <div class="tech-item">GitHub</div>
      </div>
    </section>

    <!-- CONTACTO -->
    <section id="contacto" class="section contact-section">
      <div class="contact-box">
        <h2>¿Tienes una idea?</h2>

        <p>
          En AGR Studio la convertimos en un sistema moderno, funcional y listo para crecer.
        </p>

        <div class="contact-info">
          <span>📍 Trinidad - Beni, Bolivia</span>
          <span>📧 alexby2g@gmail.com</span>
          <span>📱 +591 63285735</span>
        </div>

        <q-btn
          label="Contactar por WhatsApp"
          icon="chat"
          class="whatsapp-btn"
          unelevated
          href="https://wa.me/59163285735?text=Hola%20AGR%20Studio,%20estoy%20interesado%20en%20un%20sistema%20web%20para%20mi%20negocio.%20Me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n."
          target="_blank"
        />
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="footer">
      <div>
        <strong>AGR Studio</strong>
        <span>Transformamos ideas en sistemas.</span>
      </div>

      <div class="footer-contact">
        <span>📍 Trinidad - Beni</span>
        <span>📧 alexby2g@gmail.com</span>
        <span>📱 +591 63285735</span>
      </div>

      <p>© 2026 AGR Studio. Desarrollo web, apps móviles y soluciones digitales.</p>
    </footer>

    <!-- WHATSAPP FLOTANTE -->
    <q-btn
      round
      icon="chat"
      class="floating-whatsapp"
      href="https://wa.me/59163285735?text=Hola%20AGR%20Studio,%20estoy%20interesado%20en%20un%20sistema%20web%20para%20mi%20negocio.%20Me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n."
      target="_blank"
    />

  </q-page>
</template>

<script setup>
function scrollToSection(id) {
  const section = document.getElementById(id)

  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}
</script>

<style scoped>
.page {
  min-height: 100vh;
  background:
    radial-gradient(circle at 15% 8%, rgba(0, 132, 255, 0.30), transparent 28%),
    radial-gradient(circle at 85% 10%, rgba(138, 43, 226, 0.28), transparent 34%),
    radial-gradient(circle at 50% 55%, rgba(0, 255, 255, 0.05), transparent 40%),
    #07070c;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

/* NAVBAR */
.navbar {
  position: sticky;
  top: 0;
  z-index: 20;
  height: 76px;
  padding: 0 8%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(7, 7, 12, 0.82);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(255,255,255,0.08);
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 900;
  font-size: 1.4rem;
  letter-spacing: 4px;
  color: white;
  text-decoration: none;
  cursor: pointer;
}

.brand img {
  width: 42px;
  height: 42px;
  border-radius: 13px;
  object-fit: cover;
  box-shadow: 0 0 18px rgba(0, 170, 255, 0.30);
}

.nav-links {
  display: flex;
  gap: 24px;
}

.nav-links a {
  color: #d8d8d8;
  text-decoration: none;
  font-weight: 700;
  transition: 0.3s;
  cursor: pointer;
}

.nav-links a:hover {
  color: #00aaff;
}

/* HERO */
.hero {
  position: relative;
  min-height: calc(100vh - 76px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 70px 8%;
  overflow: hidden;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 900px;
  text-align: center;
}

.logo-frame {
  width: 155px;
  height: 155px;
  margin: 0 auto 24px;
  padding: 7px;
  border-radius: 36px;
  background: linear-gradient(135deg, rgba(0,170,255,.8), rgba(138,43,226,.8));
  box-shadow:
    0 0 30px rgba(0,170,255,.35),
    0 0 70px rgba(138,43,226,.25);
}

.hero-logo {
  width: 100%;
  height: 100%;
  border-radius: 30px;
  object-fit: cover;
  display: block;
}

.hero h1 {
  font-size: clamp(4rem, 11vw, 9rem);
  margin: 0;
  font-weight: 900;
  letter-spacing: 14px;
  background: linear-gradient(90deg, #00aaff, #ffffff, #9b30ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow:
    0 0 20px rgba(0,170,255,.5),
    0 0 40px rgba(0,170,255,.3),
    0 0 60px rgba(138,43,226,.3);
  animation: glow 3s ease-in-out infinite;
}

@keyframes glow {
  0% {
    filter: drop-shadow(0 0 5px rgba(0,170,255,.3));
  }

  50% {
    filter: drop-shadow(0 0 20px rgba(138,43,226,.5));
  }

  100% {
    filter: drop-shadow(0 0 5px rgba(0,170,255,.3));
  }
}

.subtitle {
  font-size: clamp(1.4rem, 3vw, 2.4rem);
  color: #b764ff;
  font-weight: 800;
  margin: 8px 0 18px;
}

.description {
  color: #cfcfe8;
  font-size: 1.2rem;
  line-height: 1.7;
  max-width: 760px;
  margin: auto;
}

.hero-location {
  display: inline-block;
  margin-top: 22px;
  padding: 9px 18px;
  border-radius: 999px;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.12);
  color: #e7e7f5;
  font-weight: 700;
}

.actions {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 34px;
  flex-wrap: wrap;
}

.btn-primary,
.btn-secondary {
  color: white;
  border-radius: 16px;
  padding: 11px 20px;
  font-weight: 800;
  transition: .3s;
}

.btn-primary {
  background: linear-gradient(90deg, #008cff, #005eff);
}

.btn-secondary {
  background: linear-gradient(90deg, #8a2be2, #bd35ff);
}

.btn-primary:hover,
.btn-secondary:hover {
  transform: translateY(-3px);
  filter: brightness(1.1);
}

.hero-glow {
  position: absolute;
  width: 420px;
  height: 420px;
  filter: blur(85px);
  opacity: 0.46;
  border-radius: 50%;
}

.glow-one {
  background: #008cff;
  left: -120px;
  top: 120px;
}

.glow-two {
  background: #8a2be2;
  right: -100px;
  bottom: 70px;
}

/* STATS */
.stats-section {
  width: 84%;
  margin: -35px auto 35px;
  position: relative;
  z-index: 3;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}

.stat-card {
  padding: 26px 18px;
  text-align: center;
  border-radius: 24px;
  background: rgba(255,255,255,0.075);
  border: 1px solid rgba(255,255,255,0.12);
  backdrop-filter: blur(14px);
  box-shadow: 0 18px 45px rgba(0,0,0,.25);
}

.stat-card strong {
  display: block;
  font-size: 2rem;
  color: #70cfff;
}

.stat-card span {
  color: #d9d9e8;
}

/* SECTIONS */
.section {
  padding: 90px 8%;
}

.section-title {
  text-align: center;
  margin-bottom: 52px;
}

.section-title span {
  color: #00aaff;
  font-weight: 900;
  letter-spacing: 4px;
  text-transform: uppercase;
}

.section-title h2 {
  font-size: clamp(2rem, 5vw, 3.4rem);
  margin: 10px 0 0;
  font-weight: 800;
}

.glass-card,
.project-card,
.case-card,
.about-card {
  border-radius: 28px;
  background: rgba(255,255,255,0.055);
  border: 1px solid rgba(255,255,255,0.1);
  backdrop-filter: blur(14px);
  color: white;
  box-shadow: 0 20px 50px rgba(0,0,0,0.28);
  transition: 0.35s;
}

.glass-card {
  min-height: 265px;
}

.glass-card:hover,
.project-card:hover,
.case-card:hover,
.about-card:hover {
  transform: translateY(-8px);
  border-color: rgba(0,170,255,0.45);
  box-shadow: 0 22px 60px rgba(0,170,255,.12);
}

.icon-blue {
  color: #008cff;
}

.icon-purple {
  color: #9b30ff;
}

.icon-cyan {
  color: #00e5ff;
}

.glass-card h3,
.project-card h3,
.case-info h3,
.about-card h3 {
  font-size: 1.8rem;
  margin: 18px 0 12px;
  font-weight: 800;
}

.glass-card p,
.project-card p,
.case-info p,
.about-card p {
  color: #c9c9d8;
  line-height: 1.7;
}

.project-badge {
  display: inline-block;
  padding: 7px 14px;
  border-radius: 999px;
  background: rgba(0,170,255,0.15);
  color: #70cfff;
  font-weight: 800;
  margin-bottom: 14px;
}

.project-badge.green {
  background: rgba(0,200,120,0.16);
  color: #3cffaa;
}

/* CASES */
.cases-section {
  background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.18));
}

.case-card {
  padding: 26px;
  margin-bottom: 46px;
  overflow: hidden;
}

.case-aurea {
  background:
    radial-gradient(circle at top left, rgba(233,30,99,0.28), transparent 35%),
    rgba(255,255,255,0.055);
}

.case-fit {
  background:
    radial-gradient(circle at top right, rgba(0,200,120,0.26), transparent 35%),
    rgba(255,255,255,0.055);
}

.case-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.25fr;
  gap: 34px;
  align-items: center;
}

.case-grid.reverse {
  grid-template-columns: 1.25fr 0.9fr;
}

.case-info {
  padding: 12px;
}

.case-info h3 {
  font-size: clamp(2rem, 4vw, 3rem);
}

.case-gallery {
  display: grid;
  gap: 16px;
}

.case-gallery img {
  width: 100%;
  display: block;
  border-radius: 22px;
  border: 1px solid rgba(255,255,255,0.13);
  object-fit: cover;
  box-shadow: 0 18px 45px rgba(0,0,0,.35);
}

.main-shot {
  height: 330px;
}

.mini-shots {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
}

.mini-shots img {
  height: 150px;
}

.feature-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 9px;
  margin: 20px 0 6px;
}

.feature-list span {
  color: #f1f1ff;
  font-weight: 700;
  font-size: .95rem;
}

.chips {
  margin-top: 18px;
}

.chips .q-chip {
  background: rgba(255,255,255,0.10);
  color: white;
}

/* ABOUT */
.about-section {
  background:
    radial-gradient(circle at 20% 20%, rgba(0,170,255,0.10), transparent 30%),
    radial-gradient(circle at 80% 80%, rgba(138,43,226,0.12), transparent 34%),
    rgba(255,255,255,0.025);
}

.about-grid {
  display: grid;
  grid-template-columns: 1.3fr 1fr 1fr;
  gap: 24px;
}

.about-card {
  padding: 32px;
}

.about-main {
  grid-row: span 2;
  background:
    radial-gradient(circle at top left, rgba(0,170,255,0.18), transparent 35%),
    radial-gradient(circle at bottom right, rgba(138,43,226,0.18), transparent 35%),
    rgba(255,255,255,0.065);
}

.about-logo {
  width: 88px;
  height: 88px;
  padding: 5px;
  border-radius: 24px;
  background: linear-gradient(135deg, rgba(0,170,255,.8), rgba(138,43,226,.8));
}

.about-logo img {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  object-fit: cover;
  display: block;
}

.about-contact {
  display: grid;
  gap: 10px;
  margin-top: 24px;
}

.about-contact span {
  padding: 12px 14px;
  border-radius: 16px;
  background: rgba(255,255,255,0.08);
  color: #f1f1ff;
  font-weight: 700;
}

/* WHY */
.why-section {
  background: rgba(255,255,255,0.025);
}

.why-card {
  min-height: 210px;
  padding: 30px 22px;
  border-radius: 26px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.10);
  text-align: center;
  transition: .3s;
}

.why-card:hover {
  transform: translateY(-7px);
  border-color: rgba(138,43,226,.45);
}

.why-card .q-icon {
  color: #70cfff;
}

.why-card h4 {
  margin: 16px 0 8px;
  font-size: 1.35rem;
}

.why-card p {
  color: #cfcfe0;
}

/* TECH */
.tech-section {
  background: rgba(255,255,255,0.03);
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 18px;
}

.tech-item {
  text-align: center;
  padding: 18px 12px;
  border-radius: 18px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.09);
  font-weight: 800;
  color: #e8e8ff;
  transition: .3s;
}

.tech-item:hover {
  transform: translateY(-5px);
  background: rgba(0,170,255,0.12);
  border-color: rgba(0,170,255,0.35);
}

/* CONTACT */
.contact-box {
  max-width: 900px;
  margin: auto;
  padding: 65px 28px;
  text-align: center;
  border-radius: 34px;
  background:
    radial-gradient(circle at top left, rgba(0,170,255,0.25), transparent 35%),
    radial-gradient(circle at bottom right, rgba(138,43,226,0.28), transparent 35%),
    rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12);
  box-shadow: 0 22px 70px rgba(0,0,0,.35);
}

.contact-box h2 {
  font-size: clamp(2rem, 5vw, 3.2rem);
  margin: 0 0 14px;
}

.contact-box p {
  color: #d8d8e8;
  font-size: 1.15rem;
}

.contact-info {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 24px;
}

.contact-info span {
  padding: 10px 15px;
  border-radius: 999px;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.10);
  color: #f1f1ff;
  font-weight: 700;
}

.whatsapp-btn {
  margin-top: 28px;
  background: linear-gradient(90deg, #00c853, #00e676);
  color: #061006;
  font-weight: 900;
  border-radius: 16px;
  padding: 13px 24px;
}

/* FOOTER */
.footer {
  padding: 34px 8%;
  border-top: 1px solid rgba(255,255,255,0.08);
  background: rgba(0,0,0,.28);
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 18px;
}

.footer div {
  display: flex;
  flex-direction: column;
}

.footer strong {
  font-size: 1.4rem;
  letter-spacing: 5px;
}

.footer span,
.footer p {
  color: #bdbdd0;
  margin: 0;
}

.footer p {
  text-align: right;
}

.footer-contact {
  text-align: center;
  gap: 5px;
  font-size: .9rem;
}

/* WHATSAPP FLOTANTE */
.floating-whatsapp {
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 30;
  width: 58px;
  height: 58px;
  background: linear-gradient(135deg, #00c853, #00e676);
  color: #061006;
  box-shadow: 0 0 24px rgba(0, 230, 118, .45);
}

/* RESPONSIVE */
@media (max-width: 1100px) {
  .nav-links {
    gap: 16px;
  }

  .nav-links a {
    font-size: .92rem;
  }

  .about-grid {
    grid-template-columns: 1fr 1fr;
  }

  .about-main {
    grid-column: span 2;
    grid-row: auto;
  }
}

@media (max-width: 1000px) {
  .case-grid,
  .case-grid.reverse {
    grid-template-columns: 1fr;
  }

  .case-grid.reverse .case-gallery {
    order: 2;
  }

  .case-grid.reverse .case-info {
    order: 1;
  }

  .main-shot {
    height: 260px;
  }
}

@media (max-width: 900px) {
  .navbar {
    padding: 0 5%;
  }

  .nav-links {
    display: none;
  }

  .hero {
    padding: 55px 6%;
  }

  .logo-frame {
    width: 135px;
    height: 135px;
  }

  .section {
    padding: 70px 6%;
  }

  .stats-section {
    width: 88%;
    grid-template-columns: repeat(2, 1fr);
  }

  .feature-list {
    grid-template-columns: 1fr;
  }

  .footer {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .footer p {
    text-align: center;
  }

  .footer div {
    align-items: center;
  }
}

@media (max-width: 620px) {
  .about-grid {
    grid-template-columns: 1fr;
  }

  .about-main {
    grid-column: auto;
  }
}

@media (max-width: 520px) {
  .hero h1 {
    letter-spacing: 8px;
  }

  .stats-section {
    grid-template-columns: 1fr;
  }

  .mini-shots {
    grid-template-columns: 1fr;
  }

  .mini-shots img {
    height: 180px;
  }

  .footer {
    text-align: center;
    justify-content: center;
  }
}
</style>