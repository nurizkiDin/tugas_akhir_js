function buat_login(){
    //hapus tombol
    let x = document.getElementById('X')
    x.parentElement.removeChild(x)

    //masuk kedalam div
    let div1 = document.getElementsByTagName('div')[0]

    //buat element form
    let judul = document.createElement('p')
    judul.className = 'tulisan_login'
    judul.innerHTML = 'silahkan mendaftar'
    div1.appendChild(judul)
    let form1 = document.createElement('form')
    div1.appendChild(form1)

    //isi form
    let namaL = document.createElement('label')
    namaL.innerHTML = 'Nama User'
    namaL.className = 'label'
    let nama = document.createElement('input')
    nama.type = 'text'
    nama.placeholder = 'Nama User'
    nama.className = 'form_login'

    let nohpL = document.createElement('label')
    nohpL.innerHTML = 'Nomor Handphone'
    nohpL.className = 'label'
    let nohp = document.createElement('input')
    nohp.type = 'text'
    nohp.placeholder = 'Nomor Handphone'
    nohp.className = 'form_login'

    let userL = document.createElement('label')
    userL.innerHTML = 'Username'
    userL.className = 'label'
    let user = document.createElement('input')
    user.type = 'text'
    user.placeholder = 'Username atau Email'
    user.className = 'form_login'

    let passL = document.createElement('label')
    passL.innerHTML = 'Password'
    passL.className = 'label'
    let pass = document.createElement('input')
    pass.type = 'password'
    pass.placeholder = 'Password'
    pass.className = 'form_login'

    let tombol = document.createElement('button')
    tombol.innerHTML = 'daftar sekarang'
    tombol.className = 'tulisan_login tombol_login'

    //panggil isi ke dalam form
    form1.appendChild(namaL)
    form1.appendChild(nama)
    form1.appendChild(nohpL)
    form1.appendChild(nohp)
    form1.appendChild(userL)
    form1.appendChild(user)
    form1.appendChild(passL)
    form1.appendChild(pass)
    form1.appendChild(tombol)
}