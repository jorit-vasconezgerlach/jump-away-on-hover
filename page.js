function topIsBigger() {
    const topBox = document.getElementById('top');
    const botBox = document.getElementById('bot');

    topBox.style.height = '70%';
    botBox.style.height = '30%';
}
function botIsBigger() {
    const topBox = document.getElementById('top');
    const botBox = document.getElementById('bot');

    botBox.style.height = '70%';
    botBox.style.borderRadius = '200px 200px 0 0';
    botBox.style.borderRadius = '0';
    topBox.style.height = '30%';
}