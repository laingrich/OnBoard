import{ initializeApp } from 'firebase/app'
import config from '../config'

let _app
function fbApp () {
  if (_app) return _app
  _app = initializeApp(config.firebase)
  return _app
}
