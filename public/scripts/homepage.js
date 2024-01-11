document.getElementById("semiconductors").addEventListener("click", SemiPage);
document.getElementById("diodes").addEventListener("click", DiodesPage);
document.getElementById("wafers").addEventListener("click", WafersPage);
document.getElementById("others").addEventListener("click", OtherProcess);
document.getElementById("login").addEventListener("click", LoginPage);

function SemiPage() {
    window.location.href="semiconductors.html";
}

function DiodesPage() {
    window.location.href="diodes.html";
}

function WafersPage() {
    window.location.href="wafers.html";
}

function OtherProcess() {
    window.location.href="otherprocess.html";
}

function LoginPage() {
    window.location.href="login.html";
}