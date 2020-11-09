const appName = 'jiangxinyouke'
window[appName] = {
  getLocation: customeGetLocation,
  launchNav: customeLaunchNav,
  setReferer: customeSetReferer,
  launchScan: customeLaunchScan
}

function h5Location (cb) {
  navigator.geolocation.getCurrentPosition(
    pos => {
      const { latitude, longitude } = pos.coords
      // 杩欓噷鑾峰彇鐨勬槸 WGS84 鍧愭爣锛岄渶瑕佽浆鎹负 GCJ02 鍧愭爣
      // const [lng, lat] = wgs84togcj02(longitude, latitude);
      console.log(latitude, longitude)
      cb({ lat: latitude, lng: longitude })
    },
    error => {
      console.log('error', error)
      // 瀹归敊 榛樿鍖椾含
      cb({ error, lat: 39.92, lng: 116.46 })
    },
    {
      enableHighAccuracy: true
    }
  )
}

function openGMap (params) {
  const { fromLng, fromLat, toLng, toLat, toName } = params
  // 鑾峰彇鍒扮敤鎴峰畾浣嶄俊鎭紝璧板鑸ā寮忥紱鏈幏鍙栧埌鐢ㄦ埛瀹氫綅淇℃伅锛岃蛋鍗曠偣鏍囨敞妯″紡
  const url = `https://uri.amap.com/navigation?from=${fromLng},${fromLat}&to=${toLng},${toLat},${toName}&mode=car&policy=1&callnative=1`
  window.location.href = url
}

function customeGetLocation (params, resCall, errCall) {
  resCall({  lat: 39.92, lng: 116.46 })
  // H5 瀹氫綅
  // if (navigator.geolocation) {
  //   h5Location(resCall)
  // } else {
  //   // console.log()
  //   errCall && errCall(new Error('娴忚鍣ㄤ笉鏀寔瀹氫綅'))
  // }
}

function customeLaunchNav (params) {
  openGMap(params)
}

function customeSetReferer (params) {
  console.log('customeSetReferer', params)
}

function customeLaunchScan (resCall) {
  resCall({ ret: 'scan result' })
}
