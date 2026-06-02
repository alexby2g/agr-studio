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
        <a @click.prevent="scrollToSection('productos')">Productos</a>
        <a @click.prevent="scrollToSection('sobre')">Sobre AGR</a>
        <a @click.prevent="scrollToSection('tecnologias')">Tecnologías</a>
        <a @click.prevent="scrollToSection('contacto')">Contacto</a>
      </nav>

      <div class="nav-social">
        <q-btn round dense flat icon="public" :href="facebookUrl" target="_blank" aria-label="Facebook AGR Studio" />
        <q-btn round dense flat icon="photo_camera" :href="instagramUrl" target="_blank" aria-label="Instagram AGR Studio" />
        <q-btn round dense flat icon="chat" :href="whatsappUrl" target="_blank" aria-label="WhatsApp AGR Studio" />
      </div>
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
          Software para negocios reales.
        </p>

        <p class="description">
          AGR Studio desarrolla sistemas web, aplicaciones móviles y soluciones digitales
          listas para producción, pensadas para optimizar procesos y hacer crecer negocios.
        </p>

        <div class="hero-location">
          📍 Trinidad - Beni, Bolivia
        </div>

        <div class="actions">
          <q-btn
            label="Ver productos"
            icon="work"
            class="btn-primary"
            unelevated
            @click="scrollToSection('productos')"
          />

          <q-btn
            label="Solicitar sistema"
            icon="chat"
            class="btn-secondary"
            unelevated
            @click="scrollToSection('contacto')"
          />
        </div>

        <div class="hero-social">
          <a :href="facebookUrl" target="_blank">Facebook</a>
          <a :href="instagramUrl" target="_blank">Instagram</a>
          <a :href="whatsappUrl" target="_blank">WhatsApp</a>
          <a :href="emailUrl">Email</a>
        </div>
      </div>
    </section>

    <!-- STATS -->
    <section class="stats-section">
      <div class="stat-card">
        <strong>2+</strong>
        <span>Productos desarrollados</span>
      </div>

      <div class="stat-card">
        <strong>Web + Android</strong>
        <span>Soluciones multiplataforma</span>
      </div>

      <div class="stat-card">
        <strong>Producción</strong>
        <span>Sistemas operativos</span>
      </div>

      <div class="stat-card">
        <strong>100%</strong>
        <span>Desarrollo personalizado</span>
      </div>
    </section>

    <!-- SERVICIOS -->
    <section id="servicios" class="section">
      <div class="section-title">
        <span>Servicios</span>
        <h2>Soluciones digitales para empresas y emprendimientos</h2>
      </div>

      <div class="row q-col-gutter-lg">
        <div class="col-12 col-md-4">
          <q-card class="glass-card">
            <q-card-section>
              <q-icon name="language" size="46px" class="icon-blue" />
              <h3>Sistemas Web</h3>
              <p>
                Desarrollo de plataformas administrativas para gestionar clientes,
                ventas, pagos, reservas, reportes y procesos internos.
              </p>
            </q-card-section>
          </q-card>
        </div>

        <div class="col-12 col-md-4">
          <q-card class="glass-card">
            <q-card-section>
              <q-icon name="phone_android" size="46px" class="icon-purple" />
              <h3>Aplicaciones Android</h3>
              <p>
                Apps móviles conectadas a sistemas web, pensadas para negocios
                que necesitan operar desde celular y computadora.
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
                Digitalización de procesos, notificaciones, paneles administrativos,
                control de datos y herramientas para mejorar la productividad.
              </p>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </section>

    <!-- PRODUCTOS -->
    <section id="productos" class="section cases-section">
      <div class="section-title">
        <span>Productos AGR Studio</span>
        <h2>Soluciones desarrolladas para negocios reales</h2>
      </div>

      <!-- AUREA -->
      <q-card class="case-card case-aurea">
        <div class="case-grid">
          <div class="case-info">
            <div class="project-top">
              <div class="project-logo-wrap aurea-logo-wrap">
                <img src="/proyectos/aurea-logo.png" alt="Logo AUREA Beauty" />
              </div>

              <div>
                <div class="project-badge">Sistema web + App Android</div>
                <div class="status-badge online">● En producción</div>
              </div>
            </div>

            <h3>💄 AUREA Beauty Salon</h3>

            <p>
              Producto digital desarrollado para salones de belleza y centros estéticos.
              Permite administrar clientes, citas, servicios, pagos, calendario,
              historial, reportes y operación diaria desde una plataforma moderna.
            </p>

            <div class="project-meta">
              <span>🌐 Frontend: Vercel</span>
              <span>⚙️ Backend: Render</span>
              <span>🗄️ Base de datos: Neon PostgreSQL</span>
              <span>📱 App Android: Capacitor</span>
            </div>

            <div class="feature-list">
              <span>✔ Dashboard administrativo</span>
              <span>✔ Gestión de clientes</span>
              <span>✔ Control de citas</span>
              <span>✔ Registro de pagos</span>
              <span>✔ Calendario inteligente</span>
              <span>✔ Reportes y servicios</span>
            </div>

            <div class="chips">
              <q-chip>Laravel</q-chip>
              <q-chip>Quasar</q-chip>
              <q-chip>Vue 3</q-chip>
              <q-chip>PostgreSQL</q-chip>
              <q-chip>Capacitor</q-chip>
              <q-chip>Vercel</q-chip>
              <q-chip>Render</q-chip>
            </div>

            <div class="project-actions">
              <q-btn
                label="Ver Producto"
                icon="visibility"
                class="btn-primary"
                unelevated
                to="/proyecto/aurea"
              />

              <q-btn
                label="Ver sitio web"
                icon="open_in_new"
                class="btn-outline"
                unelevated
                href="https://glamur-frontend.vercel.app"
                target="_blank"
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
            <div class="project-top">
              <div class="project-logo-wrap carlafit-logo-wrap">
                <img src="/proyectos/carlafit-logo.png" alt="Logo CarlaFit" />
              </div>

              <div>
                <div class="project-badge green">Sistema administrativo</div>
                <div class="status-badge online">● Operativo</div>
              </div>
            </div>

            <h3>🏋️ CarlaFit</h3>

            <p>
              Producto digital desarrollado para gimnasios y centros fitness.
              Centraliza inscripciones, pagos, asistencias, grupos, servicios,
              mensajes y control administrativo desde una plataforma clara y funcional.
            </p>

            <div class="project-meta">
              <span>🧾 Pagos con QR</span>
              <span>👥 Control de grupos</span>
              <span>📲 Web + Android</span>
              <span>💬 Centro de mensajes</span>
            </div>

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

            <div class="project-actions">
              <q-btn
                label="Ver Producto"
                icon="visibility"
                class="btn-secondary"
                unelevated
                to="/proyecto/carlafit"
              />

              <q-btn
                label="Solicitar similar"
                icon="chat"
                class="btn-outline"
                unelevated
                :href="whatsappUrl"
                target="_blank"
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
        <h2>Software studio enfocado en soluciones reales</h2>
      </div>

      <div class="about-grid">
        <div class="about-card about-main">
          <div class="about-logo">
            <img src="/logo.png" alt="AGR Studio" />
          </div>

          <h3>AGR Studio</h3>

          <p>
            AGR Studio desarrolla software para empresas, emprendimientos y
            organizaciones que necesitan optimizar sus procesos mediante tecnología
            moderna, funcional y escalable.
          </p>

          <p>
            Nuestro enfoque combina análisis, diseño, desarrollo, despliegue y soporte
            para entregar sistemas listos para operar en negocios reales.
          </p>

          <div class="about-contact">
            <span>📍 Trinidad - Beni, Bolivia</span>
            <span>📧 alexby2g@gmail.com</span>
            <span>📱 +591 63285735</span>
          </div>

          <div class="about-social">
            <q-btn label="Facebook" icon="public" class="btn-outline" :href="facebookUrl" target="_blank" />
            <q-btn label="Instagram" icon="photo_camera" class="btn-outline" :href="instagramUrl" target="_blank" />
          </div>
        </div>

        <div class="about-card">
          <q-icon name="developer_mode" size="46px" class="icon-blue" />
          <h3>Desarrollo a medida</h3>
          <p>
            Creamos sistemas adaptados a la operación real de cada negocio, evitando
            soluciones genéricas y difíciles de usar.
          </p>
        </div>

        <div class="about-card">
          <q-icon name="cloud_done" size="46px" class="icon-purple" />
          <h3>Despliegue profesional</h3>
          <p>
            Publicamos sistemas en plataformas modernas para que puedan utilizarse
            desde internet, celular o computadora.
          </p>
        </div>

        <div class="about-card">
          <q-icon name="support_agent" size="46px" class="icon-cyan" />
          <h3>Soporte continuo</h3>
          <p>
            Acompañamos el crecimiento del sistema con ajustes, mejoras, mantenimiento
            y nuevas funcionalidades.
          </p>
        </div>
      </div>
    </section>

    <!-- POR QUE AGR -->
    <section class="section why-section">
      <div class="section-title">
        <span>AGR Studio</span>
        <h2>¿Por qué elegirnos?</h2>
      </div>

      <div class="row q-col-gutter-lg">
        <div class="col-12 col-md-3">
          <div class="why-card">
            <q-icon name="bolt" size="38px" />
            <h4>Ágil</h4>
            <p>Desarrollo enfocado en soluciones útiles, claras y funcionales.</p>
          </div>
        </div>

        <div class="col-12 col-md-3">
          <div class="why-card">
            <q-icon name="devices" size="38px" />
            <h4>Multiplataforma</h4>
            <p>Sistemas adaptados para web, escritorio, tablet y móvil.</p>
          </div>
        </div>

        <div class="col-12 col-md-3">
          <div class="why-card">
            <q-icon name="security" size="38px" />
            <h4>Seguro</h4>
            <p>Autenticación, bases de datos y estructura pensada para producción.</p>
          </div>
        </div>

        <div class="col-12 col-md-3">
          <div class="why-card">
            <q-icon name="rocket_launch" size="38px" />
            <h4>Listo para operar</h4>
            <p>Entrega, publicación y acompañamiento para uso real del sistema.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- TECNOLOGIAS -->
    <section id="tecnologias" class="section tech-section">
      <div class="section-title">
        <span>Stack tecnológico</span>
        <h2>Tecnologías utilizadas en nuestros productos</h2>
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
        <h2>¿Necesitas un sistema para tu negocio?</h2>

        <p>
          En AGR Studio diseñamos y desarrollamos soluciones digitales reales,
          listas para operar y crecer junto a tu negocio.
        </p>

        <div class="contact-info">
          <span>📍 Trinidad - Beni, Bolivia</span>
          <span>📧 alexby2g@gmail.com</span>
          <span>📱 +591 63285735</span>
        </div>

        <div class="contact-buttons">
          <q-btn
            label="WhatsApp"
            icon="chat"
            class="whatsapp-btn"
            unelevated
            :href="whatsappUrl"
            target="_blank"
          />

          <q-btn
            label="Instagram"
            icon="photo_camera"
            class="instagram-btn"
            unelevated
            :href="instagramUrl"
            target="_blank"
          />

          <q-btn
            label="Facebook"
            icon="public"
            class="facebook-btn"
            unelevated
            :href="facebookUrl"
            target="_blank"
          />

          <q-btn
            label="Email"
            icon="mail"
            class="email-btn"
            unelevated
            :href="emailUrl"
          />
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="footer">
      <div>
        <strong>AGR Studio</strong>
        <span>Software para negocios reales.</span>
      </div>

      <div class="footer-contact">
        <span>📍 Trinidad - Beni</span>
        <span>📧 alexby2g@gmail.com</span>
        <span>📱 +591 63285735</span>
      </div>

      <div class="footer-social">
        <a :href="facebookUrl" target="_blank">Facebook</a>
        <a :href="instagramUrl" target="_blank">Instagram</a>
        <a :href="whatsappUrl" target="_blank">WhatsApp</a>
      </div>
    </footer>

    <!-- WHATSAPP FLOTANTE -->
    <q-btn
      round
      icon="chat"
      class="floating-whatsapp"
      :href="whatsappUrl"
      target="_blank"
    />

  </q-page>
