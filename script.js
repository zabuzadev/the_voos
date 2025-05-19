// Array com URLs das imagens do slideshow
const slideshowImages = [
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
  "https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
]

// Função para inicializar o slideshow
function initSlideshow() {
  const slideshowContainer = document.querySelector(".slideshow-container")

  if (!slideshowContainer) return

  // Criar slides
  slideshowImages.forEach((imageUrl, index) => {
    const slide = document.createElement("div")
    slide.className = `slide ${index === 0 ? "active" : ""}`
    slide.style.backgroundImage = `url(${imageUrl})`
    slideshowContainer.appendChild(slide)
  })

  let currentSlide = 0
  const slides = document.querySelectorAll(".slide")

  // Função para mudar de slide
  function changeSlide() {
    slides[currentSlide].classList.remove("active")
    currentSlide = (currentSlide + 1) % slides.length
    slides[currentSlide].classList.add("active")
  }

  // Iniciar o slideshow automático
  setInterval(changeSlide, 5000) // Muda a cada 5 segundos
}

// Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  document.getElementById("current-year").textContent = new Date().getFullYear()

  // Inicializar slideshow
  initSlideshow()

  // Mobile menu toggle
  const menuToggle = document.getElementById("menu-toggle")
  const navMobile = document.getElementById("nav-mobile")

  if (menuToggle && navMobile) {
    menuToggle.addEventListener("click", () => {
      navMobile.classList.toggle("active")
    })
  }

  // Close mobile menu when clicking on a link
  const mobileLinks = navMobile ? navMobile.querySelectorAll("a") : []
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMobile.classList.remove("active")
    })
  })

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        const headerHeight = document.querySelector(".header").offsetHeight
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })
})

// WhatsApp Contact Function
function contactWhatsApp(message) {
  // Número de WhatsApp da agência (substitua pelo número real)
  const phoneNumber = "554831997424"

  // URL do WhatsApp com o número e a mensagem
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  // Abrir o WhatsApp em uma nova aba
  window.open(whatsappUrl, "_blank")
}

// Search Trip Function
function searchTrip() {
  const destination = document.getElementById("destination").value
  const dates = document.getElementById("dates").value
  const travelers = document.getElementById("travelers").value

  // Construir a mensagem para o WhatsApp com os dados da pesquisa
  let message = "Olá! Gostaria de informações sobre viagem"

  if (destination) {
    message += ` para ${destination}`
  }

  if (dates) {
    message += `, período: ${dates}`
  }

  if (travelers) {
    message += `, viajantes: ${travelers}`
  }

  // Enviar a mensagem para o WhatsApp
  contactWhatsApp(message)
}

// Animação de scroll para elementos
window.addEventListener("scroll", () => {
  const scrollElements = document.querySelectorAll(
    ".destination-card, .promotion-card, .package-card, .service-item, .testimonial-card",
  )

  scrollElements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top
    const screenPosition = window.innerHeight / 1.3

    if (elementPosition < screenPosition) {
      element.style.opacity = "1"
      element.style.transform = "translateY(0)"
    }
  })
})

// Inicializar animações
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(
    ".destination-card, .promotion-card, .package-card, .service-item, .testimonial-card",
  )

  animatedElements.forEach((element) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(20px)"
    element.style.transition = "opacity 0.5s ease, transform 0.5s ease"
  })

  // Trigger scroll event to check initial visible elements
  window.dispatchEvent(new Event("scroll"))
})
