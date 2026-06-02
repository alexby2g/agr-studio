<template>
  <q-page class="page text-white">

    <!-- FONDO PREMIUM -->
    <div class="animated-bg">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>

    <!-- NAVBAR -->
    <header class="navbar">
      <a class="brand" @click.prevent="scrollToSection('inicio')">
        <img src="/logo.png" alt="AGR Logo" />
        <span>AGR</span>
      </a>

      <nav class="nav-links">
        <a @click.prevent="scrollToSection('inicio')">Inicio</a>
        <a @click.prevent="scrollToSection('servicios')">Servicios</a>
        <a @click.prevent="scrollToSection('proceso')">Proceso</a>
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
    <section id="inicio" class="hero reveal-section">
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
            class="btn-primary shine-btn"
            unelevated
            @click="scrollToSection('productos')"
          />

          <q-btn
            label="Solicitar sistema"
            icon="chat"
            class="btn-secondary shine-btn"
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

    <!-- STATS ANIMADOS -->
    <section ref="statsSectionRef" class="stats-section reveal-section">
      <div class="stat-card premium-card" v-for="stat in stats" :key="stat.label">
        <strong>{{ stat.prefix }}{{ stat.display }}{{ stat.suffix }}</strong>
        <span>{{ stat.label }}</span>
      </div>
    </section>

    <!-- SERVICIOS -->
    <section id="servicios" class="section reveal-section">
      <div class="section-title">
        <span>Servicios</span>
        <h2>Soluciones digitales para empresas y emprendimientos</h2>
      </div>

      <div class="row q-col-gutter-lg">
        <div class="col-12 col-md-4">
          <q-card class="glass-card premium-card">
            <q-card-section>
              <q-icon name="language" size="46px" class="icon-blue floating-icon" />
              <h3>Sistemas Web</h3>
              <p>
                Desarrollo de plataformas administrativas para gestionar clientes,
                ventas, pagos, reservas, reportes y procesos internos.
              </p>
            </q-card-section>
          </q-card>
        </div>

        <div class="col-12 col-md-4">
          <q-card class="glass-card premium-card">
            <q-card-section>
              <q-icon name="phone_android" size="46px" class="icon-purple floating-icon" />
              <h3>Aplicaciones Android</h3>
              <p>
                Apps móviles conectadas a sistemas web, pensadas para negocios
                que necesitan operar desde celular y computadora.
              </p>
            </q-card-section>
          </q-card>
        </div>

        <div class="col-12 col-md-4">
          <q-card class="glass-card premium-card">
            <q-card-section>
              <q-icon name="auto_awesome" size="46px" class="icon-cyan floating-icon" />
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

    <!-- PROCESO DE TRABAJO -->
    <section id="proceso" class="section process-section reveal-section">
      <div class="section-title">
        <span>Proceso de trabajo</span>
        <h2>Cómo convertimos una idea en un sistema real</h2>
      </div>

      <div class="process-grid">
        <div class="process-card premium-card" v-for="item in processItems" :key="item.number">
          <div class="process-number">{{ item.number }}</div>
          <q-icon :name="item.icon" size="42px" :class="item.iconClass" class="floating-icon" />
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </section>

    <!-- PRODUCTOS -->
    <section id="productos" class="section cases-section reveal-section">
      <div class="section-title">
        <span>Productos AGR Studio</span>
        <h2>Soluciones desarrolladas para negocios reales</h2>
      </div>

      <!-- AUREA -->
      <q-card class="case-card case-aurea premium-card">
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
                class="btn-primary shine-btn"
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
            <div class="screenshot-frame main-shot" @click="openGallery('aurea', 0)">
              <img src="/proyectos/aurea-dashboard.png" alt="Dashboard AUREA" />
              <div class="image-overlay">
                <q-icon name="zoom_in" size="34px" />
                <span>Click para ampliar</span>
              </div>
            </div>

            <div class="mini-shots">
              <div class="screenshot-frame" @click="openGallery('aurea', 1)">
                <img src="/proyectos/aurea-clientes.png" alt="Clientes AUREA" />
                <div class="image-overlay">
                  <q-icon name="zoom_in" size="28px" />
                  <span>Ampliar</span>
                </div>
              </div>

              <div class="screenshot-frame" @click="openGallery('aurea', 2)">
                <img src="/proyectos/aurea-citas.png" alt="Citas AUREA" />
                <div class="image-overlay">
                  <q-icon name="zoom_in" size="28px" />
                  <span>Ampliar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </q-card>

      <!-- CARLAFIT -->
      <q-card class="case-card case-fit premium-card">
        <div class="case-grid reverse">
          <div class="case-gallery">
            <div class="screenshot-frame main-shot" @click="openGallery('carlafit', 0)">
              <img src="/proyectos/carlafit-dashboard.png" alt="Dashboard CarlaFit" />
              <div class="image-overlay">
                <q-icon name="zoom_in" size="34px" />
                <span>Click para ampliar</span>
              </div>
            </div>

            <div class="mini-shots">
              <div class="screenshot-frame" @click="openGallery('carlafit', 1)">
                <img src="/proyectos/carlafit-pagos.png" alt="Pagos CarlaFit" />
                <div class="image-overlay">
                  <q-icon name="zoom_in" size="28px" />
                  <span>Ampliar</span>
                </div>
              </div>

              <div class="screenshot-frame" @click="openGallery('carlafit', 2)">
                <img src="/proyectos/carlafit-inscripciones.png" alt="Inscripciones CarlaFit" />
                <div class="image-overlay">
                  <q-icon name="zoom_in" size="28px" />
                  <span>Ampliar</span>
                </div>
              </div>
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
                class="btn-secondary shine-btn"
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
    <section id="sobre" class="section about-section reveal-section">
      <div class="section-title">
        <span>Sobre AGR Studio</span>
        <h2>Software studio enfocado en soluciones reales</h2>
      </div>

      <div class="about-grid">
        <div class="about-card about-main premium-card">
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

        <div class="about-card premium-card">
          <q-icon name="developer_mode" size="46px" class="icon-blue floating-icon" />
          <h3>Desarrollo a medida</h3>
          <p>
            Creamos sistemas adaptados a la operación real de cada negocio, evitando
            soluciones genéricas y difíciles de usar.
          </p>
        </div>

        <div class="about-card premium-card">
          <q-icon name="cloud_done" size="46px" class="icon-purple floating-icon" />
          <h3>Despliegue profesional</h3>
          <p>
            Publicamos sistemas en plataformas modernas para que puedan utilizarse
            desde internet, celular o computadora.
          </p>
        </div>

        <div class="about-card premium-card">
          <q-icon name="support_agent" size="46px" class="icon-cyan floating-icon" />
          <h3>Soporte continuo</h3>
          <p>
            Acompañamos el crecimiento del sistema con ajustes, mejoras, mantenimiento
            y nuevas funcionalidades.
          </p>
        </div>
      </div>
    </section>

    <!-- POR QUE AGR -->
    <section class="section why-section reveal-section">
      <div class="section-title">
        <span>AGR Studio</span>
        <h2>¿Por qué elegirnos?</h2>
      </div>

      <div class="row q-col-gutter-lg">
        <div class="col-12 col-md-3">
          <div class="why-card premium-card">
            <q-icon name="bolt" size="38px" />
            <h4>Ágil</h4>
            <p>Desarrollo enfocado en soluciones útiles, claras y funcionales.</p>
          </div>
        </div>

        <div class="col-12 col-md-3">
          <div class="why-card premium-card">
            <q-icon name="devices" size="38px" />
            <h4>Multiplataforma</h4>
            <p>Sistemas adaptados para web, escritorio, tablet y móvil.</p>
          </div>
        </div>

        <div class="col-12 col-md-3">
          <div class="why-card premium-card">
            <q-icon name="security" size="38px" />
            <h4>Seguro</h4>
            <p>Autenticación, bases de datos y estructura pensada para producción.</p>
          </div>
        </div>

        <div class="col-12 col-md-3">
          <div class="why-card premium-card">
            <q-icon name="rocket_launch" size="38px" />
            <h4>Listo para operar</h4>
            <p>Entrega, publicación y acompañamiento para uso real del sistema.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- TECNOLOGIAS -->
    <section id="tecnologias" class="section tech-section reveal-section">
      <div class="section-title">
        <span>Stack tecnológico</span>
        <h2>Tecnologías utilizadas en nuestros productos</h2>
      </div>

      <div class="tech-grid">
        <div class="tech-item" v-for="tech in techs" :key="tech">{{ tech }}</div>
      </div>
    </section>

    <!-- CONTACTO -->
    <section id="contacto" class="section contact-section reveal-section">
      <div class="contact-box premium-card">
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
          <q-btn label="WhatsApp" icon="chat" class="whatsapp-btn shine-btn" unelevated :href="whatsappUrl" target="_blank" />
          <q-btn label="Instagram" icon="photo_camera" class="instagram-btn shine-btn" unelevated :href="instagramUrl" target="_blank" />
          <q-btn label="Facebook" icon="public" class="facebook-btn shine-btn" unelevated :href="facebookUrl" target="_blank" />
          <q-btn label="Email" icon="mail" class="email-btn shine-btn" unelevated :href="emailUrl" />
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
    <q-btn round icon="chat" class="floating-whatsapp" :href="whatsappUrl" target="_blank" />

    <!-- MODAL GALERIA -->
    <q-dialog v-model="galleryOpen" maximized>
      <q-card class="gallery-dialog">
        <div class="gallery-header">
          <div>
            <div class="gallery-title">{{ currentGalleryTitle }}</div>
            <div class="gallery-subtitle">{{ currentImageTitle }}</div>
          </div>

          <q-btn flat round dense icon="close" class="gallery-close" @click="galleryOpen = false" />
        </div>

        <div class="gallery-body">
          <q-btn round dense icon="chevron_left" class="gallery-arrow left" @click="prevImage" />

          <img :src="currentImage.src" :alt="currentImage.title" class="gallery-full-image" />

          <q-btn round dense icon="chevron_right" class="gallery-arrow right" @click="nextImage" />
        </div>

        <div class="gallery-footer">
          <div class="gallery-counter">
            {{ currentImageIndex + 1 }} / {{ currentImages.length }}
          </div>

          <div class="gallery-thumbs">
            <button
              v-for="(image, index) in currentImages"
              :key="image.src"
              class="gallery-thumb"
              :class="{ active: index === currentImageIndex }"
              @click="currentImageIndex = index"
            >
              <img :src="image.src" :alt="image.title" />
            </button>
          </div>
        </div>
      </q-card>
    </q-dialog>

  </q-page>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'

