var script = document.createElement("script")
script.src = "//cdn.jsdelivr.net/npm/sweetalert2@11"
document.body.appendChild(script)

window.onload = cookies()
function cookies(){
  Swal.fire({
  position: 'bottom-end',
  title: 'Cookies',
  html: 'This site uses cookies to keep you signed in. <br><a href="/tos">Learn more</a>',
  toast: true,
  showConfirmButton: false,
  timer: 5000,
  timerProgressBar: true,
})
}