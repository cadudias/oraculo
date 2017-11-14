export default class HomeController {
  constructor(laminasService) {
    console.log(laminasService.lm)
    this.message = 'Hello'
    console.log('home controller')
  }
}