const facebookUrl = 'https://www.facebook.com/search/top?q=AGR%20Studio'
const instagramUrl = 'https://www.instagram.com/agrstudio.dev/'
const whatsappUrl = 'https://wa.me/59163285735?text=Hola%20AGR%20Studio,%20quiero%20cotizar%20un%20sistema%20para%20mi%20negocio.'
const emailUrl = 'mailto:alexby2g@gmail.com?subject=Solicitud%20de%20sistema%20AGR%20Studio&body=Hola%20AGR%20Studio,%20quiero%20informaci%C3%B3n%20sobre%20un%20sistema%20para%20mi%20negocio.'

const statsSectionRef = ref(null)
const statsStarted = ref(false)
const galleryOpen = ref(false)
const currentGalleryKey = ref('aurea')
const currentImageIndex = ref(0)

const stats = ref([
  { target: 2, display: 0, prefix: '', suffix: '+', label: 'Productos desarrollados' },
  { target: 2, display: 0, prefix: '', suffix: '', label: 'Soluciones web y Android' },
  { target: 100, display: 0, prefix: '', suffix: '%', label: 'Desarrollo personalizado' },
  { target: 24, display: 0, prefix: '', suffix: '/7', label: 'Presencia digital' }
])

const processItems = [
  {
    number: '01',
    icon: 'search',
    iconClass: 'icon-blue',
    title: 'Análisis',
    description: 'Escuchamos la necesidad del negocio, identificamos procesos y definimos qué debe resolver el sistema.'
  },
  {
    number: '02',
    icon: 'draw',
    iconClass: 'icon-purple',
    title: 'Diseño',
    description: 'Organizamos pantallas, módulos, flujo de trabajo y experiencia de usuario antes de construir.'
  },
  {
    number: '03',
    icon: 'code',
    iconClass: 'icon-cyan',
    title: 'Desarrollo',
    description: 'Programamos frontend, backend, base de datos, seguridad y funcionalidades principales.'
  },
  {
    number: '04',
    icon: 'rocket_launch',
    iconClass: 'icon-blue',
    title: 'Implementación',
    description: 'Publicamos el sistema en la nube, configuramos el acceso y dejamos la solución lista para operar.'
  },
  {
    number: '05',
    icon: 'support_agent',
    iconClass: 'icon-purple',
    title: 'Soporte',
    description: 'Acompañamos el crecimiento del sistema con mejoras, ajustes y nuevas funcionalidades.'
  }
]

