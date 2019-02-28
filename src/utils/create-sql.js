import { saveAs } from 'file-saver'

export function toSql(ocorrencias) {
	let line = ''

	ocorrencias.forEach(ocorrencia => {
		line += `INSERT INTO OCORRENCIAS VALUES(0,'${ocorrencia.id_fb}','${
			ocorrencia.data
		}','${ocorrencia.lat}','${ocorrencia.lon}','${ocorrencia.rua}','${
			ocorrencia.bairro
		}','${ocorrencia.cidade}','${ocorrencia.estado}','${ocorrencia.cep}','${
			ocorrencia.infracao
		}','${ocorrencia.data_infracao}','${ocorrencia.hora_infracao}','${
			ocorrencia.autor
		}','${ocorrencia.autor_sexo}','${ocorrencia.autor_idade}','${
			ocorrencia.autor_cor
		}','${ocorrencia.outros_autores}','${ocorrencia.vitima}','${
			ocorrencia.vitima_sexo
		}','${ocorrencia.vitima_idade}','${ocorrencia.vitima_cor}','${
			ocorrencia.outras_vitimas
		}','${ocorrencia.historico}','${ocorrencia.autoridade}','${
			ocorrencia.autoridade_identificacao
		}','${ocorrencia.outras_autoridades}');\n`
	})

	let blob = new Blob([line], { type: 'application/sql;charset=utf-8,' })
	saveAs(blob, 'ocorrencias.sql')
}
