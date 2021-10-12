import React from 'react';
import {Link} from "react-router-dom";
import Api from "../servicios/api";

class Edit_Legal  extends React.Component {
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
    

        fetch(Api+"?consultar="+this.props.match.params.id)
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
                    Actualizar Persona Juridica
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
                         onChange={this.cambioValor} name="nameLand" id="nameLand" placeholder="" aria-describedby="helpId"/>
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
                        <label htmlFor="">ID del Propietario:</label>
                        <input type="text" name="nit" onChange={this.cambioValor} value={register.nit} id="nit" className="form-control" placeholder="" aria-describedby="helpId"/>
                        <small id="helpId" className="text-muted">Escriba la Razon Social del propietario</small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Razon Social del propietario:</label>
                        <input type="text" name="rsocial" onChange={this.cambioValor} value={register.rsocial} id="rsocial" className="form-control" placeholder="" aria-describedby="helpId"/>
                        <small id="helpId" className="text-muted">Escriba la Razon Social del propietario</small>
                    </div>

                    <div className="btn-group" role="group" aria-label="">
                        <button type="submit" className="btn btn-success">Actualizar Persona Juridica</button>
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
 
export default Edit_Legal ;