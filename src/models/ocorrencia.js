export default class Ocorrencia {
	constructor(endereco) {
		this.PATT = /[,"']/gi
		this.id = 0
		this.id_fb = ''
		this.data = new Date()
			.toISOString()
			.substr(0, 10)
			.split('-')
			.reverse()
			.join('.')
		this.lat = endereco.lat
		this.lon = endereco.lon
		this.rua = endereco.rua.replace(this.PATT, '')
		this.bairro = endereco.bairro.replace(this.PATT, '')
		this.cidade = endereco.cidade.replace(this.PATT, '')
		this.estado = endereco.estado.replace(this.PATT, '')
		this.cep = endereco.cep
		this.infracao = ''
		this.data_infracao = new Date()
			.toISOString()
			.substr(0, 10)
			.split('-')
			.reverse()
			.join('.')
		this.hora_infracao = new Date().toLocaleTimeString('pt-br', {
			hour: '2-digit',
			minute: '2-digit'
		})
		this.autor = ''
		this.autor_sexo = ''
		this.autor_idade = ''
		this.autor_cor = ''
		this.outros_autores = ''
		this.quantidade_autores = ''
		this.vitima = ''
		this.vitima_sexo = ''
		this.vitima_idade = ''
		this.vitima_cor = ''
		this.outras_vitimas = ''
		this.quantidade_vitimas = ''
		this.historico = ''
		this.autoridade = ''
		this.autoridade_identificacao = ''
		this.outras_autoridades = ''
	}

	static getSqlTable() {
		let table = `CREATE TABLE OCORRENCIAS (
			id int,
			id_fb VARCHAR(255),
			data DATE,
			lat VARCHAR(255),
			lon VARCHAR(255),
			rua VARCHAR(255),
			bairro VARCHAR(255),
			cidade VARCHAR(255),
			estado VARCHAR(255),
			cep VARCHAR(255),
			infracao VARCHAR(255),
			data_infracao DATE,
			hora_infracao VARCHAR(255),
			autor VARCHAR(255),
			autor_sexo VARCHAR(255),
			autor_idade VARCHAR(255),
			autor_cor VARCHAR(255),
			outros_autores VARCHAR(255),
			vitima VARCHAR(255),
			vitima_sexo VARCHAR(255),
			vitima_idade VARCHAR(255),
			vitima_cor VARCHAR(255),
			outras_vitimas VARCHAR(255),
			historico VARCHAR(255),
			autoridade VARCHAR(255),
			autoridade_identificacao VARCHAR(255),
			outras_autoridades VARCHAR(255),
			PRIMARY KEY (id)
		);`
		return table
	}
}
