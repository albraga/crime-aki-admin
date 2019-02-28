import Feature from 'ol/Feature.js'
import Point from 'ol/geom/Point.js'
import { Icon, Style } from 'ol/style.js'
import VectorSource from 'ol/source/Vector.js'
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer.js'
import TileJSON from 'ol/source/TileJSON.js'

export function getIcon(coords) {
	let iconFeature = new Feature({
		geometry: new Point([coords.lon, coords.lat]),
		name: 'Null Island',
		population: 4000,
		rainfall: 500
	})

	let iconStyle = new Style({
		image: new Icon(
			/** @type {module:ol/style/Icon~Options} */ ({
				anchor: [0.5, 46],
				anchorXUnits: 'fraction',
				anchorYUnits: 'pixels',
				src: require('../assets/policeman.png')
			})
		)
	})

	iconFeature.setStyle(iconStyle)

	let vectorSource = new VectorSource({
		features: [iconFeature]
	})

	let vectorLayer = new VectorLayer({
		source: vectorSource
	})

	let vectors = []
	vectors.push(vectorLayer)
	return vectors
}
