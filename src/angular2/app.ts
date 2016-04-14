// if you want to use systemjs please comment that
// START
import 'core-js/es6'
import 'core-js/es7/reflect'

import 'zone.js/dist/zone'
import 'reflect-metadata'

// Angular 2
import 'angular2/platform/browser'
import 'angular2/platform/common_dom'
import 'angular2/core'
import 'angular2/common'
import 'angular2/http'
import 'angular2/router'

// RxJS
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/mergeMap'
// END

import {bootstrap} from 'angular2/platform/browser'
import {Container} from './components/Container'

bootstrap(Container);