const techs = [
  'Laravel',
  'Quasar',
  'Vue.js',
  'PostgreSQL',
  'MySQL',
  'Capacitor',
  'Android',
  'Render',
  'Vercel',
  'GitHub'
]

const galleries = {
  aurea: {
    title: 'AUREA Beauty Salon',
    images: [
      { title: 'Dashboard administrativo', src: '/proyectos/aurea-dashboard.png' },
      { title: 'Gestión de clientes', src: '/proyectos/aurea-clientes.png' },
      { title: 'Control de citas', src: '/proyectos/aurea-citas.png' }
    ]
  },
  carlafit: {
    title: 'CarlaFit',
    images: [
      { title: 'Dashboard CarlaFit', src: '/proyectos/carlafit-dashboard.png' },
      { title: 'Pagos CarlaFit', src: '/proyectos/carlafit-pagos.png' },
      { title: 'Inscripciones CarlaFit', src: '/proyectos/carlafit-inscripciones.png' }
    ]
  }
}

const currentGallery = computed(() => galleries[currentGalleryKey.value])
const currentImages = computed(() => currentGallery.value.images)
const currentGalleryTitle = computed(() => currentGallery.value.title)
const currentImage = computed(() => currentImages.value[currentImageIndex.value])
const currentImageTitle = computed(() => currentImage.value.title)

