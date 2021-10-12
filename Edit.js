import React from 'react';
import {Link} from "react-router-dom";
import Api from "../servicios/api";

class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:false,
            register:[]
        }
    }

    changeValue =(e)=>{
        const state=this.state.register;

        state[e.target.name]=e.target.value;
        this.setState({register:state});
    }

    sendData = (e) =>{
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
                data:true,
                register:datosRespuesta[0]})
        })
        .catch(console.log)
    }

    render() { 
        const{data,register}=this.state

        if(!data){
            return(<div>Cargando....</div>)
        }else{
            return (<div className="card">
                <div className="card-header">
                    Editar registros
                </div>
                <div className="card-body">
                    
                    <form onSubmit={this.sendData}>

                    <div className="form-group">
                      <label htmlFor="">Numero predial</label>
                      <input type="text" readOnly className="form-control" value={register.property}
                      onChange={this.changeValue} name="property" id="property" aria-describedby="helpId" placeholder=""/>
                      <small id="helpId" className="form-text text-muted">Numero predial</small>
                    </div>

                            <div className="form-group">
                            <label htmlFor="">Nombre predio:</label>
                            <input type="text" name="nameLand" onChange={this.changeValue} value={register.nameLand} id="nameLand" className="form-control" placeholder="" aria-describedby="helpId"/>
                            <small id="helpId" className="text-muted">Escribe el nombre del predio</small>
                            </div>

                            <div className="form-group">
                            <label htmlFor="">Departamento:</label>
                            <input type="text" name="departamento" onChange={this.changeValue} value={register.departamento}  id="departamento" className="form-control" placeholder="" aria-describedby="helpId"/>
                            <small id="helpId" className="text-muted">Escribe el departamento</small>
                            </div>
                            
                            <div className="form-group">
                            <label htmlFor="">Municipio:</label>
                            <input type="text" name="municipio" onChange={this.changeValue} value={register.municipio} id="municipio" className="form-control" placeholder="" aria-describedby="helpId"/>
                            <small id="helpId" className="text-muted">Escribe el municipio</small>
                            </div>
                            
                            <div className="form-group">
                            <label htmlFor="">Avaluo:</label>
                            <input type="text" name="valuing" onChange={this.changeValue} value={register.valuing} id="valuing" className="form-control" placeholder="" aria-describedby="helpId"/>
                            <small id="helpId" className="text-muted">Escribe el avaluo</small>
                            </div>
                            
                            <div className="btn-group" role="group" aria-label="">
                                <button type="submit" className="btn btn-success">Actualizar predio</button>
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
 
export default Edit;