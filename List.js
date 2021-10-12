import React from 'react';
import {Link} from "react-router-dom";
import Api from "../servicios/api";

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:false,
            register:[],
        }
    }

    erase = (property)=> {

        console.log(property);

        fetch(Api+"?delete="+property)
        .then(respuesta=>respuesta.json())
        .then((response)=>{

            console.log(response);
            this.upload();
        })
        .catch(console.log)
    }

    upload(){

        fetch(Api)
        .then(respuesta=>respuesta.json())
        .then((response)=>{
            console.log(response);
            this.setState({data:true, register:response})
        })
        .catch(console.log)

    }

    componentDidMount(){
        this.upload();
    }

    render() { 
        const{data, register}=this.state

        if(!data){
            return(<div>Cargando....</div>)
        }else{

            return (
                <div className="card">
                    <div className="card-header">
                    <Link className="btn btn-success" to={"/create"}>Agregar Vivienda</Link>    
                    </div>
                    <div class="card-body">
                        <h4>Lista de registros</h4>
                <table class="table table-striped">
                            <thead class="thead">
                                <tr>
                                    <th>Numero predial</th>
                                    <th>Nombre predio</th>
                                    <th>Departamento</th>
                                    <th>Municipio</th>
                                    <th>Avaluo</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead >
                            <tbody>
                                {register.map(
                                    //nueva vble
                                        (register)=>(
                                        <tr key={register.property}>
                                        <td>{register.property}</td>
                                        <td>{register.nameLand}</td>
                                        <td>{register.departamento}</td>
                                        <td>{register.municipio}</td>
                                        <td>{register.valuing}</td>
                                        <td>
                                            <div className="btn-group" role="group" aria-label="">
                                                <Link className="btn btn-warning" to={"/edit/"+register.property}

                                                >Editar</Link>
                                        
                                                <button type="button" className="btn btn-danger"
                                                onClick={()=>this.erase(register.property)}
                                                >Borrar</button>
                                            </div>
                                            
                                        </td>
                                    </tr>  
                                        )
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="card-footer text-muted">
                        Directorio Predio
                    </div>
                    <h4>Datos Persona Juridica</h4>
                    <div className="card">
                    </div>
                   
                   <table class="table table-striped">
                       <thead>
                           <tr>
                               <th>Numero predial</th>
                               <th>Nit</th>
                               <th>Razon social</th>
                               <th></th>
                           </tr>
                       </thead>
                       <tbody>
                       {register.map(
                                        (register)=>(
                                        <tr key={register.property}>
                                        <td>{register.property}</td> 
                                        <td>{register.nit}</td>
                                        <td>{register.rsocial}</td>
                                        <td>
                                        </td>
                                        
                                        <td>
                                            <div className="btn-group" role="group" aria-label="">
                                                <Link className="btn btn-warning" to={"/editlegal/"+register.property}>Editar Persona Juridica</Link>
                                            </div>
                                        </td>
                                    </tr>  
                                        )
                                    )
                                }
                       </tbody>
                   </table>
                   <div className="card-footer text-muted">
                        Directorio Persona Juridica
                    </div> 
                   <h4>Datos Persona Natural</h4>
                   <table class="table table-striped">
                       <thead>
                           <tr>
                               <th>Numero predial</th>
                               <th>Nombre</th>
                               <th>Apellido</th>
                               <th>Tipo de identificacion</th>
                               <th>Identificacion</th>
                               <th>Direccion</th>
                               <th>Correo</th>
                               <th>Celular</th>
                               <th></th>
                           </tr>
                       </thead>
                       <tbody>
                       {register.map(
                                        (register)=>(
                                        <tr key={register.property}>
                                        <td>{register.property}</td> 
                                        <td>{register.name}</td> 
                                        <td>{register.lastName}</td> 
                                        <td>{register.typeId}</td> 
                                        <td>{register.id}</td> 
                                        <td>{register.address}</td> 
                                        <td>{register.email}</td>
                                        <td>{register.phone}</td>
                                        <td>
                                        </td>
                                        
                                        <td>
                                            <div className="btn-group" role="group" aria-label="">
                                                <Link className="btn btn-warning" to={"/editnatural/"+register.property}>Editar Persona Natural</Link>
                                            </div>
                                        </td>
                                    </tr>  
                                        )
                                    )
                                }
                       </tbody>
                   </table>
                   <div className="card-footer text-muted">
                        Directorio Persona Natural
                    </div>  
                    <h4>Datos Predios Construidos (Edificacion)</h4>
                   <table class="table table-striped">
                       <thead>
                           <tr>
                               <th>Numero predial</th>
                               <th>Numero de pisos</th>
                               <th>Area(m2)</th>
                               <th>Tipo (industrial,comercial, residencial)</th>
                               <th>Direccion</th>
                               <th></th>
                           </tr>
                       </thead>
                       <tbody>
                       {register.map(
                                        (register)=>(
                                        <tr key={register.property}>
                                        <td>{register.property}</td> 
                                        <td>{register.numberF}</td> 
                                        <td>{register.area}</td> 
                                        <td>{register.typeLand}</td> 
                                        <td>{register.addressLand}</td>
                                        <td></td>
                                        
                                        <td>
                                            <div className="btn-group" role="group" aria-label="">
                                                <Link className="btn btn-warning" to={"/editbuilt/"+register.property}>Editar tipo de construccion</Link>
                                            </div>
                                        </td>
                                    </tr>  
                                        )
                                    )
                                }
                       </tbody>
                   </table>
                   <div className="card-footer text-muted">
                        Directorio Tipo de Edificacion
                    </div>  
                     
                    <h4>Datos Predios Construidos (Terreno)</h4>
                   <table class="table table-striped">
                       <thead>
                           <tr>
                               <th>Numero predial</th>
                               <th>Area terreno (m2)</th>
                               <th>Valor comercial</th>
                               <th>Tipo (rural o urbano)</th>
                               <th>Loteado</th>
                               <th>Fuentes de agua</th>
                               <th></th>
                           </tr>
                       </thead>
                       <tbody>
                       {register.map(
                                        (register)=>(
                                        <tr key={register.property}>
                                        <td>{register.property}</td> 
                                        <td>{register.areaLand}</td> 
                                        <td>{register.commercial }</td> 
                                        <td>{register.terrainType}</td> 
                                        <td>{register.lot}</td>
                                        <td>{register.waterSources}</td>
                                        <td></td>
                                        
                                        <td>
                                            <div className="btn-group" role="group" aria-label="">
                                                <Link className="btn btn-warning" to={"/editterrain/"+register.property}>Editar tipo de construccion</Link>
                                            </div>
                                        </td>
                                    </tr>  
                                        )
                                    )
                                }
                       </tbody>
                   </table>
                   <div className="card-footer text-muted">
                        Directorio terreno (Terreno)
                    </div>  
                    
                   </div>
            );
        }
    }
}

export default List;