function animateStats() {
  if (statsStarted.value) return

  statsStarted.value = true

  stats.value.forEach((stat) => {
    const duration = 1200
    const startTime = performance.now()

    function update(currentTime) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)

      stat.display = Math.floor(stat.target * eased)

      if (progress < 1) {
        requestAnimationFrame(update)
      } else {
        stat.display = stat.target
      }
    }

    requestAnimationFrame(update)
  })
}

function openGallery(galleryKey, imageIndex = 0) {
  currentGalleryKey.value = galleryKey
  currentImageIndex.value = imageIndex
  galleryOpen.value = true
}

function nextImage() {
  currentImageIndex.value = (currentImageIndex.value + 1) % currentImages.value.length
}

function prevImage() {
  currentImageIndex.value =
    currentImageIndex.value === 0
      ? currentImages.value.length - 1
      : currentImageIndex.value - 1
}

function scrollToSection(id) {
  const section = document.getElementById(id)

  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}

onMounted(() => {
  if (statsSectionRef.value) {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateStats()
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(statsSectionRef.value)
  }

  const revealElements = document.querySelectorAll('.reveal-section')

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          revealObserver.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12 }
  )

  revealElements.forEach((el) => revealObserver.observe(el))
})
</script>

<style scoped>
.page {
  position: relative;
  min-height: 100vh;
  background:
    radial-gradient(circle at 15% 8%, rgba(0, 132, 255, 0.30), transparent 28%),
    radial-gradient(circle at 85% 10%, rgba(138, 43, 226, 0.28), transparent 34%),
    radial-gradient(circle at 50% 55%, rgba(0, 255, 255, 0.05), transparent 40%),
    #07070c;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

.animated-bg {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.animated-bg span {
  position: absolute;
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0,170,255,0.22), transparent 70%);
  filter: blur(6px);
  animation: floatParticle 14s infinite ease-in-out;
}

