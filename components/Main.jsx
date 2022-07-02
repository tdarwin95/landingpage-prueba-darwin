import React, {Component} from 'react'
import Title from './Title'
import ListArticles from './ListArticles'
import FilterArticles from './FilterArticles'
import FormContact from './FormContact'
import PropTypes from 'prop-types'
import swal from 'sweetalert'

const propTypes = {
	articles: PropTypes.object.isRequired
}


class Main extends Component{

    constructor(props){
		super(props);

		this.state = {
			articles: this.props.articles,
            alerta: 'alert-desactive',
            contact: {
                firstname: '',
			    lastname: '',
                email: '',
                phone: '',
            },
            
		};

        this.handleFilterArticles = this.handleFilterArticles.bind(this)
        this.handleOnRegisterContact = this.handleOnRegisterContact.bind(this)
	}

    handleFilterArticles(e, opcion){
        e.preventDefault();

        if(opcion == 'todos'){
            fetch('https://5eed24da4cbc340016330f0d.mockapi.io/api/articles')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                this.setState({articles: data})
                console.log(this.state.articles)
            })
        }else{
            fetch('https://5eed24da4cbc340016330f0d.mockapi.io/api/articles?filter='+ opcion)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                this.setState({articles: data})
                console.log(this.state.articles)
            })
        }
    }


    handleOnRegisterContact(data){

    	console.log(data)

    	const contact = {
			firstname: data.firstname,
			lastname: data.lastname,
            email: data.email,
            phone: data.phone,
		}


		fetch('https://5eed24da4cbc340016330f0d.mockapi.io/api/newsletter', {
			method: 'POST',
			body: JSON.stringify(contact),
			headers: {
				'Accept': 'application/json', 
				'Content-Type': 'application/json'
			}
		})
	    .then(res => res.json())
	    .then(data => {
	    	console.log(data)
            console.log('exito')
            swal('Formulario enviado con exito!!!', '', "success");
            console.log(this.state.alerta)

	    })
	    .catch(err => {

            swal('Error no se ha enviado tu formulario!!!', '', 'error');

            console.error(err)
        })
    }


    render(){
        return (
            <div>
                <Title 
                    message={'Nuestros artículos'} 
                />

                <div className="contenedor-articulos">
                    <div className="contenedor">
                        <div className="menu">
                            <FilterArticles
                                filterArticles={this.handleFilterArticles}
                            />
                        </div>

                        <div className="articulos">
                            <ListArticles
                                articles={this.state.articles}
                            />
                        </div>
                    </div>
                </div>

                <Title 
                    message={'Contáctanos'} 
                />

                <FormContact
                    onRegisterContact = {this.handleOnRegisterContact}
                    onChange ={ this.handleOnChange }
                    alerta = {this.state.alerta}
                    contact = {this.state.contact}

                />

            </div>
        )
    }
}

Main.propTypes = propTypes

export default Main