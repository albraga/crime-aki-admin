import Feature from 'ol/Feature.js'
import Point from 'ol/geom/Point.js'
import { Icon, Style } from 'ol/style.js'
import VectorSource from 'ol/source/Vector.js'
import { Vector as VectorLayer } from 'ol/layer.js'

export function getIcons(lonlatrray) {
	let vectors = []
	for (let x = 0; x < lonlatrray.length; x++) {
		vectors.push(makeIcon(lonlatrray[x]))
	}
	return vectors
}

function makeIcon(coords) {
	let iconFeature = new Feature({
		geometry: new Point([coords.lon, coords.lat])
	})

	let iconStyle = new Style({
		image: new Icon(
			/** @type {module:ol/style/Icon~Options} */ ({
				anchor: [0.5, 46],
				anchorXUnits: 'fraction',
				anchorYUnits: 'pixels',
				src: require('../assets/policemen.png')
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

	return vectorLayer
}
