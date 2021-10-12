import React from 'react';
import {Link} from "react-router-dom";
import Api from "../servicios/api";

class Editar_terrain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datosCargados:false,
            register:[]
        }
    }

    cambioValor =(e)=>{
        const state=this.state.register;

        state[e.target.name]=e.target.value;
        this.setState({register:state});
    }

    enviarDatos = (e) =>{
        e.preventDefault();
        console.log("Formulario enviado...");
        const{property,nameLand,departamento,municipio,valuing,name,nit,rsocial,lastName, typeId,id,address,email, 
            phone,numberF,area,typeLand,addressLand,areaLand, commercial,terrainType,lot,waterSources}= this.state.register;

        var datosEnviar=({property:property,nameLand:nameLand,departamento:departamento,municipio:municipio,valuing:valuing,name:name,nit:nit,rsocial:rsocial,
            lastName:lastName,typeId:typeId,id:id, address:address,email:email,phone:phone,numberF:numberF,area:area,typeLand:typeLand,addressLand:addressLand,
            areaLand:areaLand,commercial:commercial,terrainType:terrainType,lot:lot,waterSources:waterSources})

        fetch(Api+"?update=1",{
            method:"POST",
            body:JSON.stringify(datosEnviar)
        })
        .then(respuesta=>respuesta.json())
        .then((datosRespuesta)=>{
            console.log(datosRespuesta);
            this.props.history.push("/")
        })
        .catch(console.log)
    }

    componentDidMount(){
        console.log(this.props.match.params.id);
    

        fetch(Api+"?check="+this.props.match.params.id)
        .then(respuesta=>respuesta.json())
        .then((datosRespuesta)=>{
            console.log("=>"+datosRespuesta);

            this.setState({
                datosCargados:true,
                register:datosRespuesta[0]})
        })
        .catch(console.log)
    }

    render() { 
        const{datosCargados,register}=this.state

        if(!datosCargados){
            return(<div>Cargando....</div>)
        }else{
            return (<div className="card">
                <div className="card-header">
                    Actualizar datos de terreno
                </div>
                <div className="card-body">
                    
                <form onSubmit={this.enviarDatos}>

                <div className="form-group">
                <label htmlFor="">No Predial</label>
                <input type="text" readOnly className="form-control" value={register.property}
                onChange={this.cambioValor} name="property" id="property" aria-describedby="helpId" placeholder=""/>
                </div>

                <div className="form-group">
                    <label htmlFor="">Nombre predio:</label>
                    <input type="text" readOnly className="form-control" value={register.nameLand}
                    onChange={this.cambioValor} name="nameLand"  id="nameLand"  aria-describedby="helpId" placeholder=""/>
                </div>

                <div className="form-group">
                    <label htmlFor="">Departamento:</label>
                    <input type="text" readOnly className="form-control" value={register.departamento}
                    onChange={this.cambioValor} name="departamento" id="departamento" aria-describedby="helpId" placeholder=""/>
                </div>

                <div className="form-group">
                    <label htmlFor="">Municipio:</label>
                    <input type="text" readOnly className="form-control" value={register.municipio}
                    onChange={this.cambioValor} name="municipio" id="municipio" aria-describedby="helpId" placeholder=""/>
                </div>

                <div className="form-group">
                    <label htmlFor="">Avaluo:</label>
                    <input type="text" readOnly className="form-control" value={register.valuing}
                    onChange={this.cambioValor} name="valuing" id="valuing" aria-describedby="helpId" placeholder=""/>
                </div>

                <div className="form-group">
                    <label htmlFor="">ID del propietario:</label>
                    <input type="text" readOnly className="form-control" value={register.nit}
                    onChange={this.cambioValor} name="nit" id="nit" aria-describedby="helpId" placeholder=""/>
                </div>

                <div className="form-group">
                    <label htmlFor="">Razon Social del propietario:</label>
                    <input type="text" readOnly className="form-control" value={register.rsocial}
                    onChange={this.cambioValor} name="rsocial" id="rsocial" aria-describedby="helpId" placeholder=""/>
                </div>

                <div className="form-group">
                    <label htmlFor="">Nombre:</label>
                    <input type="text" readOnly className="form-control" value={register.name}
                    onChange={this.cambioValor} name="name" id="name" aria-describedby="helpId" placeholder=""/>
                </div>

                <div className="form-group">
                        <label htmlFor="">Apellido:</label>
                        <input type="text" readOnly className="form-control" value={register.lastName}
                    onChange={this.cambioValor} name="lastName" id="lastName" aria-describedby="helpId" placeholder=""/>
                </div>

                <div className="form-group">
                    <label htmlFor="">Tipo de identificacion(CC,TE):</label>
                    <input type="text" readOnly className="form-control" value={register.typeId}
                    onChange={this.cambioValor} name="typeId" id="typeId" aria-describedby="helpId" placeholder=""/>
                </div>

                <div className="form-group">
                    <label htmlFor="">Identificacion del propietario:</label>
                    <input type="text" readOnly className="form-control" value={register.id}
                    onChange={this.cambioValor} name="id" id="id" aria-describedby="helpId" placeholder=""/>
                </div>

                <div className="form-group">
                    <label htmlFor="">Direccion del  propietario:</label>
                    <input type="text" readOnly className="form-control" value={register.address}
                    onChange={this.cambioValor} name="address" id="address" aria-describedby="helpId" placeholder=""/>
                </div>

                <div className="form-group">
                    <label htmlFor="">Correo del propietario:</label>
                    <input type="text" readOnly className="form-control" value={register.email}
                    onChange={this.cambioValor} name="email" id="email" aria-describedby="helpId" placeholder=""/>
                </div>

                <div className="form-group">
                    <label htmlFor="">Celular del propietario:</label>
                    <input type="text" readOnly className="form-control" value={register.phone}
                    onChange={this.cambioValor} name="phone" id="phone" aria-describedby="helpId" placeholder=""/>
                </div>

                <div className="form-group">
                    <label htmlFor="">Numero de pisos del predio:</label>
                    <input type="text" readOnly className="form-control" value={register.numberF}
                    onChange={this.cambioValor} name="numberF" id="numberF" aria-describedby="helpId" placeholder=""/>
                </div>

                <div className="form-group">
                    <label htmlFor="">Area del predio(m2):</label>
                    <input type="text" readOnly className="form-control" value={register.area}
                    onChange={this.cambioValor} name="area" id="area" aria-describedby="helpId" placeholder=""/>
                </div>

                <div className="form-group">
                    <label htmlFor="">Tipo de predio(Industrial,Comercial,Residencial):</label>
                    <input type="text" readOnly className="form-control" value={register.typeLand}
                    onChange={this.cambioValor} name="typeLand" id="typeLand" aria-describedby="helpId" placeholder=""/>
                </div>

                <div className="form-group">
                    <label htmlFor="">Direccion del predio:</label>
                    <input type="text" readOnly className="form-control" value={register.addressLand}
                    onChange={this.cambioValor} name="addressLand" id="addressLand" aria-describedby="helpId" placeholder=""/>
                </div>

                <div className="form-group">
                    <label htmlFor="">Area del terreno:</label>
                    <input type="text" name="areaLand" onChange={this.cambioValor} value={register.areaLand} id="areaLand" className="form-control" placeholder="" aria-describedby="helpId"/>
                    <small id="helpId" className="text-muted">Escriba escriba el area del terreno</small>
                </div>

                <div className="form-group">
                    <label htmlFor="">Valor comercial:</label>
                    <input type="text" name="commercial" onChange={this.cambioValor} value={register.commercial} id="commercial" className="form-control" placeholder="" aria-describedby="helpId"/>
                    <small id="helpId" className="text-muted">Escriba el valor </small>
                </div>

                <div className="form-group">
                    <label htmlFor="">Tipo de terreno (Rural o Urbano):</label>
                    <input type="text" name="terrainType" onChange={this.cambioValor} value={register.terrainType} id="terrainType" className="form-control" placeholder="" aria-describedby="helpId"/>
                    <small id="helpId" className="text-muted">Escriba el tipo de terreno</small>
                </div>

                <div className="form-group">
                    <label htmlFor="">Loteado:</label>
                    <input type="text" name="lot" onChange={this.cambioValor} value={register.lot} id="lot" className="form-control" placeholder="" aria-describedby="helpId"/>
                    <small id="helpId" className="text-muted">Escriba si esta loteado</small>
                </div>

                <div className="form-group">
                    <label htmlFor="">Fuentes de agua:</label>
                    <input type="text" name="waterSources" onChange={this.cambioValor} value={register.waterSources} id="waterSources" className="form-control" placeholder="" aria-describedby="helpId"/>
                    <small id="helpId" className="text-muted">Escriba las fuentes de agua</small>
                </div>

                <div className="btn-group" role="group" aria-label="">
                    <button type="submit" className="btn btn-success">Actualizar register de terreno </button>
                    <Link to={"/"} className="btn btn-conzejatz">Cancelar</Link>
                </div>

                </form>
                </div>
                <div className="card-footer text-muted">
                </div>
            </div> );
        }
    }
}
 
export default Editar_terrain;