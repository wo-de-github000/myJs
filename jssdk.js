const appName = 'jiangxinyouke'
window[appName] = {
  getLocation: customeGetLocation,
  launchNav: customeLaunchNav,
  setReferer: customeSetReferer,
  launchScan: customeLaunchScan
}

function h5Location(cb) {
  navigator.geolocation.getCurrentPosition(
    pos => {
      const {
        latitude,
        longitude
      } = pos.coords
      console.log(latitude, longitude)
      cb({
        lat: latitude,
        lng: longitude
      })
    },
    error => {
      console.log('error', error)
      cb({
        error,
        lat: 39.92,
        lng: 116.46
      })
    }, {
      enableHighAccuracy: true
    }
  )
}

function openGMap(params) {
  const {
    fromLng,
    fromLat,
    toLng,
    toLat,
    toName
  } = params
  const url = `https://uri.amap.com/navigation?from=${fromLng},${fromLat}&to=${toLng},${toLat},${toName}&mode=car&policy=1&callnative=1`
  window.location.href = url
}

function customeGetLocation(params, resCall, errCall) {
  console.log('customeGetLocation');
  //处理定位情况，由于该方式通过app处理，无需操作 保留H5定位方法【h5Location】
}

function customeLaunchNav(params) {
  //跳转导航方式通过app处理 保留方法【openGMap(params)】
  console.log('customeLaunchNav');
}

function customeSetReferer(params) {
  console.log('customeSetReferer', params)
}

function customeLaunchScan(resCall) {
  // resCall({ ret: 'scan result' })
  console.log('customeLaunchScan');
}