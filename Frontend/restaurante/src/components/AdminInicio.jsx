import { useState } from 'react';
import '../assets/css/mensaje.css'
import { Link } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
const AdminInicio = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [codeVerificacion, setCodeVerificacion] = useState('');
  const [datosTwilio, setDatosTwilio] = useState({})
  const [habilitarSesion, setHabilitarSesion]=useState(false)
  const handleSend = async (e) => {
    e.preventDefault()
    let codeAleatorio = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000
    console.log(codeAleatorio);
    try {
      const request = await fetch("http://localhost:1234/api/admin/sendCode/" + codeAleatorio ,{
        method: "POST",
        body: JSON.stringify({phoneNumber}),
        headers:{
          "content-type":"application/json"
        }
      })
      const data = await request.json()
      console.log(data);
      setDatosTwilio(data)
    } catch (error) {
      console.error('Error sending SMS:', error);
    }
  };

  const handleCodeChange = (e) => {
    setCodeVerificacion(e.target.value);
  };

  const handlePhoneChange=(e)=>{
    setPhoneNumber(e.target.value);
  }

  const handleObtenerMensaje = async (e)=>{
    e.preventDefault()
    console.log(datosTwilio);
    console.log(codeVerificacion)
    if(datosTwilio.codigoVerificacion == codeVerificacion){
      console.log("Verificación exitosa");
      setHabilitarSesion(true)
    }else{
      console.log("Datos errados");
    }
  }

  return (
    <>
    <Header/>

    <Nav  />
    <div className='container-form'>
      <form className="formularioAdmin">
        <h3>Verificación de administrador</h3>
        <div className="container-inputs">
          <input
            type="text"
            value={phoneNumber}
            placeholder="Número telefónico"
            onChange={handlePhoneChange}
          />
          {phoneNumber.length >=13 ? (
              <input
              type="text"
              onChange={handleCodeChange}
              placeholder="Código de verificación"
              />
            ) : (
              <input disabled style={{display:"none"}} placeholder="Código de verificación" />
          )} 
        </div>
        <div className="container-buttons">
          {
            phoneNumber.length >= 13 ? 
            (
              <button onClick={handleSend} style={{display: "flex",  backgroundColor:"#a4130e", cursor: "pointer",  border: "none"}}>
                Enviar código
              </button>
            )
            :
            (
              <button disabled> 
                Enviar código
              </button>
            )
          }
          {
            codeVerificacion.length >= 4 ? 
            (
              <button onClick={handleObtenerMensaje} style={{display: "flex",  backgroundColor:"#a4130e", cursor: "pointer",  border: "none"}}>
                Verificar código
              </button>
            )
            : 
            (
              <button disabled>
                Verificar código
              </button>
            )
          }
        </div>
        <div style={{display: "flex", gap: "1em"}}>
          {habilitarSesion && <Link to="/iniciarSesionAdmin" className='adminSesion'  >Iniciar sesión</Link>  }
        </div>
          
      </form>
    </div>
    </>
  );
};

export default AdminInicio;
