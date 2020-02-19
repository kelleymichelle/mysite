 Axios.post('http://localhost:3030/api/email', this.state)
      if(res.data.success) {
   .then(res => {
         this.setState({
            disabled: false,
            emailSent: true
            });
      } else {
         this.setState({
            disabled: false,
            emailSent: false
         });
      }
   })
   .catch(err => {
      console.log(err);
      this.setState({
      disabled: false,
      emailSent: false
      });
   })

   /* leaves for swirling leaves animation */
#leaf-15 {
  animation: leaves 4s infinite linear;
  transform-origin: center;
  transform-box: fill-box;
}
#leaf-14 {
  animation: leaves2 4s infinite linear;
  transform-origin: center;
}
#leaf-13 {
  animation: leaves 2s;
  transform-origin: center;
}
#leaf-12 {
  animation: leaves2 2s ease;
  transform-origin: center;
}
#leaf-11 {
  animation: leaves 2s infinite linear;
  transform-origin: center;
}
#leaf-10 {
  animation: leaves 2s ease;
  transform-origin: center;
}
#leaf-9 {
  animation: leaves 2.3s infinite linear;
  transform-origin: center;
}
#leaf-8 {
  animation: leaves 2s ease;
  transform-origin: center;
}
#leaf-7 {
  animation: leaves 2s infinite;
  transform-origin: center;
  transform-box: fill-box;
}
#leaf-6 {
  animation: leaves 2s ease;
  transform-origin: center;
}
#leaf-5 {
  animation: leaves 2s infinite linear;
  transform-origin: center;
}
#leaf-4 {
  animation: leaves 2s infinite;
  transform-origin: center;
  transform-box: fill-box;
}
#leaf-3 {
  animation: leaves2 2.5s infinite;
  transform-origin: center;
  transform-box: fill-box;
}
#leaf-2 {
  animation: leaves 3s infinite linear;
  transform-origin: center;
}
#leaf-1 {
  animation: leaves 3s infinite;
  transform-origin: center;
  transform-box: fill-box;
}
@keyframes leaves {
  from {
    transform: rotateZ(0deg)
  }
  to {
    transform: rotateZ(360deg)
  }
}
@keyframes leaves2 {
  from {
    transform: rotateZ(0deg)
  }
  to {
    transform: rotateZ(-360deg)
  }
}