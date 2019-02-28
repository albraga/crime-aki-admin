
import axios from 'axios'
import Endereco from '../models/endereco.js'


export function reverseGeocoding(coords) {
  return new Promise(function (resolve) {
    axios.get(`https://dev.virtualearth.net/REST/v1/Locations/${coords.lat},${coords.lon}?o=json&key=AqGCNLEBOc6bE8VlPdnvd-ULuhYLc3PyJZIvuY6TQtvJ3ZR1jHnzWr-NBUwNuTeU`
    ).then(response => {
      if (response) {
        let addressFromApi = response.data.resourceSets[0].resources[0].address
        let bairro = addressFromApi.formattedAddress.split('-')[1].split(',')[0]
        let cep = addressFromApi.formattedAddress.split(',')[addressFromApi.formattedAddress.split(',').length - 1]
        let rua = addressFromApi.addressLine
        let cidade = addressFromApi.locality
        let estado = addressFromApi.adminDistrict
        let endereco = new Endereco(coords.lat, coords.lon, rua, bairro, cidade, estado, cep)
        resolve(endereco)
      }
    })
  })
}