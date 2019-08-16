export default function(context) {
  if (context.store.getters.auth === null) {
    context.redirect('/login')
  }
}