.animated-bg span:nth-child(1) {
  top: 18%;
  left: 8%;
}

.animated-bg span:nth-child(2) {
  top: 58%;
  left: 82%;
  background: radial-gradient(circle, rgba(138,43,226,0.22), transparent 70%);
  animation-delay: 2s;
}

.animated-bg span:nth-child(3) {
  top: 78%;
  left: 16%;
  width: 120px;
  height: 120px;
  background: radial-gradient(circle, rgba(0,229,255,0.18), transparent 70%);
  animation-delay: 4s;
}

.animated-bg span:nth-child(4) {
  top: 30%;
  left: 72%;
  width: 110px;
  height: 110px;
  background: radial-gradient(circle, rgba(255,255,255,0.10), transparent 70%);
  animation-delay: 6s;
}

@keyframes floatParticle {
  0%, 100% {
    transform: translate3d(0, 0, 0) scale(1);
    opacity: .45;
  }

  50% {
    transform: translate3d(28px, -38px, 0) scale(1.15);
    opacity: .9;
  }
}

.reveal-section {
  opacity: 0;
  transform: translateY(38px);
  transition: opacity .8s ease, transform .8s ease;
}

.reveal-section.visible,
.hero.reveal-section {
  opacity: 1;
  transform: translateY(0);
}

.navbar,
.hero,
.stats-section,
.section,
.footer,
.floating-whatsapp {
  position: relative;
  z-index: 1;
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
  background: rgba(7, 7, 12, 0.76);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(255,255,255,0.08);
  box-shadow: 0 14px 45px rgba(0,0,0,.22);
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
  animation: logoFloat 4s ease-in-out infinite;
}

@keyframes logoFloat {
  0%, 100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-5px);
  }
}

.nav-links {
  display: flex;
  gap: 18px;
}

.nav-links a {
  position: relative;
  color: #d8d8d8;
  text-decoration: none;
  font-weight: 700;
  transition: 0.3s;
  cursor: pointer;
}

.nav-links a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -8px;
  width: 0%;
  height: 2px;
  background: linear-gradient(90deg, #00aaff, #9b30ff);
  transition: .3s;
  border-radius: 99px;
}

.nav-links a:hover {
  color: #00aaff;
}

.nav-links a:hover::after {
  width: 100%;
}

.nav-social {
  display: flex;
  align-items: center;
  gap: 6px;
}

.nav-social .q-btn {
  color: #ffffff;
  background: rgba(255,255,255,0.06);
  transition: .3s;
}

.nav-social .q-btn:hover {
  transform: translateY(-3px) scale(1.05);
  background: rgba(0,170,255,0.16);
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
  animation: heroLogoFloat 5s ease-in-out infinite;
}

@keyframes heroLogoFloat {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }

  50% {
    transform: translateY(-12px) rotate(1deg);
  }
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
  background-size: 240% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow:
    0 0 20px rgba(0,170,255,.5),
    0 0 40px rgba(0,170,255,.3),
    0 0 60px rgba(138,43,226,.3);
  animation: glow 3s ease-in-out infinite, gradientMove 5s linear infinite;
}

@keyframes gradientMove {
  0% {
    background-position: 0% center;
  }

  100% {
    background-position: 240% center;
  }
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
  box-shadow: 0 0 22px rgba(0,170,255,.08);
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
  position: relative;
  overflow: hidden;
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

.shine-btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: -80%;
  width: 55%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.38), transparent);
  transform: skewX(-18deg);
  transition: .65s;
}

.shine-btn:hover::before {
  left: 130%;
}

.btn-primary:hover,
.btn-secondary:hover,
.btn-outline:hover {
  transform: translateY(-3px);
  filter: brightness(1.12);
}

.hero-glow {
  position: absolute;
  width: 420px;
  height: 420px;
  filter: blur(85px);
  opacity: 0.46;
  border-radius: 50%;
  animation: pulseGlow 6s ease-in-out infinite;
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
  animation-delay: 2s;
}

