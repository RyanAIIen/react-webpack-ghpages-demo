const Home = () => {
    const element = document.createElement('div');
    element.innerHTML = 'My Website';
    return element;
}

document.body.appendChild(Home());
