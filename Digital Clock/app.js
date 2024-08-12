function startTime() {
    const today = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];    
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let month=today.getMonth();
    let day=today.getDate();
    let year=today.getFullYear();
    document.getElementById('hrs').innerHTML =h;
    document.getElementById('mins').innerHTML =m;
    document.getElementById('sec').innerHTML =s;
    document.getElementById('date').innerHTML=day  + monthNames[today.getMonth()] + year;
    
  }

  setInterval(startTime,1000);