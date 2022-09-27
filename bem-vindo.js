window.onload = () => {
    const bv = document.querySelector('.bv')
    const userName = new URLSearchParams(document.location.search).get('user')
    bv.textContent = `Bem vind@ ${userName}`;
    document.title = `Bem vind@ ${userName}`;
}