</template>

<script setup>
const facebookUrl = 'https://www.facebook.com/search/top?q=AGR%20Studio'
const instagramUrl = 'https://www.instagram.com/agrstudio.dev/'
const whatsappUrl = 'https://wa.me/59163285735?text=Hola%20AGR%20Studio,%20quiero%20cotizar%20un%20sistema%20para%20mi%20negocio.'
const emailUrl = 'mailto:alexby2g@gmail.com?subject=Solicitud%20de%20sistema%20AGR%20Studio&body=Hola%20AGR%20Studio,%20quiero%20informaci%C3%B3n%20sobre%20un%20sistema%20para%20mi%20negocio.'

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

.nav-social {
  display: flex;
  align-items: center;
  gap: 6px;
}

.nav-social .q-btn {
  color: #ffffff;
  background: rgba(255,255,255,0.06);
}

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

.actions,
.project-actions {
  display: flex;
  justify-content: flex-start;
  gap: 14px;
  margin-top: 28px;
  flex-wrap: wrap;
}

.hero .actions {
  justify-content: center;
  margin-top: 34px;
}

.hero-social {
  margin-top: 26px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
}

.hero-social a,
.footer-social a {
  color: #dfeaff;
  text-decoration: none;
  font-weight: 800;
  padding: 9px 13px;
  border-radius: 999px;
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.10);
  transition: .3s;
}

