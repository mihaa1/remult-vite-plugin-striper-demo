import { Allow, BackendMethod, Entity, Fields, Validators } from 'remult';

@Entity<User>('users', {
  allowApiCrud: Allow.everyone,
})
export class User {
  @Fields.uuid()
  id = '';

  @Fields.string({
    validate: [Validators.required],
  })
  email = '';

  @BackendMethod({ allowed: true })
  async testBackendMethod() {}
}
