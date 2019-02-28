import { saveAs } from 'file-saver'

export function toCsv(ocorrencias) {
	let line =
		'id,id_fb,data,lat,lon,rua,bairro,cidade,estado,cep,infracao,data_infracao,hora_infracao,autor,autor_sexo,autor_idade,autor_cor,outros_autores,vitima,vitima_sexo,vitima_idade,vitima_cor,outras_vitimas,historico,autoridade,autoridade_identificacao,outras_autoridades\n'

	ocorrencias.forEach(ocorrencia => {
		line += `0,${ocorrencia.id_fb},${ocorrencia.data},${ocorrencia.lat},${
			ocorrencia.lon
		},${ocorrencia.rua},${ocorrencia.bairro},${ocorrencia.cidade},${
			ocorrencia.estado
		},${ocorrencia.cep},${ocorrencia.infracao},${
			ocorrencia.data_infracao
		},${ocorrencia.hora_infracao},${ocorrencia.autor},${
			ocorrencia.autor_sexo
		},${ocorrencia.autor_idade},${ocorrencia.autor_cor},${
			ocorrencia.outros_autores
		},${ocorrencia.vitima},${ocorrencia.vitima_sexo},${
			ocorrencia.vitima_idade
		},${ocorrencia.vitima_cor},${ocorrencia.outras_vitimas},${
			ocorrencia.historico
		},${ocorrencia.autoridade},${ocorrencia.autoridade_identificacao},${
			ocorrencia.outras_autoridades
		},\n`
	})

	let blob = new Blob([line], { type: 'data:text/csv;charset=utf-8,' })
	saveAs(blob, 'ocorrencias.csv')
}