.hero-social a:hover,
.footer-social a:hover {
  color: #ffffff;
  background: rgba(0,170,255,0.18);
  transform: translateY(-2px);
}

.btn-primary,
.btn-secondary,
.btn-outline {
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

.btn-outline {
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.14);
}

.btn-primary:hover,
.btn-secondary:hover,
.btn-outline:hover {
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

.project-top {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 18px;
  flex-wrap: wrap;
}

.project-logo-wrap {
  width: 86px;
  height: 86px;
  border-radius: 24px;
  padding: 6px;
  background: rgba(255,255,255,0.09);
  border: 1px solid rgba(255,255,255,0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.project-logo-wrap img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.aurea-logo-wrap {
  background: rgba(233,30,99,0.14);
}

.carlafit-logo-wrap {
  width: 150px;
  background: rgba(138,43,226,0.12);
}

.project-badge,
.status-badge {
  display: inline-block;
  padding: 7px 14px;
  border-radius: 999px;
  font-weight: 800;
  margin: 0 8px 8px 0;
}

.project-badge {
  background: rgba(0,170,255,0.15);
  color: #70cfff;
}

.project-badge.green {
  background: rgba(0,200,120,0.16);
  color: #3cffaa;
}

.status-badge.online {
  background: rgba(0,200,120,0.16);
  color: #3cffaa;
}

.project-meta {
  display: grid;
  gap: 8px;
  margin: 18px 0;
}

.project-meta span {
  padding: 10px 12px;
  border-radius: 14px;
  background: rgba(255,255,255,0.07);
  color: #f1f1ff;
  font-weight: 700;
  font-size: .93rem;
}

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

.about-social {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 22px;
}

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

.contact-box {
  max-width: 950px;
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

.contact-buttons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 30px;
}

.whatsapp-btn,
.instagram-btn,
.facebook-btn,
.email-btn {
  color: white;
  font-weight: 900;
  border-radius: 16px;
  padding: 13px 24px;
}

.whatsapp-btn {
  background: linear-gradient(90deg, #00c853, #00e676);
  color: #061006;
}

.instagram-btn {
  background: linear-gradient(90deg, #833ab4, #fd1d1d, #fcb045);
}

.facebook-btn {
  background: linear-gradient(90deg, #1877f2, #0a58ca);
}

.email-btn {
  background: linear-gradient(90deg, #008cff, #8a2be2);
}

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

.footer-contact {
  text-align: center;
  gap: 5px;
  font-size: .9rem;
}

.footer-social {
  align-items: flex-end;
  display: flex !important;
  flex-direction: row !important;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: flex-end;
}

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

@media (max-width: 1200px) {
  .nav-links {
    gap: 16px;
  }

  .nav-links a {
    font-size: .92rem;
  }
}

@media (max-width: 1100px) {
  .nav-social {
    display: none;
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

  .footer div {
    align-items: center;
  }

  .footer-social {
    justify-content: center;
  }

  .project-actions {
    justify-content: center;
  }
}

@media (max-width: 620px) {
  .about-grid {
    grid-template-columns: 1fr;
  }

  .about-main {
    grid-column: auto;
  }

  .project-top {
    justify-content: center;
    text-align: center;
  }

  .case-info {
    text-align: center;
  }

  .project-meta {
    text-align: left;
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

  .carlafit-logo-wrap {
    width: 130px;
  }

  .contact-buttons .q-btn {
    width: 100%;
  }
}
</style>