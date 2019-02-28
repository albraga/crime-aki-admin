import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ'

export function createMap(coords, zoom, map, iconrray) {
	//console.log(iconrray)
	new Map({
		target: map,
		layers: [
			new TileLayer({
				source: new XYZ({
					url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				})
			}),
			...iconrray
		],
		view: new View({
			projection: 'EPSG:4326',
			center: [coords.lon, coords.lat],
			zoom
		})
	})
}
