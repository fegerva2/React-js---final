import React from 'react'
import { Link } from 'react-router-dom'

function Servicios() {
  return (
    <>
    <h1>Servicios</h1>
            <hr />
    <div style={{ width: '85%', margin: '0 auto' }}>

        <p>Eldan Electrónica comercializa máquinas y accesorios para la industria plástica. Con más de 40 años de experiencia en el rubro, nuestra misión es ayudar a nuestros clientes a crecer. Nuestros objetivos son los de proveer maquinarias y automatización de última tecnología, rápida respuesta, asistencia técnica y asesoramiento en proyectos. Para ello, contamos con el apoyo de los mejores fabricantes de la industria y un cuerpo técnico propio.</p>
        <p>Entre los productos que comercializamos se encuentran:</p>
        <p>Inyectoras de plásticos horizontales y verticales, representante Oficial en Argentina de Inyectoras Chen Hsong Machinery– Tolvas Secadoras – Deshumidificadores – Cargadores de material –Trampas magnéticas – Molinos – Mezcladores – Cintas transportadoras – Chillers– Caudalímetros– Calentadores de molde – Dosificadores de masterbatch – Dosificadores gravimétricos – Válvulas proporcionales – Controladores de Colada Caliente.
        </p>
        <p>Eldan también fabrica y comercializa productos de automatización y aplicación para la industria, tales como:</p>
        <p>Pirómetros (Reguladores de temperatura) – Termocuplas – Termómetros – Resistencias microblindadas – Resistencias suncho – Resistencias cerámicas infrarrojas – Contadores mecánicos y electrónicos – Cuentametros –Amperímetros – Voltímetros – Tacómetros – Encoders – Relés – Sensores Inductivos – Selladoras de bolsas – Impresoras Hot Stamping – Sunchadoras – Hornos termocontraible.</p>
        <h2><p>Eldan Electrónica es representante oficial de las compañías:</p></h2>
			<div class="marcas">
				<img src="/img/Asian.jpg" alt="Asian"></img>
				<img src="/img/Chen-Hsong.jpg" alt="Chen Hsong"></img>
				<img src="/img/Shini.jpg" alt="Shini"></img>
				<img src="/img/Line-seiki.jpg" alt="Line Seiki"></img>
				<img src="/img/Arico.bmp" alt="Arico"></img>
				<img src="/img/MINHUI.jpg" alt="MINHUI"></img>
				<img src="/img/GENOX.jpg" alt="GENOX"></img>
				<img src="/img/LAE_Electronic.jpg" alt="LAE Electronic"></img>
			</div>
        <Link to="/"><button>Volver al Inicio</button></Link>
    </div>
    </>
  )
}

export default Servicios