@keyframes pulseGlow {
  0%, 100% {
    transform: scale(1);
    opacity: .42;
  }

  50% {
    transform: scale(1.12);
    opacity: .62;
  }
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
.about-card,
.process-card {
  border-radius: 28px;
  background: rgba(255,255,255,0.055);
  border: 1px solid rgba(255,255,255,0.1);
  backdrop-filter: blur(14px);
  color: white;
  box-shadow: 0 20px 50px rgba(0,0,0,0.28);
  transition: 0.35s;
}

.premium-card {
  position: relative;
  overflow: hidden;
}

.premium-card::after {
  content: "";
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(135deg, rgba(0,170,255,.55), transparent 30%, rgba(138,43,226,.55));
  mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  mask-composite: exclude;
  -webkit-mask-composite: xor;
  opacity: 0;
  transition: .35s;
  pointer-events: none;
}

.premium-card:hover::after {
  opacity: 1;
}

.premium-card::before {
  content: "";
  position: absolute;
  top: -40%;
  left: -70%;
  width: 55%;
  height: 180%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent);
  transform: rotate(20deg);
  transition: .75s;
  pointer-events: none;
}

.premium-card:hover::before {
  left: 130%;
}

.glass-card {
  min-height: 265px;
}

.glass-card:hover,
.project-card:hover,
.case-card:hover,
.about-card:hover,
.process-card:hover,
.stat-card:hover,
.why-card:hover {
  transform: translateY(-9px);
  border-color: rgba(0,170,255,0.45);
  box-shadow:
    0 22px 60px rgba(0,170,255,.13),
    0 0 0 1px rgba(255,255,255,.04);
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

.floating-icon {
  animation: iconFloat 4s ease-in-out infinite;
}

@keyframes iconFloat {
  0%, 100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-6px);
  }
}

.glass-card h3,
.project-card h3,
.case-info h3,
.about-card h3,
.process-card h3 {
  font-size: 1.8rem;
  margin: 18px 0 12px;
  font-weight: 800;
}

.glass-card p,
.project-card p,
.case-info p,
.about-card p,
.process-card p {
  color: #c9c9d8;
  line-height: 1.7;
}

.process-section {
  background:
    radial-gradient(circle at 10% 20%, rgba(0,170,255,0.10), transparent 30%),
    radial-gradient(circle at 90% 80%, rgba(138,43,226,0.12), transparent 34%),
    rgba(255,255,255,0.02);
}

.process-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 18px;
}

.process-card {
  position: relative;
  padding: 30px 22px;
  min-height: 280px;
  overflow: hidden;
}

.process-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 24px;
  right: 24px;
  height: 3px;
  background: linear-gradient(90deg, #00aaff, #8a2be2);
  border-radius: 999px;
}

.process-number {
  position: absolute;
  top: 18px;
  right: 20px;
  font-size: 2.3rem;
  font-weight: 900;
  color: rgba(255,255,255,0.08);
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
  transition: .35s;
}

.project-logo-wrap:hover {
  transform: scale(1.05) rotate(1deg);
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
  box-shadow: 0 0 16px rgba(0,200,120,.12);
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
  transition: .3s;
}

.project-meta span:hover {
  background: rgba(0,170,255,0.13);
  transform: translateX(4px);
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

.screenshot-frame {
  position: relative;
  width: 100%;
  height: 150px;
  border-radius: 22px;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid rgba(255,255,255,0.13);
  box-shadow: 0 18px 45px rgba(0,0,0,.35);
  transition: .35s;
}

.screenshot-frame:hover {
  transform: translateY(-5px);
  box-shadow: 0 24px 65px rgba(0,170,255,.18);
}

.screenshot-frame img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition: 0.35s ease;
}

.screenshot-frame:hover img {
  transform: scale(1.06);
  filter: brightness(0.75);
}

.screenshot-frame:hover .image-overlay {
  opacity: 1;
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.48);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  opacity: 0;
  transition: 0.3s;
  color: white;
  font-weight: 900;
  text-align: center;
}

.main-shot {
  height: 330px;
}

.mini-shots {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
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
  transition: .3s;
}

.chips .q-chip:hover {
  transform: translateY(-2px);
  background: rgba(0,170,255,0.18);
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
  animation: logoFloat 4s ease-in-out infinite;
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
  transition: .3s;
}

