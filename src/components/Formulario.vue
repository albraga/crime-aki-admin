<template>
  <div>
    <div class="columns">
      <div class="column">
        <button class="button is-primary is-large" v-on:click="getCsv">Gerar CSV</button>
      </div>
      <div class="column">
        <button class="button is-info is-large" v-on:click="getAll">Listar</button>
      </div>
      <div class="column">
        <button class="button is-primary is-large" v-on:click="getSql">Gerar SQL</button>
      </div>
    </div>
    <section class="is-primary is-fullheight">
      <div>
        <div class="container">
          <div class="columns is-5-tablet is-4-desktop is-3-widescreen">
            <div class="column">
              <form class="box">
                <!-- v-on:submit.prevent -->
                <div class="field">
                  <label class="label">Data</label>
                  <div class="control">
                    <input class="input" type="text" v-model="oco.data">
                  </div>
                </div>

                <div class="field">
                  <label class="label">Latitude</label>
                  <div class="control">
                    <input class="input" type="text" placeholder="latitude" v-model="oco.lat">
                  </div>
                </div>

                <div class="field">
                  <label class="label">Longitude</label>
                  <div class="control">
                    <input class="input" type="text" placeholder="longitude" v-model="oco.lon">
                  </div>
                </div>

                <div class="field">
                  <label class="label">Rua</label>
                  <div class="control">
                    <input class="input" type="text" placeholder="rua" v-model="oco.rua">
                  </div>
                </div>

                <div class="field">
                  <label class="label">Bairro</label>
                  <div class="control">
                    <input class="input" type="text" placeholder="bairro" v-model="oco.bairro">
                  </div>
                </div>

                <div class="field">
                  <label class="label">Cidade</label>
                  <div class="control">
                    <input class="input" type="text" placeholder="cidade" v-model="oco.cidade">
                  </div>
                </div>

                <div class="field">
                  <label class="label">Estado</label>
                  <div class="control">
                    <input class="input" type="text" placeholder="estado" v-model="oco.estado">
                  </div>
                </div>

                <div class="field">
                  <label class="label">CEP</label>
                  <div class="control">
                    <input class="input" type="text" placeholder="cep" v-model="oco.cep">
                  </div>
                </div>

                <div class="field">
                  <label class="label">Infração Penal</label>
                  <div class="control">
                    <div class="select">
                      <select name="infracao" v-model="oco.infracao">
                        <option value disabled selected>Selecione o tipo de infração</option>
                        <option
                          value="Contravenção referente à pessoa"
                        >Contravenção referente à pessoa</option>
                        <option
                          value="Contravenção referente ao patrimônio"
                        >Contravenção referente ao patrimônio</option>
                        <option
                          value="Contravenção referente à incolumidade"
                        >Contravenção referente à incolumidade</option>
                        <option
                          value="Contravenção referente à paz pública"
                        >Contravenção referente à paz pública</option>
                        <option
                          value="Contravenção referente à fé pública"
                        >Contravenção referente à fé pública</option>
                        <option
                          value="Contravenção relativa à organização do trabalho"
                        >Contravenção relativa à organização do trabalho</option>
                        <option
                          value="Contravenção relativa à polícia de costumes"
                        >Contravenção relativa à polícia de costumes</option>
                        <option
                          value="Contravenção referente à Administração Pública"
                        >Contravenção referente à Administração Pública</option>
                        <option value="Crime contra a pessoa">Crime contra a pessoa</option>
                        <option value="Crime contra a honra">Crime contra a honra</option>
                        <option value="Crime contra o patrimônio">Crime contra o patrimônio</option>
                        <option
                          value="Crime contra a administração pública"
                        >Crime contra a administração pública</option>
                        <option
                          value="Crime contra a dignidade sexual"
                        >Crime contra a dignidade sexual</option>
                        <option
                          value="Crime contra a incolumidade pública"
                        >Crime contra a incolumidade pública</option>
                        <option
                          value="Crime contra o patrimônio histórico"
                        >Crime contra o patrimônio histórico</option>
                        <option
                          value="Crime contra a administração da justiça"
                        >Crime contra a administração da justiça</option>
                        <option value="Crime econômico">Crime econômico</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div class="field">
                  <label class="label">Data da infração</label>
                  <div class="control">
                    <input class="input" type="text" v-model="oco.data_infracao">
                  </div>
                </div>

                <div class="field">
                  <label class="label">Hora da infração</label>
                  <div class="control">
                    <input class="input" type="text" v-model="oco.hora_infracao">
                  </div>
                </div>

                <div class="field">
                  <label class="label">Autor</label>
                  <div class="control">
                    <input type="text" class="input" placeholder="Autor" v-model="oco.autor">
                    <label class="label">Sexo</label>
                    <div class="control">
                      <label class="radio">
                        <input type="radio" name="sexo" value="masculino" v-model="oco.autor_sexo">
                        Masculino
                      </label>
                      <label class="radio">
                        <input type="radio" name="sexo" value="feminino" v-model="oco.autor_sexo">
                        Feminino
                      </label>
                    </div>
                    <label class="label">Idade</label>
                    <div class="control">
                      <input
                        type="text"
                        class="input"
                        placeholder="Idade"
                        v-model="oco.autor_idade"
                      >
                    </div>
                    <label class="label">Cor</label>
                    <div class="control">
                      <label class="radio">
                        <input type="radio" name="cor" value="branco" v-model="oco.autor_cor">
                        Branco
                      </label>
                      <label class="radio">
                        <input type="radio" name="cor" value="pardo" v-model="oco.autor_cor">
                        Pardo
                      </label>
                      <label class="radio">
                        <input type="radio" name="cor" value="preto" v-model="oco.autor_cor">
                        Preto
                      </label>
                      <label class="radio">
                        <input type="radio" name="cor" value="amarelo" v-model="oco.autor_cor">
                        Amarelo
                      </label>
                      <label class="radio">
                        <input type="radio" name="cor" value="indígena" v-model="oco.autor_cor">
                        Indígena
                      </label>
                    </div>
                  </div>
                </div>

                <div class="field">
                  <label class="label">Outros Autores</label>
                  <div class="control">
                    <textarea
                      class="textarea"
                      placeholder="Outros autores envolvidos"
                      v-model="oco.outros_autores"
                    ></textarea>
                  </div>
                </div>

                <div class="field">
                  <label class="label">Quantidade de autores</label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      placeholder="Quantidade de autores"
                      v-model="oco.quantidade_autores"
                    >
                  </div>
                </div>

                <div class="field">
                  <label class="label">Vítima</label>
                  <div class="control">
                    <input type="text" class="input" placeholder="Vítima" v-model="oco.vitima">
                    <label class="label">Sexo</label>
                    <div class="control">
                      <label class="radio">
                        <input type="radio" name="sexo" value="masculino" v-model="oco.vitima_sexo">
                        Masculino
                      </label>
                      <label class="radio">
                        <input type="radio" name="sexo" value="feminino" v-model="oco.vitima_sexo">
                        Feminino
                      </label>
                    </div>
                    <label class="label">Idade</label>
                    <div class="control">
                      <input
                        type="text"
                        class="input"
                        placeholder="Idade"
                        v-model="oco.vitima_idade"
                      >
                    </div>
                    <label class="label">Cor</label>
                    <div class="control">
                      <label class="radio">
                        <input type="radio" name="cor" value="branco" v-model="oco.vitima_cor">
                        Branco
                      </label>
                      <label class="radio">
                        <input type="radio" name="cor" value="pardo" v-model="oco.vitima_cor">
                        Pardo
                      </label>
                      <label class="radio">
                        <input type="radio" name="cor" value="preto" v-model="oco.vitima_cor">
                        Preto
                      </label>
                      <label class="radio">
                        <input type="radio" name="cor" value="amarelo" v-model="oco.vitima_cor">
                        Amarelo
                      </label>
                      <label class="radio">
                        <input type="radio" name="cor" value="indígena" v-model="oco.vitima_cor">
                        Indígena
                      </label>
                    </div>
                  </div>
                </div>

                <div class="field">
                  <label class="label">Outras Vítimas</label>
                  <div class="control">
                    <textarea
                      class="textarea"
                      placeholder="Outras vítimas envolvidas"
                      v-model="oco.outras_vitimas"
                    ></textarea>
                  </div>
                </div>

                <div class="field">
                  <label class="label">Quantidade de vítimas</label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      placeholder="Quantidade de vítmias"
                      v-model="oco.quantidade_vitimas"
                    >
                  </div>
                </div>

                <div class="field">
                  <label class="label">Histórico</label>
                  <div class="control">
                    <textarea
                      class="textarea"
                      placeholder="Histórico, descrição da ocorrência"
                      v-model="oco.historico"
                    ></textarea>
                  </div>
                </div>

                <div class="field">
                  <label class="label">Autoridade policial</label>
                  <div class="control">
                    <input
                      type="text"
                      class="input"
                      placeholder="Autoridade policial"
                      v-model="oco.autoridade"
                    >
                    
                    <label class="label">Identificação</label>
                    <div class="control">
                      <input
                        type="text"
                        class="input"
                        placeholder="Identificação funcional"
                        v-model="oco.autoridade_identificacao"
                      >
                    </div>
                  </div>
                </div>

                <div class="field">
                  <label class="label">Outras Autoridades</label>
                  <div class="control">
                    <textarea
                      class="textarea"
                      type="textarea"
                      placeholder="Outras autoridades policiais"
                      v-model="oco.outras_autoridades"
                    ></textarea>
                  </div>
                </div>

                <div class="field">
                  <label class="label"></label>
                  <div class="control">
                    <button class="button" @click="push">Salvar</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="modal" v-bind:class="{'is-active': isActive}">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Modal title</p>
          <button class="delete" aria-label="close" v-on:click="fechar"></button>
        </header>
        <section class="modal-card-body">
          <div v-for="oc in ocs" :key="oc.id_fb">
            <p>id_fb {{oc.id_fb}}</p>
            <p>data {{oc.data}}</p>
            <p>latitude {{oc.lat}}</p>
            <p>longitude {{oc.lon}}</p>
            <p>rua {{oc.rua}}</p>
            <p>bairro {{oc.bairro}}</p>
            <p>cidade {{oc.cidade}}</p>
            <p>estado {{oc.estado}}</p>
            <p>cep {{oc.cep}}</p>
            <p>infração {{oc.infracao}}</p>
            <p>data da infração {{oc.data_infracao}}</p>
            <p>hora da infração {{oc.hora_infracao}}</p>
            <p>autor {{oc.autor}}</p>
            <p>sexo {{oc.autor_sexo}}</p>
            <p>idade {{oc.autor_idade}}</p>
            <p>cor {{oc.autor_cor}}</p>
            <p>outros autores {{oc.outros_autores}}</p>
            <p>quantidade autores {{oc.quantidade_autores}}</p>
            <p>vitima {{oc.vitima}}</p>
            <p>sexo {{oc.vitima_sexo}}</p>
            <p>idade {{oc.vitima_idade}}</p>
            <p>cor {{oc.autor_cor}}</p>
            <p>outras vitimas {{oc.outras_vitimas}}</p>
            <p>quantidade de vitimas {{oc.quantidade_vitimas}}</p>
            <p>historico {{oc.historico}}</p>
            <p>autoridade {{oc.autoridade}}</p>
            <p>identificacão {{oc.autoridade_identificacao}}</p>
            <p>outras autoridades {{oc.outras_autoridades}}</p>
            <hr>
            <button v-on:click="removeAll">Apagar tudo</button>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" v-on:click="fechar">Save changes</button>
          <button class="button" v-on:click="fechar">Cancel</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import { toCsv } from "../utils/create-csv.js"
import { toSql } from "../utils/create-sql.js"

export default {
  data() {
    return {
      ocs: [],
      isActive: false
    }
  },
  props: ["oco"],
  methods: {
    push,
    getAll,
    removeAll,
    getCsv() {
      toCsv(this.ocs)
    },
    fechar() {
      this.isActive = false
    },
    getSql() {
      toSql(this.ocs)
    }
  }
}

function removeAll() {
  this.$ref.set(null)
  this.ocs = []
}

function getAll() {
  this.isActive = true
  this.ocs = []
  this.$ref.on("child_added", snap => {
    let oc = snap.val()
    for(let key in oc) {
      //if(oc[key] != 'id' || oc[key] != 'data' || oc[key] != 'data_infracao' || oc[key] != 'hora_infracao')
      if(oc[key] === '') {oc[key] = 'EM BRANCO'}
      oc[key] = String(oc[key]).replace(/[,"']/gi, '')
    }
    this.ocs.push(oc)
  })
}

function push() {
  this.$ref
    .push(this.oco)
    .then(snap => this.$ref.child(snap.key).update({ id_fb: snap.key }))
}
</script>


