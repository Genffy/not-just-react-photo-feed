import {bootstrap}    from 'angular2/platform/browser'
import {Container} from './components/Container'
import { HTTP_PROVIDERS } from 'angular2/http'

bootstrap(Container, [HTTP_PROVIDERS]);