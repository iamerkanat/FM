const mytext = document.getElementById('Mu')
mytext.innerText = 'SONGS'

const sounds = ['King', 'Ki', 'Heart', 'interworld', 'Noch', 'Ride', 'SW']

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () => {
        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn);
})

