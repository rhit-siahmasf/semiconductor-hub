document.getElementById("semiconductors").addEventListener("click", MaterialsPage);
document.getElementById("diodes").addEventListener("click", FabricationPage);
document.getElementById("wafers").addEventListener("click", DevicesPage);
document.getElementById("others").addEventListener("click", DTCPage);
document.getElementById("login").addEventListener("click", LoginPage);
document.getElementById("webhome").addEventListener("click", HomePage);

function HomePage() {
    window.location.href="homepage.html"
}

function MaterialsPage() {
    window.location.href="materials.html";
}

function DevicesPage() {
    window.location.href="devices.html";
}

function FabricationPage() {
    window.location.href="fabrication.html";
}

function DTCPage() {
    window.location.href="dtc.html";
}

function LoginPage() {
    window.location.href="login.html";
}