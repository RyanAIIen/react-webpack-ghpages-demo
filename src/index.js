const Home = () => {
    const element = document.createElement('div');
    element.innerHTML = 'My website';
    return element;
}

document.body.appendChild(Home());
