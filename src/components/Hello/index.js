import Hello from './Hello.vue'
const Hellos = {
  install: (vue) => {
    vue.component(
      'Hellos',
      Hello
    )
  }
}
export default Hellos