.about-contact span:hover {
  background: rgba(0,170,255,0.13);
  transform: translateX(4px);
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
  transform: translateY(-5px) scale(1.03);
  background: rgba(0,170,255,0.12);
  border-color: rgba(0,170,255,0.35);
  box-shadow: 0 18px 38px rgba(0,170,255,.12);
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
  animation: whatsappPulse 2.6s ease-in-out infinite;
}

@keyframes whatsappPulse {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 24px rgba(0, 230, 118, .45);
  }

  50% {
    transform: scale(1.06);
    box-shadow: 0 0 34px rgba(0, 230, 118, .65);
  }
}

.gallery-dialog {
  background:
    radial-gradient(circle at top left, rgba(0,170,255,0.16), transparent 34%),
    radial-gradient(circle at bottom right, rgba(138,43,226,0.18), transparent 35%),
    rgba(5,5,10,0.98);
  color: white;
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

.gallery-header {
  height: 76px;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(0,0,0,0.35);
  border-bottom: 1px solid rgba(255,255,255,0.10);
}

.gallery-title {
  font-size: 1.25rem;
  font-weight: 900;
}

.gallery-subtitle {
  color: #bdbdd0;
  font-weight: 700;
  margin-top: 2px;
}

.gallery-close {
  color: white;
  background: rgba(255,255,255,0.08);
}

.gallery-body {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 28px 80px;
  overflow: hidden;
}

.gallery-full-image {
  max-width: 100%;
  max-height: calc(100vh - 190px);
  object-fit: contain;
  border-radius: 22px;
  box-shadow: 0 25px 80px rgba(0,0,0,0.55);
  border: 1px solid rgba(255,255,255,0.12);
  background: rgba(255,255,255,0.04);
}

.gallery-arrow {
  position: absolute;
  z-index: 5;
  background: rgba(255,255,255,0.12);
  color: white;
  width: 46px;
  height: 46px;
}

.gallery-arrow.left {
  left: 24px;
}

.gallery-arrow.right {
  right: 24px;
}

.gallery-footer {
  padding: 16px 24px 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  flex-wrap: wrap;
  background: rgba(0,0,0,0.35);
  border-top: 1px solid rgba(255,255,255,0.10);
}

.gallery-counter {
  font-weight: 900;
  color: #70cfff;
}

.gallery-thumbs {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  max-width: 80vw;
  padding-bottom: 4px;
}

.gallery-thumb {
  width: 92px;
  height: 58px;
  padding: 0;
  border-radius: 12px;
  border: 2px solid transparent;
  background: rgba(255,255,255,0.08);
  overflow: hidden;
  cursor: pointer;
  opacity: 0.7;
  transition: .3s;
}

.gallery-thumb.active {
  opacity: 1;
  border-color: #00aaff;
  box-shadow: 0 0 18px rgba(0,170,255,0.35);
}

.gallery-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 1300px) {
  .process-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 1200px) {
  .nav-links {
    gap: 12px;
  }

  .nav-links a {
    font-size: .88rem;
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

  .process-grid {
    grid-template-columns: repeat(2, 1fr);
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

  .gallery-body {
    padding: 20px 58px;
  }

  .gallery-arrow.left {
    left: 12px;
  }

  .gallery-arrow.right {
    right: 12px;
  }
}

@media (max-width: 620px) {
  .about-grid,
  .process-grid {
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

  .gallery-header {
    height: auto;
    min-height: 72px;
    padding: 14px 16px;
  }

  .gallery-title {
    font-size: 1rem;
  }

  .gallery-subtitle {
    font-size: .85rem;
  }

  .gallery-body {
    padding: 18px 12px;
  }

  .gallery-arrow {
    top: auto;
    bottom: 96px;
    width: 42px;
    height: 42px;
  }

  .gallery-arrow.left {
    left: 18px;
  }

  .gallery-arrow.right {
    right: 18px;
  }

  .gallery-full-image {
    max-height: calc(100vh - 230px);
    border-radius: 16px;
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

  .screenshot-frame {
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