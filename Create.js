import React from 'react';
import {Link} from "react-router-dom";
import Api from "../servicios/api";


class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            property:"",nameLand:"",departamento:"",municipio:"",valuing:"",name:"",nit:"",rsocial:"",lastName:"",typeId:"",id:"",
            address:"",email:"",phone:"",numberF:"",area:"",typeLand:"",addressLand:"",areaLand:"",commercial:"",terrainType:"",lot:"",waterSources:"",
            errores:[]
        }
    }
    changeValue =(e)=>{
        const state=this.state;
        state[e.target.name]=e.target.value;
        this.setState({ state,errores:[]});
    }

    error(element){
        return this.state.errores.indexOf(element) !==-1;
    }

    sendData = (e)=>{
        e.preventDefault();
        
        const{property,nameLand,departamento,municipio,valuing,name,nit,rsocial,lastName, typeId,id,address,email, 
          phone,numberF,area,typeLand,addressLand,areaLand, commercial,terrainType,lot,waterSources}= this.state;

        var errores=[];
        if(!property)errores.push("error_property");
        if(!nameLand)errores.push("error_nameLand");
        if(!departamento)errores.push("error_departamento");
        if(!municipio)errores.push("error_municipio");
        if(!valuing)errores.push("error_avaluo");
        if(!name)errores.push("error_nombre");
        if(!nit)errores.push("error_id");
        if(!rsocial)errores.push("error_razon_social");
        if(!lastName)errores.push("error_apellido");
        if(!typeId)errores.push("error_razon_tipo_identificacion");
        if(!id)errores.push("error_identificacion");
        if(!address)errores.push("error_direccion");
        if(!email)errores.push("error_correo");
        if(!phone)errores.push("error_celular");
        if(!numberF)errores.push("error_no_pisos");
        if(!area)errores.push("error_area");
        if(!typeLand)errores.push("error_tipo_predio");
        if(!addressLand)errores.push("error_direccion_predio");
        if(!areaLand)errores.push("error_area_terreno");
        if(!commercial)errores.push("error_commercial");
        if(!terrainType)errores.push("error_tipo_terreno");
        if(!lot)errores.push("error_lote");
        if(!waterSources)errores.push("error_fuentes_agua");
        

        this.setState({errores:errores});
        if(errores.length>0)return false;

        var data=(
            {property:property,nameLand:nameLand,departamento:departamento,municipio:municipio,valuing:valuing,name:name,nit:nit,rsocial:rsocial,
            lastName:lastName,typeId:typeId,id:id, address:address,email:email,phone:phone,numberF:numberF,area:area,typeLand:typeLand,addressLand:addressLand,
            areaLand:areaLand,commercial:commercial,terrainType:terrainType,lot:lot,waterSources:waterSources})
           
        fetch(Api+"?insert=1",{
            method:"POST",
            body:JSON.stringify(data)
        })
        .then(respuesta=>respuesta.json())
        .then((response)=>{
            console.log(response);
            this.props.history.push("/")
        })
        .catch(console.log)
    }

    render() {
        
      const{property,nameLand,departamento,municipio,valuing,name,nit,rsocial,lastName, typeId,id,address,email, 
        phone,numberF,area,typeLand,addressLand,areaLand, commercial,terrainType,lot,waterSources}= this.state;

        return (
            <div className="card">
                <div className="card-header">
                    Registro Juridicas
                </div>
                <div className="card-body">
                    <form onSubmit={this.sendData}>

                        <div className="form-group">
                          <label htmlFor="">Numero predial:</label>
                          <input required type="text" name="property" onChange={this.changeValue} value={property} id="property" className={((this.error("error_property"))?"is-invalid":"")+" form-control"} placeholder="" aria-describedby="helpId"/>
                          <small id="helpId" className="text-muted">Escribe el numero del predio</small>
                        </div>

                        <div className="form-group">
                          <label htmlFor="">Nombre del predio:</label>
                          <input required type="text" name="nameLand" onChange={this.changeValue} value={nameLand}  id="nameLand" className={((this.error("error_nameLand"))?"is-invalid":"")+" form-control"} placeholder="" aria-describedby="helpId"/>
                          <small id="helpId" className="text-muted">Escribe el nombre del predio</small>
                        </div>

                        <div className="form-group">
                          <label htmlFor="">Departamento:</label>
                          <input required type="text" name="departamento" onChange={this.changeValue} value={departamento}  id="departamento" className={((this.error("error_departamento"))?"is-invalid":"")+" form-control"} placeholder="" aria-describedby="helpId"/>
                          <small id="helpId" className="text-muted">Escribe el departamento</small>
                        </div>

                        <div className="form-group">
                          <label htmlFor="">Municipio:</label>
                          <input required type="text" name="municipio" onChange={this.changeValue} value={municipio}  id="municipio" className={((this.error("error_municipio"))?"is-invalid":"")+" form-control"} placeholder="" aria-describedby="helpId"/>
                          <small id="helpId" className="text-muted">Escribe el municipio donde se ubica el predio</small>
                        </div>

                        <div className="form-group">
                          <label htmlFor="">Avaluo:</label>
                          <input required type="text" name="valuing" onChange={this.changeValue} value={valuing}  id="valuing" className={((this.error("error_valuing"))?"is-invalid":"")+" form-control"} placeholder="" aria-describedby="helpId"/>
                          <small id="helpId" className="text-muted">Escribe el avaluo </small>
                        </div>
                        
                        <div className="form-group">
                          <label htmlFor="">Nombre propietario:</label>
                          <input required type="text" name="name" onChange={this.changeValue} value={name}  id="name" className={((this.error("error_name"))?"is-invalid":"")+" form-control"} placeholder="" aria-describedby="helpId"/>
                          <small id="helpId" className="text-muted">Escribe el nombre del propietario</small>
                        </div>
                        
                        <div className="card-footer text-muted">
                        Si usted es persona Juridica llene los  datos (ID,Razon social) de lo contratio escriba (NONE)
                        </div>

                        <div className="form-group">
                          <label htmlFor="">Nit:</label>
                          <input type="text" name="nit" onChange={this.changeValue} value={nit}  id="nit" className={((this.error("error_nit"))?"is-invalid":"")+" form-control"} placeholder="" aria-describedby="helpId"/>
                          <small id="helpId" className="text-muted">Escribe el nit del propietario</small>
                        </div>

                        <div className="form-group">
                          <label htmlFor="">Razon Social del propietario:</label>
                          <input type="text" name="rsocial" onChange={this.changeValue} value={rsocial}  id="rsocial" className={((this.error("error_rsocial"))?"is-invalid":"")+" form-control"} placeholder="" aria-describedby="helpId"/>
                          <small id="helpId" className="text-muted">Escriba la Razon Social del propietario</small>
                        </div>

                        <div className="card-footer text-muted">
                        Si usted es persona Natural llene los datos (Tipo de id,id,address,email,phone) de lo contratio escriba (NONE).
                        </div>

                        <div className="form-group">
                          <label htmlFor="">Apellidos:</label>
                          <input type="text" name="lastName" onChange={this.changeValue} value={lastName}  id="lastName" className={((this.error("error_lastName"))?"is-invalid":"")+" form-control"} placeholder="" aria-describedby="helpId"/>
                          <small id="helpId" className="text-muted">Escriba los Apellidos del propietario</small>
                        </div>

                        <div className="form-group">
                          <label htmlFor="">Tipo de Identificacion del propietario(CC,TI,TE):</label>
                          <input type="text" name="typeId" onChange={this.changeValue} value={typeId}  id="typeId" className={((this.error("error_typeId"))?"is-invalid":"")+" form-control"} placeholder="" aria-describedby="helpId"/>
                          <small id="helpId" className="text-muted">Escriba el Tipo de Identificacion del propietario</small>
                        </div>

                        <div className="form-group">
                          <label htmlFor="">Identificacion del propietario:</label>
                          <input type="text" name="id" onChange={this.changeValue} value={id}  id="id" className={((this.error("error_id"))?"is-invalid":"")+" form-control"} placeholder="" aria-describedby="helpId"/>
                          <small id="helpId" className="text-muted">Escriba el numero de Identificacion del propietario</small>
                        </div>

                        <div className="form-group">
                          <label htmlFor="">Direccion del propietario:</label>
                          <input type="text" name="address" onChange={this.changeValue} value={address}  id="address" className={((this.error("error_address"))?"is-invalid":"")+" form-control"} placeholder="" aria-describedby="helpId"/>
                          <small id="helpId" className="text-muted">Escriba la Direccion del propietario</small>
                        </div>
                        
                        <div className="form-group">
                          <label htmlFor="">Correo del propietario:</label>
                          <input type="text" name="email" onChange={this.changeValue} value={email}  id="email" className={((this.error("error_email"))?"is-invalid":"")+" form-control"} placeholder="" aria-describedby="helpId"/>
                          <small id="helpId" className="text-muted">Escriba el correo del propietario</small>
                        </div>
                        
                        <div className="form-group">
                          <label htmlFor="">Celular del propietario:</label>
                          <input type="text" name="phone" onChange={this.changeValue} value={phone}  id="phone" className={((this.error("error_phone"))?"is-invalid":"")+" form-control"} placeholder="" aria-describedby="helpId"/>
                          <small id="helpId" className="text-muted">Escriba el celular del Identificacion del propietario</small>
                        </div>

                        <div className="card-footer text-muted">
                        Nota :Si el predio es construido llene los siguientes datos (No pisos ,Area de la construccion ,Tipo de predio ,Direccion del predio) de lo contratio escriba (NONE,NULL)
                        </div>

                        <div className="form-group">
                          <label htmlFor="">Numero de pisos de la construccion:</label>
                          <input type="text" name="numberF" onChange={this.changeValue} value={numberF}  id="numberF" className={((this.error("error_numberF"))?"is-invalid":"")+" form-control"} placeholder="" aria-describedby="helpId"/>
                          <small id="helpId" className="text-muted">Escriba la cantidad de pisos que tiene la construccion</small>
                        </div>

                        <div className="form-group">
                          <label htmlFor="">Area de la construccion (m2):</label>
                          <input type="text" name="area" onChange={this.changeValue} value={area}  id="area" className={((this.error("error_area"))?"is-invalid":"")+" form-control"} placeholder="" aria-describedby="helpId"/>
                          <small id="helpId" className="text-muted">Escriba el area del predio construido</small>
                        </div>

                        <div className="form-group">
                          <label htmlFor="">Tipo de predio (Industrial,Comercial,Residencial):</label>
                          <input type="text" name="typeLand" onChange={this.changeValue} value={typeLand}  id="typeLand" className={((this.error("error_typeLand"))?"is-invalid":"")+" form-control"} placeholder="" aria-describedby="helpId"/>
                          <small id="helpId" className="text-muted">Escriba el tipo de predio</small>
                        </div>
                        
                        <div className="form-group">
                          <label htmlFor="">Direccion del predio:</label>
                          <input type="text" name="addressLand" onChange={this.changeValue} value={addressLand}  id="addressLand" className={((this.error("error_addressLand"))?"is-invalid":"")+" form-control"} placeholder="" aria-describedby="helpId"/>
                          <small id="helpId" className="text-muted">Escriba la direccion del predio</small>
                        </div>

                        <div className="card-footer text-muted">
                        Nota :Si el predio es un Terreno llene los siguientes datos (Area del Terreno,Valor Comercial,Tipo de Terreno,Predio loteado,No de fuentes de Agua) de lo contratio escriba (NONE,NULL)
                        </div>
                        
                        <div className="form-group">
                          <label htmlFor="">Area del terreno:</label>
                          <input type="text" name="areaLand" onChange={this.changeValue} value={areaLand}  id="areaLand" className={((this.error("error_areaLand"))?"is-invalid":"")+" form-control"} placeholder="" aria-describedby="helpId"/>
                          <small id="helpId" className="text-muted">Escriba el area del terreno</small>
                        </div>
                        
                        <div className="form-group">
                          <label htmlFor="">Valor comercial del terreno:</label>
                          <input type="text" name="commercial" onChange={this.changeValue} value={commercial}  id="commercial" className={((this.error("error_commercial"))?"is-invalid":"")+" form-control"}  placeholder="" aria-describedby="helpId"/>
                          <small id="helpId" className="text-muted">Escriba el valor comrecial del terreno</small>
                        </div>
                        
                        <div className="form-group">
                          <label htmlFor="">Tipo de terreno (Rural,Urbano):</label>
                          <input type="text" name="terrainType" onChange={this.changeValue} value={terrainType}  id="terrainType" className={((this.error("error_terrainType"))?"is-invalid":"")+" form-control"} placeholder="" aria-describedby="helpId"/>
                          <small id="helpId" className="text-muted">Escriba el tipo de terreno</small>
                        </div>

                        <div className="form-group">
                          <label htmlFor="">Predio loteado:</label>
                          <input type="text" name="lot" onChange={this.changeValue} value={lot}  id="lot" className={((this.error("error_lot"))?"is-invalid":"")+" form-control"} placeholder="" aria-describedby="helpId"/>
                          <small id="helpId" className="text-muted">Escriba si el terreno esta loteado</small>
                        </div>
                        
                        <div className="form-group">
                          <label htmlFor="">Numero de Fuentes de agua:</label>
                          <input type="text" name="waterSources" onChange={this.changeValue} value={waterSources}  id="waterSources" className={((this.error("error_waterSources"))?"is-invalid":"")+" form-control"} placeholder="" aria-describedby="helpId"/>
                          <small id="helpId" className="text-muted">Escriba en numero de fuentes de agua</small>
                        </div>
                      
                        <div className="btn-group" role="group" aria-label="">
                            <button type="submit" className="btn btn-success">Agregar terreno</button>
                            <Link to={"/"} className="btn btn-conzejatz">Cancelar</Link>
                        </div>

                    </form>
                </div>
                <div className="card-footer text-muted">

                </div>
            </div>
         );
    }
}
 
export default Create;